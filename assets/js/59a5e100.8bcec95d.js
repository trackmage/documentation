"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[533],{3743:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(7462),a=r(3366),l=r(7294),o=["parentIndex"];function i(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),r=Array(7).fill(-1);t.forEach((function(e,t){var n=r.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),r[e.level]=t}));var n=[];return t.forEach((function(e){var r=e.parentIndex,l=(0,a.Z)(e,o);r>=0?t[r].children.push(l):n.push(l)})),n}function c(e){var t=e.toc,r=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}var _=r(6668);function s(e){var t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function u(e,t){var r,n,a=t.anchorTopOffset,l=e.find((function(e){return s(e).top>=a}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(n=e[e.indexOf(l)-1])?n:null:null!=(r=e[e.length-1])?r:null}function m(){var e=(0,l.useRef)(0),t=(0,_.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,l.useRef)(void 0),r=m();(0,l.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,a=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){for(var t=e.minHeadingLevel,r=e.maxHeadingLevel,n=[],a=t;a<=r;a+=1)n.push("h"+a+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=u(i,{anchorTopOffset:r.current}),_=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===_)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,r])}function d(e){var t=e.toc,r=e.className,n=e.linkClassName,a=e.isChild;return t.length?l.createElement("ul",{className:a?void 0:r},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:r,linkClassName:n}))}))):null}var E=l.memo(d),f=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function v(e){var t=e.toc,r=e.className,o=void 0===r?"table-of-contents table-of-contents__left-border":r,s=e.linkClassName,u=void 0===s?"table-of-contents__link":s,m=e.linkActiveClassName,d=void 0===m?void 0:m,v=e.minHeadingLevel,O=e.maxHeadingLevel,h=(0,a.Z)(e,f),y=(0,_.L)(),M=null!=v?v:y.tableOfContents.minHeadingLevel,g=null!=O?O:y.tableOfContents.maxHeadingLevel,D=function(e){var t=e.toc,r=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:i(t),minHeadingLevel:r,maxHeadingLevel:n})}),[t,r,n])}({toc:t,minHeadingLevel:M,maxHeadingLevel:g});return p((0,l.useMemo)((function(){if(u&&d)return{linkClassName:u,linkActiveClassName:d,minHeadingLevel:M,maxHeadingLevel:g}}),[u,d,M,g])),l.createElement(E,(0,n.Z)({toc:D,className:o,linkClassName:u},h))}},808:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem",clear:"both"}},t)}},5550:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2263),_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(808),_styles_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(619),ReactMarkdownWithHtml=__webpack_require__(7552),ResourceFields=function ResourceFields(props){var _openApiJSON$componen,_useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__.Z)(),siteConfig=_useDocusaurusContext.siteConfig,openApiJSON=siteConfig.customFields.openApiJSON,schemaName=props.schemaName,blockId=props.blockId,customTitle=props.customTitle,titleTag=props.titleTag||"h3",resourceObject=(null==openApiJSON||null==(_openApiJSON$componen=openApiJSON.components)?void 0:_openApiJSON$componen.schemas[schemaName])||{},getObjectByRef=function(e){var t=e.replace("#/","").split("/"),r=openApiJSON;return t.forEach((function(e){r=r[e]||null})),r},getTitleTag=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(""+titleTag,{id:blockId||"object-properties"},customTitle||schemaName+" Properties:")},propertyDescription=function(e){var t=e.nullable?"|null":"",r=e.type?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Type: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,e.type,t)):"",n=e.example?react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Example: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,e.example)):"",a=e.description?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:e.description,allowDangerousHtml:!0}):"",l=e.format?"(format: <strong>"+e.format+"</strong>)":"",o=e.extra?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:""+e.extra,allowDangerousHtml:!0}):"";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,r," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{dangerouslySetInnerHTML:{__html:l}})),a,n,o)},getResultJSON=function getResultJSON(refObject,propName,toString){if(void 0===toString&&(toString=!0),!refObject.properties)return"{}";var resultJson={};return Object.keys(refObject.properties).forEach((function(propertyKey){var property=refObject.properties[propertyKey]||{};if(property.example)resultJson[propertyKey]="array"===property.type?eval(property.example):property.example;else if(property.$ref||property.anyOf)if(propertyKey!==propName){var childRef=property.anyOf?getObjectByRef(property.anyOf[0].$ref):getObjectByRef(property.$ref);resultJson[propertyKey]=getResultJSON(childRef,propertyKey,!1)}else{var _refObject$properties;resultJson[propertyKey]="object"+(null!=(_refObject$properties=refObject.properties[propertyKey])&&_refObject$properties.nullable?"|null":"")}else{var _refObject$properties2,_refObject$properties3;resultJson[propertyKey]=(null==(_refObject$properties2=refObject.properties[propertyKey])?void 0:_refObject$properties2.type)+(null!=(_refObject$properties3=refObject.properties[propertyKey])&&_refObject$properties3.nullable?"|null":"")}})),toString?JSON.stringify(resultJson,null,2):resultJson},propertyRef=function(e,t,r){var n=getObjectByRef(r);if(null===n)return null;var a=[];Object.keys(n.properties).forEach((function(e){var t;a.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,e),": ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:null==(t=n.properties[e])?void 0:t.description,allowDangerousHtml:!0})))}));var l=t.nullable?"|null":"",o=n.type?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Type: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,n.type,l)):"",i=t.description?react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:t.description,allowDangerousHtml:!0})):"",c=react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_3__.Z.refProperties},a);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,o),i,"Example: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",{style:{maxWidth:"500px",overflow:"auto"}},'"',e,'": ',getResultJSON(n,e)),c)},propertyToHTML=function(e,t,r){void 0===r&&(r=!1);var n=[],a=t.$ref||null,l=t.readOnly?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"#25c2a0"},"READ-ONLY"):"",o=r?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"#25c2a0"},"REQUIRED"):"",i=t.anyOf||[];if(n.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:"name_"+e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,e),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),l,o))),i.length>0){var c=[];i.forEach((function(r){var n=r.$ref||null;c.length>0&&c.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:"or_"+e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,"--- OR ---"))),c.push(null===n?propertyDescription(t):propertyRef(e,t,n))})),n.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:"variants_"+e},c))}else n.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:"descr_"+e},null===a?propertyDescription(t):propertyRef(e,t,a)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{key:e},n)};return resourceObject.properties?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:"properties-table"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,Object.keys(resourceObject.properties).sort((function(e,t){return+resourceObject.properties[t].required||0-+resourceObject.properties[e].required||0})).map((function(e){var t;return propertyToHTML(e,resourceObject.properties[e],!!resourceObject.required&&-1!==(null==(t=resourceObject.required)?void 0:t.indexOf(e)))}))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:"no_props",style:{padding:5}},"No properties")};__webpack_exports__.Z=ResourceFields},1971:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(7294),a=r(2263),l=r(3743),o="tableOfContentsInline_prmo";function i(e){var t=e.toc,r=e.minHeadingLevel,a=e.maxHeadingLevel;return n.createElement("div",{className:o},n.createElement(l.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}var c="endpointItem_wmkv",_="endpointHeader_gJUz",s="endpointMethod_tGgf",u="endpointPath__qC4",m="endpointDescription_urlW",p="endpointParameters_w8Su",d="endpointParametersTitle_aZVq",E=r(5550);function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}var v=function(e){var t,r=e.resourceName,l=e.toc,o=(0,a.Z)().siteConfig.customFields.openApiJSON,v=function(){var e={get:[],post:[],put:[],delete:[]},t=o.paths||{};return Object.keys(t).sort((function(e,t){return e&&t&&e.length>t.length?1:-1})).forEach((function(n){var a=t[n]||{};Object.keys(a).forEach((function(a){var l=t[n][a]||{};((null==l?void 0:l.tags)||[]).includes(r)&&e[a].push({path:n,methodName:a,method:l})}))})),e},O=function(e){var t=e.path,r=e.methodName,n=e.method;return{value:"<strong>"+r.toUpperCase()+" "+t+'</strong><br/><span class="method-description">'+n.summary+"</span>",id:""+n.operationId,children:[]}},h=function(e){var t=e.parameters;return n.createElement("table",{width:"100%"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"Name"),n.createElement("th",{align:"center"},"In"),n.createElement("th",{align:"center"},"Is Required"),n.createElement("th",{align:"center"},"Type"),n.createElement("th",{align:"center",style:{width:"100%"}},"Description"))),n.createElement("tbody",null,t.sort((function(e,t){return+t.required-+e.required})).map((function(e){var t,r,a;return n.createElement("tr",{key:e.name},n.createElement("td",{align:"center"},e.name),n.createElement("td",{align:"center"},e.in),n.createElement("td",{align:"center"},e.required?"Yes":"No"),n.createElement("td",{align:"left"},(null==(t=e.schema)?void 0:t.type)||""),n.createElement("td",{align:"left"},e.description||"",(r=e.schema||{},a=[],Object.keys(r).forEach((function(e){"items"===e&&a.push(n.createElement("div",{key:"items_"+r.type},f(r.type||"")," of ",f(r.items.type),"s.")),"enum"===e&&a.push(n.createElement("div",{key:"enum_"+r.type},"Allowed values: ",n.createElement("code",null,r.enum.join("|")))),"default"===e&&a.push(n.createElement("div",{key:"default_"+r.type},"The default value: ",n.createElement("code",null,r.default))),"minimum"===e&&a.push(n.createElement("div",{key:"min_"+r.type},"The minimal value: ",n.createElement("code",null,r.minimum))),"maximum"===e&&a.push(n.createElement("div",{key:"max_"+r.type},"The maximal value: ",n.createElement("code",null,r.maximum)))})),a)))}))))},y=function(e){var t=e.path,r=e.methodName,a=e.method;return n.createElement("div",{id:a.operationId,className:c},n.createElement("div",{className:_},n.createElement("div",{className:s},r.toUpperCase()),n.createElement("div",{className:u},t)),n.createElement("div",{className:m},a.summary),a.parameters&&n.createElement("div",{className:p},n.createElement("div",{className:d},"Query Parameters"),h(a)),a.requestBody&&n.createElement("div",{className:p},n.createElement("div",{className:d},"Request Body Parameters"),function(e){var t=e.requestBody.content["application/json"].schema.$ref.split("/").pop();return n.createElement(E.Z,{schemaName:t})}(a)))};return l&&n.createElement(i,{toc:(t=v(),[].concat(t.get.map(O),t.post.map(O),t.put.map(O),t.delete.map(O)))})||n.createElement("div",null,function(){var e=v();return[].concat(e.get.map(y),e.post.map(y),e.put.map(y),e.delete.map(y))}())}},7240:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return E},frontMatter:function(){return _},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=r(5550),i=r(1971),c=["components"],_={id:"Fields",title:"Custom Fields",sidebar_label:"Custom Fields",slug:"custom-fields.html"},s=void 0,u={unversionedId:"Fields",id:"Fields",title:"Custom Fields",description:"What you can do with Fields",source:"@site/docs/CustomFields.mdx",sourceDirName:".",slug:"/custom-fields.html",permalink:"/docs/custom-fields.html",draft:!1,tags:[],version:"current",frontMatter:{id:"Fields",title:"Custom Fields",sidebar_label:"Custom Fields",slug:"custom-fields.html"},sidebar:"mainSidebar",previous:{title:"Webhooks",permalink:"/docs/workflow/webhooks.html"},next:{title:"Carriers",permalink:"/docs/carriers.html"}},m={},p=[{value:"What you can do with Fields",id:"what-you-can-do-with-fields",level:2},{value:"Field Properties:",id:"field-properties",level:2},{value:"Endpoints",id:"endpoints",level:2}],d={toc:p};function E(e){var t=e.components,r=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-you-can-do-with-fields"},"What you can do with Fields"),(0,l.kt)(i.Z,{resourceName:"Field",toc:!0,mdxType:"ResourceMethods"}),(0,l.kt)("h2",{id:"field-properties"},"Field Properties:"),(0,l.kt)(o.Z,{schemaName:"Field-Get",mdxType:"ResourceFields"}),(0,l.kt)("h2",{id:"endpoints"},"Endpoints"),(0,l.kt)(i.Z,{resourceName:"Field",mdxType:"ResourceMethods"}))}E.isMDXComponent=!0},619:function(e,t){t.Z={refProperties:"refProperties_gMyh"}}}]);