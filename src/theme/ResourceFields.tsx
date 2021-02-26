import React, {ReactElement, ReactNode} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = {
    readonly schemaName: string;
    readonly titleTag: string;
    readonly blockId: string;
    readonly customTitle: string;
}

export const Highlight = ({children, color}) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '2px',
            color: '#fff',
            padding: '0.2rem',
            clear: 'both',
        }}>
    {children}
  </span>
);

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
        const description = options.description ? (<p  dangerouslySetInnerHTML={{ __html: options.description }}></p>) : '';
        const format = options.format ? `(format: <strong>${options.format}</strong>)` : '';
        const extraHtml = options.extraHtml ? (<div dangerouslySetInnerHTML={{ __html: options.extraHtml }}></div>) : '';
        return (
            <div>
                <p>{type} <span dangerouslySetInnerHTML={{ __html: format }}></span></p>
                {description}
                {example}
                {extraHtml}
            </div>
        ) as ReactElement;
    }

    const propertyRef = (name: string, options, ref: string): ReactElement => {
        const refObject = getObjectByRef(ref);
        if (null === refObject) return null;
        let resultJson = {};
        let prDescriptions = [];
        Object.keys(refObject.properties).forEach(propertyKey => {
            resultJson[propertyKey] = refObject.properties[propertyKey]?.example || (refObject.properties[propertyKey]?.type + (refObject.properties[propertyKey]?.nullable ? `|null` : ''));
            prDescriptions.push((<li><strong>{propertyKey}</strong>: {refObject.properties[propertyKey]?.description}</li>));
        });
        const nullable = options.nullable ? `|null` : '';
        const type = refObject.type ? (<span>Type: <strong>{refObject.type}{nullable}</strong></span>) : '';
        const description = options.description ? (<p>{options.description}</p>) : '';
        const propDescription = React.createElement('ul', {}, prDescriptions);
        return (
            <div>
                <p>{type}</p>
                {description}
                Example: <pre>"{name}": {JSON.stringify(resultJson, null, 2)}</pre>
                {propDescription}
            </div>
        ) as ReactElement;
    }

    const propertyToHTML = (name, options): ReactElement => {
        let tds: ReactNode[] = [];
        const ref = options['$ref'] || null;
        const readOnly = options.readOnly ? (<Highlight color="#25c2a0">READ-ONLY</Highlight>) : '';
        const anyOf = options.anyOf || [];
        tds.push(React.createElement('td', {}, (<p><strong>{name}</strong><br/>{readOnly}</p>)))
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
        return React.createElement('tr', {}, tds);
    }
    return (
        <div>
            {getTitleTag()}
            <table class="properties-table">
                <tbody>
                    {Object.keys(resourceObject.properties).map((key) => (
                        propertyToHTML(key, resourceObject.properties[key])
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResourceFields;
