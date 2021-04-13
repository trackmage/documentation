(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{102:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},151:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(22),m=n(102),c=n(57),l=n.n(c),o=l.a["table-of-contents__link--inline"];function s(e){var t=e.toc,n=e.isChild;return t.length?i.a.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),i.a.createElement(s,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return i.a.createElement("div",{className:Object(m.a)(l.a.tableOfContentsInline)},i.a.createElement(s,{toc:t}))},u=n(58),d=n.n(u),h=n(106);function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.a=function(e){var t,n=e.resourceName,a=e.toc,m=Object(r.default)().siteConfig.customFields.openApiJSON,c=function(){var e={get:[],post:[],put:[],delete:[]},t=m.paths||{};return Object.keys(t).forEach((function(a){var i=t[a]||{};Object.keys(i).forEach((function(i){var r=t[a][i]||{};((null==r?void 0:r.tags)||[]).includes(n)&&e[i].push({path:a,methodName:i,method:r})}))})),e},l=function(e){var t=e.path,n=e.methodName,a=e.method;return{value:"<strong>"+n.toUpperCase()+" "+t+'</strong><br/><span class="method-description">'+a.summary+"</span>",id:""+a.operationId,children:[]}},o=function(e){var t=e.parameters;return i.a.createElement("table",{width:"100%"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{align:"center"},"Name"),i.a.createElement("th",{align:"center"},"In"),i.a.createElement("th",{align:"center"},"Is Required"),i.a.createElement("th",{align:"center"},"Type"),i.a.createElement("th",{align:"center",style:{width:"100%"}},"Description"))),i.a.createElement("tbody",null,t.sort((function(e,t){return+t.required-+e.required})).map((function(e){var t,n,a;return i.a.createElement("tr",{key:e.name},i.a.createElement("td",{align:"center"},e.name),i.a.createElement("td",{align:"center"},e.in),i.a.createElement("td",{align:"center"},e.required?"Yes":"No"),i.a.createElement("td",{align:"left"},(null===(t=e.schema)||void 0===t?void 0:t.type)||""),i.a.createElement("td",{align:"left"},e.description||"",(n=e.schema||{},a=[],Object.keys(n).forEach((function(e){"items"===e&&a.push(i.a.createElement("div",null,f(n.type||"")," of ",f(n.items.type),"s.")),"enum"===e&&a.push(i.a.createElement("div",null,"Allowed values: ",i.a.createElement("code",null,n.enum.join("|")))),"default"===e&&a.push(i.a.createElement("div",null,"The default value: ",i.a.createElement("code",null,n.default))),"minimum"===e&&a.push(i.a.createElement("div",null,"The minimal value: ",i.a.createElement("code",null,n.minimum))),"maximum"===e&&a.push(i.a.createElement("div",null,"The maximal value: ",i.a.createElement("code",null,n.maximum)))})),a)))}))))},s=function(e){var t=e.path,n=e.methodName,a=e.method;return i.a.createElement("div",{id:a.operationId,className:d.a.endpointItem},i.a.createElement("div",{className:d.a.endpointHeader},i.a.createElement("div",{className:d.a.endpointMethod},n.toUpperCase()),i.a.createElement("div",{className:d.a.endpointPath},t)),i.a.createElement("div",{className:d.a.endpointDescription},a.summary),a.parameters&&i.a.createElement("div",{className:d.a.endpointParameters},i.a.createElement("div",{className:d.a.endpointParametersTitle},"Query Parameters"),o(a)),a.requestBody&&i.a.createElement("div",{className:d.a.endpointParameters},i.a.createElement("div",{className:d.a.endpointParametersTitle},"Request Body Parameters"),function(e){var t=e.requestBody.content["application/json"].schema.$ref.split("/").pop();return i.a.createElement(h.a,{schemaName:t})}(a)))};return a&&i.a.createElement(p,{toc:(t=c(),[].concat(t.get.map(l),t.post.map(l),t.put.map(l),t.delete.map(l)))})||i.a.createElement("div",null,function(){var e=c();return[].concat(e.get.map(s),e.post.map(s),e.put.map(s),e.delete.map(s))}())}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(101)),m=n(151),c=n(106),l={id:"ShipmentItem",title:"Shipment Item",sidebar_label:"Shipment Item",slug:"shipment-item.html"},o={unversionedId:"shipment/ShipmentItem",id:"shipment/ShipmentItem",isDocsHomePage:!1,title:"Shipment Item",description:"What you can do with ShipmentItem",source:"@site/docs/shipment/ShipmentItem.mdx",slug:"/shipment/shipment-item.html",permalink:"/docs/shipment/shipment-item.html",version:"current",sidebar_label:"Shipment Item",sidebar:"mainSidebar",previous:{title:"Shipment",permalink:"/docs/shipment/shipment.html"},next:{title:"Generate Tracking Page Links",permalink:"/docs/shipment/tracking-page-links.html"}},s=[{value:"What you can do with ShipmentItem",id:"what-you-can-do-with-shipmentitem",children:[]},{value:"ShipmentItem Properties",id:"shipmentitem-properties",children:[]},{value:"Endpoints",id:"endpoints",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-you-can-do-with-shipmentitem"},"What you can do with ShipmentItem"),Object(r.b)(m.a,{resourceName:"ShipmentItem",toc:!0,mdxType:"ResourceMethods"}),Object(r.b)("h2",{id:"shipmentitem-properties"},"ShipmentItem Properties"),Object(r.b)(c.a,{schemaName:"ShipmentItem-Get",mdxType:"ResourceFields"}),Object(r.b)("h2",{id:"endpoints"},"Endpoints"),Object(r.b)(m.a,{resourceName:"ShipmentItem",mdxType:"ResourceMethods"}))}u.isMDXComponent=!0}}]);