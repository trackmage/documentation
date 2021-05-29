(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[894],{7601:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var a=n(7294),i=n(2263),r=n(6010),m="tableOfContentsInline_3fWc";function l(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return a.createElement("div",{className:(0,r.Z)(m)},a.createElement(l,{toc:t}))},c="endpointItem_1HQL",s="endpointHeader_iX0t",p="endpointMethod_2SQp",d="endpointPath_2_Zo",h="endpointDescription_1iXR",u="endpointParameters_JrGz",f="endpointParametersTitle_2iBJ",v=n(5550);function y(e){return e.charAt(0).toUpperCase()+e.slice(1)}var E=function(e){var t,n=e.resourceName,r=e.toc,m=(0,i.default)().siteConfig.customFields.openApiJSON,l=function(){var e={get:[],post:[],put:[],delete:[]},t=m.paths||{};return Object.keys(t).sort((function(e,t){return e&&t&&e.length>t.length?1:-1})).forEach((function(a){var i=t[a]||{};Object.keys(i).forEach((function(i){var r=t[a][i]||{};((null==r?void 0:r.tags)||[]).includes(n)&&e[i].push({path:a,methodName:i,method:r})}))})),e},E=function(e){var t=e.path,n=e.methodName,a=e.method;return{value:"<strong>"+n.toUpperCase()+" "+t+'</strong><br/><span class="method-description">'+a.summary+"</span>",id:""+a.operationId,children:[]}},k=function(e){var t=e.parameters;return a.createElement("table",{width:"100%"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"center"},"Name"),a.createElement("th",{align:"center"},"In"),a.createElement("th",{align:"center"},"Is Required"),a.createElement("th",{align:"center"},"Type"),a.createElement("th",{align:"center",style:{width:"100%"}},"Description"))),a.createElement("tbody",null,t.sort((function(e,t){return+t.required-+e.required})).map((function(e){var t,n,i;return a.createElement("tr",{key:e.name},a.createElement("td",{align:"center"},e.name),a.createElement("td",{align:"center"},e.in),a.createElement("td",{align:"center"},e.required?"Yes":"No"),a.createElement("td",{align:"left"},(null==(t=e.schema)?void 0:t.type)||""),a.createElement("td",{align:"left"},e.description||"",(n=e.schema||{},i=[],Object.keys(n).forEach((function(e){"items"===e&&i.push(a.createElement("div",{key:"items_"+n.type},y(n.type||"")," of ",y(n.items.type),"s.")),"enum"===e&&i.push(a.createElement("div",{key:"enum_"+n.type},"Allowed values: ",a.createElement("code",null,n.enum.join("|")))),"default"===e&&i.push(a.createElement("div",{key:"default_"+n.type},"The default value: ",a.createElement("code",null,n.default))),"minimum"===e&&i.push(a.createElement("div",{key:"min_"+n.type},"The minimal value: ",a.createElement("code",null,n.minimum))),"maximum"===e&&i.push(a.createElement("div",{key:"max_"+n.type},"The maximal value: ",a.createElement("code",null,n.maximum)))})),i)))}))))},g=function(e){var t=e.path,n=e.methodName,i=e.method;return a.createElement("div",{id:i.operationId,className:c},a.createElement("div",{className:s},a.createElement("div",{className:p},n.toUpperCase()),a.createElement("div",{className:d},t)),a.createElement("div",{className:h},i.summary),i.parameters&&a.createElement("div",{className:u},a.createElement("div",{className:f},"Query Parameters"),k(i)),i.requestBody&&a.createElement("div",{className:u},a.createElement("div",{className:f},"Request Body Parameters"),function(e){var t=e.requestBody.content["application/json"].schema.$ref.split("/").pop();return a.createElement(v.Z,{schemaName:t})}(i)))};return r&&a.createElement(o,{toc:(t=l(),[].concat(t.get.map(E),t.post.map(E),t.put.map(E),t.delete.map(E)))})||a.createElement("div",null,function(){var e=l();return[].concat(e.get.map(g),e.post.map(g),e.put.map(g),e.delete.map(g))}())}},2911:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),m=n(7601),l=n(5550),o={id:"ShipmentItem",title:"Shipment Item",sidebar_label:"Shipment Item",slug:"shipment-item.html"},c={unversionedId:"shipment/ShipmentItem",id:"shipment/ShipmentItem",isDocsHomePage:!1,title:"Shipment Item",description:"Each Shipment Item contains information about the shipped OrderItem in the Shipment.",source:"@site/docs/shipment/ShipmentItem.mdx",sourceDirName:"shipment",slug:"/shipment/shipment-item.html",permalink:"/docs/shipment/shipment-item.html",version:"current",sidebar_label:"Shipment Item",frontMatter:{id:"ShipmentItem",title:"Shipment Item",sidebar_label:"Shipment Item",slug:"shipment-item.html"},sidebar:"mainSidebar",previous:{title:"Shipment",permalink:"/docs/shipment/shipment.html"},next:{title:"Generate Tracking Page Links",permalink:"/docs/shipment/tracking-page-links.html"}},s=[{value:"What you can do with ShipmentItem",id:"what-you-can-do-with-shipmentitem",children:[]},{value:"ShipmentItem Properties",id:"shipmentitem-properties",children:[]},{value:"Endpoints",id:"endpoints",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each Shipment Item contains information about the shipped ",(0,r.kt)("a",{parentName:"p",href:"/docs/order/order-item.html"},"OrderItem")," in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/shipment/shipment.html"},"Shipment"),"."),(0,r.kt)("p",null,"When you create or update a ShipmentItem our system validates the Quantity can be fulfilled.\nAvailable quantity is calculated depending on ",(0,r.kt)("inlineCode",{parentName:"p"},"orderItem.qty - orderItem.fulfilledQty"),"."),(0,r.kt)("p",null,"ShipmentItems will be deleted automatically on delete parent ",(0,r.kt)("a",{parentName:"p",href:"/docs/shipment/shipment.html"},"Shipment")," object or related ",(0,r.kt)("a",{parentName:"p",href:"/docs/order/order-item.html"},"OrderItem")," object."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once a ShipmentItem is created you cannot change the shipment, but you can change OrderItem and Quantity."))),(0,r.kt)("h2",{id:"what-you-can-do-with-shipmentitem"},"What you can do with ShipmentItem"),(0,r.kt)(m.Z,{resourceName:"ShipmentItem",toc:!0,mdxType:"ResourceMethods"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"shipmentitem-properties"},"ShipmentItem Properties"),(0,r.kt)(l.Z,{schemaName:"ShipmentItem-Get",mdxType:"ResourceFields"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)(m.Z,{resourceName:"ShipmentItem",mdxType:"ResourceMethods"}))}d.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);