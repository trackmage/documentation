"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[523],{3743:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(7462),a=r(3366),i=r(7294),l=r(6668),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),r=Array(7).fill(-1);t.forEach((function(e,t){var n=r.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),r[e.level]=t}));var n=[];return t.forEach((function(e){var r=e.parentIndex,i=(0,a.Z)(e,o);r>=0?t[r].children.push(i):n.push(i)})),n}function s(e){var t=e.toc,r=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:r,maxHeadingLevel:n});return function(e){return e.level>=r&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function _(e){var t=e.getBoundingClientRect();return t.top===t.bottom?_(e.parentNode):t}function p(e,t){var r,n,a=t.anchorTopOffset,i=e.find((function(e){return _(e).top>=a}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(_(i))?i:null!=(n=e[e.indexOf(i)-1])?n:null:null!=(r=e[e.length-1])?r:null}function u(){var e=(0,i.useRef)(0),t=(0,l.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){var t=(0,i.useRef)(void 0),r=u();(0,i.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,a=e.linkActiveClassName,i=e.minHeadingLevel,l=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,r=e.maxHeadingLevel,n=[],a=t;a<=r;a+=1)n.push("h"+a+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=p(o,{anchorTopOffset:r.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,r){r?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,r])}function d(e){var t=e.toc,r=e.className,n=e.linkClassName,a=e.isChild;return t.length?i.createElement("ul",{className:a?void 0:r},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(d,{isChild:!0,toc:e.children,className:r,linkClassName:n}))}))):null}var E=i.memo(d),f=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,r=e.className,o=void 0===r?"table-of-contents table-of-contents__left-border":r,_=e.linkClassName,p=void 0===_?"table-of-contents__link":_,u=e.linkActiveClassName,d=void 0===u?void 0:u,h=e.minHeadingLevel,v=e.maxHeadingLevel,O=(0,a.Z)(e,f),y=(0,l.L)(),g=null!=h?h:y.tableOfContents.minHeadingLevel,M=null!=v?v:y.tableOfContents.maxHeadingLevel,D=function(e){var t=e.toc,r=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,i.useMemo)((function(){return s({toc:c(t),minHeadingLevel:r,maxHeadingLevel:n})}),[t,r,n])}({toc:t,minHeadingLevel:g,maxHeadingLevel:M});return m((0,i.useMemo)((function(){if(p&&d)return{linkClassName:p,linkActiveClassName:d,minHeadingLevel:g,maxHeadingLevel:M}}),[p,d,g,M])),i.createElement(E,(0,n.Z)({toc:D,className:o,linkClassName:p},O))}},808:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem",clear:"both"}},t)}},5550:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2263),_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(808),_styles_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(619),ReactMarkdownWithHtml=__webpack_require__(7552),ResourceFields=function ResourceFields(props){var _openApiJSON$componen,_useDocusaurusContext=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__.Z)(),siteConfig=_useDocusaurusContext.siteConfig,openApiJSON=siteConfig.customFields.openApiJSON,schemaName=props.schemaName,blockId=props.blockId,customTitle=props.customTitle,titleTag=props.titleTag||"h3",resourceObject=(null==openApiJSON||null==(_openApiJSON$componen=openApiJSON.components)?void 0:_openApiJSON$componen.schemas[schemaName])||{},getObjectByRef=function(e){var t=e.replace("#/","").split("/"),r=openApiJSON;return t.forEach((function(e){r=r[e]||null})),r},getTitleTag=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(""+titleTag,{id:blockId||"object-properties"},customTitle||schemaName+" Properties:")},propertyDescription=function(e){var t=e.nullable?"|null":"",r=e.type?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Type: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,e.type,t)):"",n=e.example?react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Example: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("code",null,e.example)):"",a=e.description?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:e.description,allowDangerousHtml:!0}):"",i=e.format?"(format: <strong>"+e.format+"</strong>)":"",l=e.extra?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:""+e.extra,allowDangerousHtml:!0}):"";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,r," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{dangerouslySetInnerHTML:{__html:i}})),a,n,l)},getResultJSON=function getResultJSON(refObject,propName,toString){if(void 0===toString&&(toString=!0),!refObject.properties)return"{}";var resultJson={};return Object.keys(refObject.properties).forEach((function(propertyKey){var property=refObject.properties[propertyKey]||{};if(property.example)resultJson[propertyKey]="array"===property.type?eval(property.example):property.example;else if(property.$ref||property.anyOf)if(propertyKey!==propName){var childRef=property.anyOf?getObjectByRef(property.anyOf[0].$ref):getObjectByRef(property.$ref);resultJson[propertyKey]=getResultJSON(childRef,propertyKey,!1)}else{var _refObject$properties;resultJson[propertyKey]="object"+(null!=(_refObject$properties=refObject.properties[propertyKey])&&_refObject$properties.nullable?"|null":"")}else{var _refObject$properties2,_refObject$properties3;resultJson[propertyKey]=(null==(_refObject$properties2=refObject.properties[propertyKey])?void 0:_refObject$properties2.type)+(null!=(_refObject$properties3=refObject.properties[propertyKey])&&_refObject$properties3.nullable?"|null":"")}})),toString?JSON.stringify(resultJson,null,2):resultJson},propertyRef=function(e,t,r){var n=getObjectByRef(r);if(null===n)return null;var a=[];Object.keys(n.properties).forEach((function(e){var t;a.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,e),": ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:null==(t=n.properties[e])?void 0:t.description,allowDangerousHtml:!0})))}));var i=t.nullable?"|null":"",l=n.type?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Type: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,n.type,i)):"",o=t.description?react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReactMarkdownWithHtml,{children:t.description,allowDangerousHtml:!0})):"",c=react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:_styles_module_css__WEBPACK_IMPORTED_MODULE_3__.Z.refProperties},a);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,l),o,"Example: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre",{style:{maxWidth:"500px",overflow:"auto"}},'"',e,'": ',getResultJSON(n,e)),c)},propertyToHTML=function(e,t,r){void 0===r&&(r=!1);var n=[],a=t.$ref||null,i=t.readOnly?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"#25c2a0"},"READ-ONLY"):"",l=r?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Highlight__WEBPACK_IMPORTED_MODULE_2__.Z,{color:"#25c2a0"},"REQUIRED"):"",o=t.anyOf||[];if(n.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:"name_"+e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,e),react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),i,l))),o.length>0){var c=[];o.forEach((function(r){var n=r.$ref||null;c.length>0&&c.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:"or_"+e},react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong",null,"--- OR ---"))),c.push(null===n?propertyDescription(t):propertyRef(e,t,n))})),n.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:"variants_"+e},c))}else n.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("td",{key:"descr_"+e},null===a?propertyDescription(t):propertyRef(e,t,a)));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr",{key:e},n)};return resourceObject.properties?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("table",{className:"properties-table"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody",null,Object.keys(resourceObject.properties).sort((function(e,t){return+resourceObject.properties[t].required||0-+resourceObject.properties[e].required||0})).map((function(e){var t;return propertyToHTML(e,resourceObject.properties[e],!!resourceObject.required&&-1!==(null==(t=resourceObject.required)?void 0:t.indexOf(e)))}))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:"no_props",style:{padding:5}},"No properties")};__webpack_exports__.Z=ResourceFields},1971:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(7294),a=r(2263),i=r(3743),l="tableOfContentsInline_prmo";function o(e){var t=e.toc,r=e.minHeadingLevel,a=e.maxHeadingLevel;return n.createElement("div",{className:l},n.createElement(i.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null}))}var c="endpointItem_wmkv",s="endpointHeader_gJUz",_="endpointMethod_tGgf",p="endpointPath__qC4",u="endpointDescription_urlW",m="endpointParameters_w8Su",d="endpointParametersTitle_aZVq",E=r(5550);function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}var h=function(e){var t,r=e.resourceName,i=e.toc,l=(0,a.Z)().siteConfig.customFields.openApiJSON,h=function(){var e={get:[],post:[],put:[],delete:[]},t=l.paths||{};return Object.keys(t).sort((function(e,t){return e&&t&&e.length>t.length?1:-1})).forEach((function(n){var a=t[n]||{};Object.keys(a).forEach((function(a){var i=t[n][a]||{};((null==i?void 0:i.tags)||[]).includes(r)&&e[a].push({path:n,methodName:a,method:i})}))})),e},v=function(e){var t=e.path,r=e.methodName,n=e.method;return{value:"<strong>"+r.toUpperCase()+" "+t+'</strong><br/><span class="method-description">'+n.summary+"</span>",id:""+n.operationId,children:[]}},O=function(e){var t=e.parameters;return n.createElement("table",{width:"100%"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{align:"center"},"Name"),n.createElement("th",{align:"center"},"In"),n.createElement("th",{align:"center"},"Is Required"),n.createElement("th",{align:"center"},"Type"),n.createElement("th",{align:"center",style:{width:"100%"}},"Description"))),n.createElement("tbody",null,t.sort((function(e,t){return+t.required-+e.required})).map((function(e){var t,r,a;return n.createElement("tr",{key:e.name},n.createElement("td",{align:"center"},e.name),n.createElement("td",{align:"center"},e.in),n.createElement("td",{align:"center"},e.required?"Yes":"No"),n.createElement("td",{align:"left"},(null==(t=e.schema)?void 0:t.type)||""),n.createElement("td",{align:"left"},e.description||"",(r=e.schema||{},a=[],Object.keys(r).forEach((function(e){"items"===e&&a.push(n.createElement("div",{key:"items_"+r.type},f(r.type||"")," of ",f(r.items.type),"s.")),"enum"===e&&a.push(n.createElement("div",{key:"enum_"+r.type},"Allowed values: ",n.createElement("code",null,r.enum.join("|")))),"default"===e&&a.push(n.createElement("div",{key:"default_"+r.type},"The default value: ",n.createElement("code",null,r.default))),"minimum"===e&&a.push(n.createElement("div",{key:"min_"+r.type},"The minimal value: ",n.createElement("code",null,r.minimum))),"maximum"===e&&a.push(n.createElement("div",{key:"max_"+r.type},"The maximal value: ",n.createElement("code",null,r.maximum)))})),a)))}))))},y=function(e){var t=e.path,r=e.methodName,a=e.method;return n.createElement("div",{id:a.operationId,className:c},n.createElement("div",{className:s},n.createElement("div",{className:_},r.toUpperCase()),n.createElement("div",{className:p},t)),n.createElement("div",{className:u},a.summary),a.parameters&&n.createElement("div",{className:m},n.createElement("div",{className:d},"Query Parameters"),O(a)),a.requestBody&&n.createElement("div",{className:m},n.createElement("div",{className:d},"Request Body Parameters"),function(e){var t=e.requestBody.content["application/json"].schema.$ref.split("/").pop();return n.createElement(E.Z,{schemaName:t})}(a)))};return i&&n.createElement(o,{toc:(t=h(),[].concat(t.get.map(v),t.post.map(v),t.put.map(v),t.delete.map(v)))})||n.createElement("div",null,function(){var e=h();return[].concat(e.get.map(y),e.post.map(y),e.put.map(y),e.delete.map(y))}())}},8333:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return _},default:function(){return E},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=r(1971),o=r(5550),c=["components"],s={id:"Shipment",title:"Shipment",sidebar_label:"Shipment",slug:"shipment.html"},_=void 0,p={unversionedId:"shipment/Shipment",id:"shipment/Shipment",title:"Shipment",description:"All Shipment objects are associated with a specific Workspace, that is why workspace is present in all shipments,",source:"@site/docs/shipment/Shipment.mdx",sourceDirName:"shipment",slug:"/shipment/shipment.html",permalink:"/docs/shipment/shipment.html",draft:!1,tags:[],version:"current",frontMatter:{id:"Shipment",title:"Shipment",sidebar_label:"Shipment",slug:"shipment.html"},sidebar:"mainSidebar",previous:{title:"Workspaces",permalink:"/docs/workspaces.html"},next:{title:"Shipment Item",permalink:"/docs/shipment/shipment-item.html"}},u={},m=[{value:"What you can do with Shipment",id:"what-you-can-do-with-shipment",level:2},{value:"ShipmentItem Properties",id:"shipmentitem-properties",level:2},{value:"Endpoints",id:"endpoints",level:2}],d={toc:m};function E(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All Shipment objects are associated with a specific ",(0,i.kt)("a",{parentName:"p",href:"/docs/workspaces.html"},"Workspace"),", that is why workspace is present in all shipments,\nand it is required during creation."),(0,i.kt)("p",null,"The trackingNumber is required for the tracking. Each shipment supports a single tracking number.\nIf you need to use multiple tracking numbers, then you should create separate shipments."),(0,i.kt)("p",null,"A Shipment created with a valid ",(0,i.kt)("strong",{parentName:"p"},"trackingNumber")," will automatically populate its tracking information."),(0,i.kt)("p",null,"Tracking information (origin carrier, destination carrier, tracking status, etc.) is generated by TrackMage and\ncannot be modified by the user."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Address")," and ",(0,i.kt)("strong",{parentName:"p"},"shipmentStatus")," contained within a Shipment may be created at the same time."),(0,i.kt)("h2",{id:"what-you-can-do-with-shipment"},"What you can do with Shipment"),(0,i.kt)(l.Z,{resourceName:"Shipment",toc:!0,mdxType:"ResourceMethods"}),(0,i.kt)("h2",{id:"shipmentitem-properties"},"ShipmentItem Properties"),(0,i.kt)(o.Z,{schemaName:"Shipment-Get",mdxType:"ResourceFields"}),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)(l.Z,{resourceName:"Shipment",mdxType:"ResourceMethods"}))}E.isMDXComponent=!0},619:function(e,t){t.Z={refProperties:"refProperties_gMyh"}}}]);