import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TOCInline from '@theme/TOCInline';
import {TOCItem} from '@docusaurus/types';

type Props = {
    readonly resourceName: string;
    readonly toc: boolean;
}

type Methods = {
    get: [];
    post: [];
    put: [];
    delete: [];
}

const ResourceMethods = ({resourceName, toc}: Props): JSX.Element => {
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
    const methodToTOCItem = ({path, methodName, method}): TOCItem => {
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
    }
    return (
        <TOCInline toc={getTOCItems()}/>
    );
}

export default ResourceMethods;

