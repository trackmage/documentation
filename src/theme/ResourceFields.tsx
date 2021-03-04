import React, {ReactElement, ReactNode} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Highlight from '@theme/Highlight';
const ReactMarkdownWithHtml = require('react-markdown/with-html');

type Props = {
    readonly schemaName: string;
    readonly titleTag?: string;
    readonly blockId?: string;
    readonly customTitle?: string;
}

const ResourceFields = (props: Props): JSX.Element => {
    const {siteConfig} = useDocusaurusContext();
    const {openApiJSON} = siteConfig.customFields;
    const {schemaName, blockId, customTitle} = props;
    const titleTag = (props.titleTag || `h3`) as keyof JSX.IntrinsicElements;
    const resourceObject = openApiJSON?.components?.schemas[schemaName] || {};

    const getObjectByRef = (ref: string) => {
        const path = ref.replace('#/','').split('/');
        let obj = openApiJSON;
        path.forEach(item => {obj = obj[item] || null;});
        return obj;
    }

    const getTitleTag = (): ReactElement => {
        return React.createElement(`${titleTag}`, {id: blockId || 'object-properties'}, customTitle || `${schemaName} Properties:`);
    }
    const propertyDescription = (options) => {
        const nullable = options.nullable ? `|null` : '';
        const type = options.type ? (<span>Type: <strong>{options.type}{nullable}</strong></span>) : '';
        const example = options.example ? (<p>Example: <code>{options.example}</code></p>) : '';
        const description = options.description ? (<ReactMarkdownWithHtml children={options.description} allowDangerousHtml />) : '';
        const format = options.format ? `(format: <strong>${options.format}</strong>)` : '';

        const extraHtml = options.extra ? (<ReactMarkdownWithHtml children={`${options.extra}`} allowDangerousHtml />) : '';
        return (
            <div>
                <p>{type} <span dangerouslySetInnerHTML={{ __html: format }}></span></p>
                {description}
                {example}
                {extraHtml}
            </div>
        ) as ReactElement;
    }

    const getResultJSON = (refObject, toString = true): string|{} => {
        let resultJson = {};
        Object.keys(refObject.properties).forEach(propertyKey => {
            const property = refObject.properties[propertyKey] || {};
            if(!!property.example){
                resultJson[propertyKey] = property.type === 'array'? eval(property.example) : property.example;
            } else if(!!property['$ref'] || !!property['anyOf']) {
                const childRef = !!property['anyOf'] ? getObjectByRef(property.anyOf[0]['$ref']) : getObjectByRef(property['$ref']);
                resultJson[propertyKey] = getResultJSON(childRef, false);
            } else {
                resultJson[propertyKey] = refObject.properties[propertyKey]?.type + (refObject.properties[propertyKey]?.nullable ? `|null` : '');
            }
        });
        return toString ? JSON.stringify(resultJson, null, 2) : resultJson;
    };

    const propertyRef = (name: string, options, ref: string): ReactElement => {
        const refObject = getObjectByRef(ref);
        if (null === refObject) return null;
        let prDescriptions = [];
        Object.keys(refObject.properties).forEach(propertyKey => {
            prDescriptions.push((<li><strong>{propertyKey}</strong>: <ReactMarkdownWithHtml children={refObject.properties[propertyKey]?.description} allowDangerousHtml /></li>));
        });
        const nullable = options.nullable ? `|null` : '';
        const type = refObject.type ? (<span>Type: <strong>{refObject.type}{nullable}</strong></span>) : '';
        const description = options.description ? (<p><ReactMarkdownWithHtml children={options.description} allowDangerousHtml /></p>) : '';
        const propDescription = React.createElement('ul', {}, prDescriptions);
        return (
            <div>
                <p>{type}</p>
                {description}
                Example: <pre style={{maxWidth: '500px', overflow: 'auto'}}>"{name}": {getResultJSON(refObject)}</pre>
                {propDescription}
            </div>
        ) as ReactElement;
    }

    const propertyToHTML = (name, options, required = false): ReactElement => {
        let tds: ReactNode[] = [];
        const ref = options['$ref'] || null;
        const readOnly = options.readOnly ? (<Highlight color="#25c2a0">READ-ONLY</Highlight>) : '';
        const isRequired = required? (<Highlight color="#25c2a0">REQUIRED</Highlight>) : '';
        const anyOf = options.anyOf || [];
        tds.push(React.createElement('td', {}, (<p><strong>{name}</strong><br/>{readOnly}{isRequired}</p>)))
        if (anyOf.length > 0) {
            let variants = [];
            anyOf.forEach(variant => {
                const variantRef = variant['$ref'] || null;
                if (variants.length > 0) {
                    variants.push((<div><strong>--- OR ---</strong></div>));
                }
                variants.push(variantRef === null? propertyDescription(options) : propertyRef(name, options, variantRef))
            });
            tds.push(React.createElement('td', {}, variants))
        } else {
            tds.push(React.createElement('td', {}, ref === null? propertyDescription(options) : propertyRef(name, options, ref)))
        }
        return React.createElement('tr', {key: name}, tds);
    }
    return (
        <div>
            <table className="properties-table">
                <tbody>
                    {Object.keys(resourceObject.properties)
                        .sort((a, b) => +resourceObject.properties[b].required || 0 - +resourceObject.properties[a].required || 0)
                        .map((key) => (
                        propertyToHTML(key, resourceObject.properties[key], resourceObject.required.indexOf(key) !== -1)
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResourceFields;
