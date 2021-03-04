import React, {ReactNode, ReactNodeArray} from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TOCInline from '@theme/TOCInline';
import {TOCItem} from '@docusaurus/types';
import styles from './styles.module.css';
import ResourceFields from "../ResourceFields";

type Props = {
    readonly resourceName: string;
    readonly toc?: boolean;
}
type ApiMethod = {
    operationId: string;
    summary: string;
    tags: Array<string>;
    responses: object;
    requestBody: object;
    parameters: Array<object>;
}
type Method = {
    path: string;
    methodName: string;
    method: ApiMethod;
}
type Methods = {
    get: Array<Method>;
    post: Array<Method>;
    put: Array<Method>;
    delete: Array<Method>;
}

function Capitalize(str: any): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Index = ({resourceName, toc}: Props): JSX.Element => {
    const {siteConfig} = useDocusaurusContext();
    const {openApiJSON} = siteConfig.customFields;
    const lookupMethods = (): Methods => {
        let methods = {
            get: [],
            post: [],
            put: [],
            delete: []
        } as Methods;
        const allPaths = openApiJSON.paths || {};
        Object.keys(allPaths).forEach((path) => {
            const pathMethods = allPaths[path] || {};
            Object.keys(pathMethods).forEach((methodName) => {
                const method = allPaths[path][methodName] || {};
                const tags = method?.tags || [];
                if (tags.includes(resourceName)) {
                    methods[methodName].push({path, methodName, method});
                }
            });
        });
        return methods;
    }
    const methodToTOCItem = ({path, methodName, method}: Method): TOCItem => {
        return {
            value: `<strong>${methodName.toUpperCase()} ${path}</strong><br/><span class="method-description">${method.summary}</span>`,
            id: `${method.operationId}`,
            children: []
        }
    };
    const getTOCItems = (): [] => {
        const methods = lookupMethods();
        return [].concat(
            methods.get.map(methodToTOCItem),
            methods.post.map(methodToTOCItem),
            methods.put.map(methodToTOCItem),
            methods.delete.map(methodToTOCItem)
        );
    };
    const parameterSchemaToHtml = (schema: any) : ReactNodeArray => {
        let children = [];
        Object.keys(schema).forEach((key) => {
           if(key === 'items'){
               children.push((<div>{Capitalize(schema.type || '')} of {Capitalize(schema.items.type)}s.</div>))
           }
           if(key === 'enum'){
               children.push((<div>Allowed values: <code>{schema.enum.join('|')}</code></div>));
           }
           if(key === 'default'){
               children.push((<div>The default value: <code>{schema.default}</code></div>));
           }
           if(key === 'minimum'){
               children.push((<div>The minimal value: <code>{schema.minimum}</code></div>));
           }
           if(key === 'maximum'){
               children.push((<div>The maximal value: <code>{schema.maximum}</code></div>));
           }
        });
        return children;
    };
    const getQueryParametersHtml = ({parameters}: ApiMethod) : ReactNode => (
            <table width="100%">
                <thead>
                    <tr>
                        <th align="center">Name</th>
                        <th align="center">In</th>
                        <th align="center">Is Required</th>
                        <th align="center">Type</th>
                        <th align="center" style={{width: '100%'}}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {parameters.sort((a, b) => +b.required - +a.required).map((parameter) => (
                        <tr key={parameter.name}>
                            <td align="center">{parameter.name}</td>
                            <td align="center">{parameter.in}</td>
                            <td align="center">{parameter.required ? 'Yes' : 'No'}</td>
                            <td align="left">{parameter.schema?.type || ''}</td>
                            <td align="left">
                                {parameter.description || ''}
                                {parameterSchemaToHtml(parameter.schema || {})}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );

    const getRequestBodyHtml = (method: ApiMethod) : ReactNode => {
        const ref = method.requestBody.content['application/json'].schema['$ref'];
        const resourceName = ref.split('/').pop();
        return (<ResourceFields schemaName={resourceName} />);
    };
    const methodToEndpointItem = ({path, methodName, method}: Method): ReactNode => (
            <div id={method.operationId} className={styles.endpointItem}>
                <div className={styles.endpointHeader}>
                    <div className={styles.endpointMethod}>{methodName.toUpperCase()}</div>
                    <div className={styles.endpointPath}>{path}</div>
                </div>
                <div className={styles.endpointDescription}>{method.summary}</div>
                {method.parameters && (
                    <div className={styles.endpointParameters}>
                        <div className={styles.endpointParametersTitle}>Query Parameters</div>
                        {getQueryParametersHtml(method)}
                    </div>
                )}
                {method.requestBody && (
                    <div className={styles.endpointParameters}>
                        <div className={styles.endpointParametersTitle}>Request Body Parameters</div>
                        {getRequestBodyHtml(method)}
                    </div>
                )}
            </div>
        );
    const getEndpoints = (): ReactNodeArray => {
        const methods = lookupMethods();
        let endpoints = [] as ReactNodeArray;
        return endpoints.concat(
            methods.get.map(methodToEndpointItem),
            methods.post.map(methodToEndpointItem),
            methods.put.map(methodToEndpointItem),
            methods.delete.map(methodToEndpointItem)
        );
    };
    return toc && (<TOCInline toc={getTOCItems()}/>) || (<div>{getEndpoints()}</div>);
}

export default Index;

