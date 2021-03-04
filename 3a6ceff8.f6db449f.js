(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var _=r(3),a=r(7),l=(r(0),r(92)),n=r(97),o={id:"Order",title:"Order",sidebar_label:"Order",slug:"order.html"},c={unversionedId:"Order/Order",id:"Order/Order",isDocsHomePage:!1,title:"Order",source:"@site/docs/Order/Order.mdx",slug:"/Order/order.html",permalink:"/docs/Order/order.html",version:"current",sidebar_label:"Order",sidebar:"mainSidebar",previous:{title:"Shipment Item",permalink:"/docs/Shipment/shipment-item.html"},next:{title:"OrderItem",permalink:"/docs/Order/order-item.html"}},p=[],u={toc:p};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(_.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)(n.a,{schemaName:"Order-Get",customTitle:"Order Properties:",mdxType:"ResourceFields"}))}i.isMDXComponent=!0},97:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(98),ReactMarkdownWithHtml=__webpack_require__(106),ResourceFields=function ResourceFields(props){var _openApiJSON$componen,_useDocusaurusContext=Object(_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__.default)(),siteConfig=_useDocusaurusContext.siteConfig,openApiJSON=siteConfig.customFields.openApiJSON,schemaName=props.schemaName,blockId=props.blockId,customTitle=props.customTitle,titleTag=props.titleTag||"h3",resourceObject=(null==openApiJSON||null===(_openApiJSON$componen=openApiJSON.components)||void 0===_openApiJSON$componen?void 0:_openApiJSON$componen.schemas[schemaName])||{},getObjectByRef=function(e){var t=e.replace("#/","").split("/"),r=openApiJSON;return t.forEach((function(e){r=r[e]||null})),r},getTitleTag=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(""+titleTag,{id:blockId||"object-properties"},customTitle||schemaName+" Properties:")},propertyDescription=function(e){var t=e.nullable?"|null":"",r=e.type?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Type: ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,e.type,t)):"",_=e.example?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Example: ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code",null,e.example)):"",a=e.description?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactMarkdownWithHtml,{children:e.description,allowDangerousHtml:!0}):"",l=e.format?"(format: <strong>"+e.format+"</strong>)":"",n=e.extra?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactMarkdownWithHtml,{children:""+e.extra,allowDangerousHtml:!0}):"";return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,r," ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{dangerouslySetInnerHTML:{__html:l}})),a,_,n)},getResultJSON=function getResultJSON(refObject,toString){void 0===toString&&(toString=!0);var resultJson={};return Object.keys(refObject.properties).forEach((function(propertyKey){var property=refObject.properties[propertyKey]||{};if(property.example)resultJson[propertyKey]="array"===property.type?eval(property.example):property.example;else if(property.$ref||property.anyOf){var childRef=property.anyOf?getObjectByRef(property.anyOf[0].$ref):getObjectByRef(property.$ref);resultJson[propertyKey]=getResultJSON(childRef,!1)}else{var _refObject$properties,_refObject$properties2;resultJson[propertyKey]=(null===(_refObject$properties=refObject.properties[propertyKey])||void 0===_refObject$properties?void 0:_refObject$properties.type)+(null!==(_refObject$properties2=refObject.properties[propertyKey])&&void 0!==_refObject$properties2&&_refObject$properties2.nullable?"|null":"")}})),toString?JSON.stringify(resultJson,null,2):resultJson},propertyRef=function(e,t,r){var _=getObjectByRef(r);if(null===_)return null;var a=[];Object.keys(_.properties).forEach((function(e){var t;a.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,e),": ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactMarkdownWithHtml,{children:null===(t=_.properties[e])||void 0===t?void 0:t.description,allowDangerousHtml:!0})))}));var l=t.nullable?"|null":"",n=_.type?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Type: ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,_.type,l)):"",o=t.description?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReactMarkdownWithHtml,{children:t.description,allowDangerousHtml:!0})):"",c=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{},a);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,n),o,"Example: ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre",{style:{maxWidth:"500px",overflow:"auto"}},'"',e,'": ',getResultJSON(_)),c)},propertyToHTML=function(e,t,r){void 0===r&&(r=!1);var _=[],a=t.$ref||null,l=t.readOnly?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__.a,{color:"#25c2a0"},"READ-ONLY"):"",n=r?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__.a,{color:"#25c2a0"},"REQUIRED"):"",o=t.anyOf||[];if(_.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,e),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),l,n))),o.length>0){var c=[];o.forEach((function(r){var _=r.$ref||null;c.length>0&&c.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"--- OR ---"))),c.push(null===_?propertyDescription(t):propertyRef(e,t,_))})),_.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{},c))}else _.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",{},null===a?propertyDescription(t):propertyRef(e,t,a)));return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{key:e},_)};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",{className:"properties-table"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,Object.keys(resourceObject.properties).sort((function(e,t){return+resourceObject.properties[t].required||0-+resourceObject.properties[e].required||0})).map((function(e){return propertyToHTML(e,resourceObject.properties[e],-1!==resourceObject.required.indexOf(e))})))))};__webpack_exports__.a=ResourceFields},98:function(e,t,r){"use strict";var _=r(0),a=r.n(_);t.a=function(e){var t=e.children,r=e.color;return a.a.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem",clear:"both"}},t)}}}]);