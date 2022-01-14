"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[523],{5002:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),i=n(3366),r=n(7294),l=n(3616),m=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,n=e.className,a=e.linkClassName,i=e.isChild;return t.length?r.createElement("ul",{className:i?void 0:n},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function c(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,p=void 0===o?"table-of-contents__link":o,d=e.linkActiveClassName,u=void 0===d?void 0:d,h=e.minHeadingLevel,v=e.maxHeadingLevel,f=(0,i.Z)(e,m),k=(0,l.LU)(),g=null!=h?h:k.tableOfContents.minHeadingLevel,E=null!=v?v:k.tableOfContents.maxHeadingLevel,N=(0,l.DA)({toc:t,minHeadingLevel:g,maxHeadingLevel:E}),y=(0,r.useMemo)((function(){if(p&&u)return{linkClassName:p,linkActiveClassName:u,minHeadingLevel:g,maxHeadingLevel:E}}),[p,u,g,E]);return(0,l.Si)(y),r.createElement(s,(0,a.Z)({toc:N,className:c,linkClassName:p},f))}},7602:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(7294),i=n(2263),r="tableOfContentsInline_3fWc",l=n(5002);var m=function(e){var t=e.toc,n=e.minHeadingLevel,i=e.maxHeadingLevel;return a.createElement("div",{className:r},a.createElement(l.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))},s="endpointItem_1HQL",c="endpointHeader_iX0t",o="endpointMethod_2SQp",p="endpointPath_2_Zo",d="endpointDescription_1iXR",u="endpointParameters_JrGz",h="endpointParametersTitle_2iBJ",v=n(5550);function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}var k=function(e){var t,n=e.resourceName,r=e.toc,l=(0,i.Z)().siteConfig.customFields.openApiJSON,k=function(){var e={get:[],post:[],put:[],delete:[]},t=l.paths||{};return Object.keys(t).sort((function(e,t){return e&&t&&e.length>t.length?1:-1})).forEach((function(a){var i=t[a]||{};Object.keys(i).forEach((function(i){var r=t[a][i]||{};((null==r?void 0:r.tags)||[]).includes(n)&&e[i].push({path:a,methodName:i,method:r})}))})),e},g=function(e){var t=e.path,n=e.methodName,a=e.method;return{value:"<strong>"+n.toUpperCase()+" "+t+'</strong><br/><span class="method-description">'+a.summary+"</span>",id:""+a.operationId,children:[]}},E=function(e){var t=e.parameters;return a.createElement("table",{width:"100%"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"center"},"Name"),a.createElement("th",{align:"center"},"In"),a.createElement("th",{align:"center"},"Is Required"),a.createElement("th",{align:"center"},"Type"),a.createElement("th",{align:"center",style:{width:"100%"}},"Description"))),a.createElement("tbody",null,t.sort((function(e,t){return+t.required-+e.required})).map((function(e){var t,n,i;return a.createElement("tr",{key:e.name},a.createElement("td",{align:"center"},e.name),a.createElement("td",{align:"center"},e.in),a.createElement("td",{align:"center"},e.required?"Yes":"No"),a.createElement("td",{align:"left"},(null==(t=e.schema)?void 0:t.type)||""),a.createElement("td",{align:"left"},e.description||"",(n=e.schema||{},i=[],Object.keys(n).forEach((function(e){"items"===e&&i.push(a.createElement("div",{key:"items_"+n.type},f(n.type||"")," of ",f(n.items.type),"s.")),"enum"===e&&i.push(a.createElement("div",{key:"enum_"+n.type},"Allowed values: ",a.createElement("code",null,n.enum.join("|")))),"default"===e&&i.push(a.createElement("div",{key:"default_"+n.type},"The default value: ",a.createElement("code",null,n.default))),"minimum"===e&&i.push(a.createElement("div",{key:"min_"+n.type},"The minimal value: ",a.createElement("code",null,n.minimum))),"maximum"===e&&i.push(a.createElement("div",{key:"max_"+n.type},"The maximal value: ",a.createElement("code",null,n.maximum)))})),i)))}))))},N=function(e){var t=e.path,n=e.methodName,i=e.method;return a.createElement("div",{id:i.operationId,className:s},a.createElement("div",{className:c},a.createElement("div",{className:o},n.toUpperCase()),a.createElement("div",{className:p},t)),a.createElement("div",{className:d},i.summary),i.parameters&&a.createElement("div",{className:u},a.createElement("div",{className:h},"Query Parameters"),E(i)),i.requestBody&&a.createElement("div",{className:u},a.createElement("div",{className:h},"Request Body Parameters"),function(e){var t=e.requestBody.content["application/json"].schema.$ref.split("/").pop();return a.createElement(v.Z,{schemaName:t})}(i)))};return r&&a.createElement(m,{toc:(t=k(),[].concat(t.get.map(g),t.post.map(g),t.put.map(g),t.delete.map(g)))})||a.createElement("div",null,function(){var e=k();return[].concat(e.get.map(N),e.post.map(N),e.put.map(N),e.delete.map(N))}())}},8333:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=n(7602),m=n(5550),s=["components"],c={id:"Shipment",title:"Shipment",sidebar_label:"Shipment",slug:"shipment.html"},o=void 0,p={unversionedId:"shipment/Shipment",id:"shipment/Shipment",title:"Shipment",description:"All Shipment objects are associated with a specific Workspace, that is why workspace is present in all shipments,",source:"@site/docs/shipment/Shipment.mdx",sourceDirName:"shipment",slug:"/shipment/shipment.html",permalink:"/docs/shipment/shipment.html",tags:[],version:"current",frontMatter:{id:"Shipment",title:"Shipment",sidebar_label:"Shipment",slug:"shipment.html"},sidebar:"mainSidebar",previous:{title:"Workspaces",permalink:"/docs/workspaces.html"},next:{title:"Shipment Item",permalink:"/docs/shipment/shipment-item.html"}},d=[{value:"What you can do with Shipment",id:"what-you-can-do-with-shipment",children:[],level:2},{value:"ShipmentItem Properties",id:"shipmentitem-properties",children:[],level:2},{value:"Endpoints",id:"endpoints",children:[],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All Shipment objects are associated with a specific ",(0,r.kt)("a",{parentName:"p",href:"/docs/workspaces.html"},"Workspace"),", that is why workspace is present in all shipments,\nand it is required during creation."),(0,r.kt)("p",null,"The trackingNumber is required for the tracking. Each shipment supports a single tracking number.\nIf you need to use multiple tracking numbers, then you should create separate shipments."),(0,r.kt)("p",null,"A Shipment created with a valid ",(0,r.kt)("strong",{parentName:"p"},"trackingNumber")," will automatically populate its tracking information."),(0,r.kt)("p",null,"Tracking information (origin carrier, destination carrier, tracking status, etc.) is generated by TrackMage and\ncannot be modified by the user."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Address")," and ",(0,r.kt)("strong",{parentName:"p"},"shipmentStatus")," contained within a Shipment may be created at the same time."),(0,r.kt)("h2",{id:"what-you-can-do-with-shipment"},"What you can do with Shipment"),(0,r.kt)(l.Z,{resourceName:"Shipment",toc:!0,mdxType:"ResourceMethods"}),(0,r.kt)("h2",{id:"shipmentitem-properties"},"ShipmentItem Properties"),(0,r.kt)(m.Z,{schemaName:"Shipment-Get",mdxType:"ResourceFields"}),(0,r.kt)("h2",{id:"endpoints"},"Endpoints"),(0,r.kt)(l.Z,{resourceName:"Shipment",mdxType:"ResourceMethods"}))}h.isMDXComponent=!0}}]);