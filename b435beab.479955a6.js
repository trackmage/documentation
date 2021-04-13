(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return m})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return f}));var a=r(3),n=r(7),l=r(0),c=r.n(l),i=r(101),s=r(151),u=r(106),d=r(22),o=function(){var e=Object(d.default)().siteConfig.customFields.carriersJSON;return c.a.createElement("div",null,c.a.createElement("table",{className:"carriersList-table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Code"),c.a.createElement("th",null,"Name"))),c.a.createElement("tbody",null,e.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.code),c.a.createElement("td",null,e.name))})))))},m={id:"Carriers",title:"Carriers",sidebar_label:"Carriers",slug:"carriers.html"},b={unversionedId:"Carriers",id:"Carriers",isDocsHomePage:!1,title:"Carriers",description:"What you can do with Carrier",source:"@site/docs/Carriers.mdx",slug:"/carriers.html",permalink:"/docs/carriers.html",version:"current",sidebar_label:"Carriers",sidebar:"mainSidebar",previous:{title:"Custom Fields",permalink:"/docs/custom-fields.html"},next:{title:"TrackMage PHP SDK",permalink:"/docs/trackmage-sdks/php-sdk.html"}},p=[{value:"What you can do with Carrier",id:"what-you-can-do-with-carrier",children:[]},{value:"Carrier Properties",id:"carrier-properties",children:[]},{value:"Endpoints",id:"endpoints",children:[]},{value:"Test tracking numbers",id:"test-tracking-numbers",children:[]},{value:"Carriers List",id:"carriers-list",children:[]}],h={toc:p};function f(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-you-can-do-with-carrier"},"What you can do with Carrier"),Object(i.b)(s.a,{resourceName:"Carrier",toc:!0,mdxType:"ResourceMethods"}),Object(i.b)("h2",{id:"carrier-properties"},"Carrier Properties"),Object(i.b)(u.a,{schemaName:"Carrier-Get",mdxType:"ResourceFields"}),Object(i.b)("h2",{id:"endpoints"},"Endpoints"),Object(i.b)(s.a,{resourceName:"Carrier",mdxType:"ResourceMethods"}),Object(i.b)("h2",{id:"test-tracking-numbers"},"Test tracking numbers"),Object(i.b)("p",null,"These tracking numbers will be detected as TrackMage Test carrier and have pre-defined status. Use them for the testing purposes only."),Object(i.b)("p",null,"Each tracking number consists of the following mask: TM###XXXXXXXXXXXXTM, where X can be changed to any value, for example TM2020002TM or TM20299999TM will have Available for Pickup status."),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Tracking Number"),Object(i.b)("th",null,"Pre-defined Status"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"TM404000000000001TM"),Object(i.b)("td",null,"Error (code: error)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM418000000000001TM"),Object(i.b)("td",null,"Pre Transit (code: pre_transit)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM403000000000001TM"),Object(i.b)("td",null,"No Info (code: no_info)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM102000000000001TM"),Object(i.b)("td",null,"In Transit (code: in_transit)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM204000000000001TM"),Object(i.b)("td",null,"Delivery in Progress (code: delivery_in_progress)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM200000000000001TM"),Object(i.b)("td",null,"Delivered (code: delivered)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM410000000000001TM"),Object(i.b)("td",null,"Unsuccessful Delivery (code: unsuccessful_delivery)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM500000000000001TM"),Object(i.b)("td",null,"Error (code: error)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM503000000000001TM"),Object(i.b)("td",null,"Expired (code: expired)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM202000000000001TM"),Object(i.b)("td",null,"Available for Pickup (code: available_for_pickup)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM100000000000001TM"),Object(i.b)("td",null,"Cancelled (code: cancelled)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM302000000000001TM"),Object(i.b)("td",null,"Return to Sender (code: return_to_sender)")),Object(i.b)("tr",null,Object(i.b)("td",null,"TM413000000000001TM"),Object(i.b)("td",null,"Transit Limit Exceeded (code: transit_limit_exceeded)")))),Object(i.b)("h2",{id:"carriers-list"},"Carriers List"),Object(i.b)("p",null,"Here is the list of supported carriers"),Object(i.b)(o,{mdxType:"CarriersList"}))}f.isMDXComponent=!0},102:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},151:function(e,t,r){"use strict";var a=r(0),n=r.n(a),l=r(22),c=r(102),i=r(57),s=r.n(i),u=s.a["table-of-contents__link--inline"];function d(e){var t=e.toc,r=e.isChild;return t.length?n.a.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.a.createElement(d,{isChild:!0,toc:e.children}))}))):null}var o=function(e){var t=e.toc;return n.a.createElement("div",{className:Object(c.a)(s.a.tableOfContentsInline)},n.a.createElement(d,{toc:t}))},m=r(58),b=r.n(m),p=r(106);function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}t.a=function(e){var t,r=e.resourceName,a=e.toc,c=Object(l.default)().siteConfig.customFields.openApiJSON,i=function(){var e={get:[],post:[],put:[],delete:[]},t=c.paths||{};return Object.keys(t).forEach((function(a){var n=t[a]||{};Object.keys(n).forEach((function(n){var l=t[a][n]||{};((null==l?void 0:l.tags)||[]).includes(r)&&e[n].push({path:a,methodName:n,method:l})}))})),e},s=function(e){var t=e.path,r=e.methodName,a=e.method;return{value:"<strong>"+r.toUpperCase()+" "+t+'</strong><br/><span class="method-description">'+a.summary+"</span>",id:""+a.operationId,children:[]}},u=function(e){var t=e.parameters;return n.a.createElement("table",{width:"100%"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{align:"center"},"Name"),n.a.createElement("th",{align:"center"},"In"),n.a.createElement("th",{align:"center"},"Is Required"),n.a.createElement("th",{align:"center"},"Type"),n.a.createElement("th",{align:"center",style:{width:"100%"}},"Description"))),n.a.createElement("tbody",null,t.sort((function(e,t){return+t.required-+e.required})).map((function(e){var t,r,a;return n.a.createElement("tr",{key:e.name},n.a.createElement("td",{align:"center"},e.name),n.a.createElement("td",{align:"center"},e.in),n.a.createElement("td",{align:"center"},e.required?"Yes":"No"),n.a.createElement("td",{align:"left"},(null===(t=e.schema)||void 0===t?void 0:t.type)||""),n.a.createElement("td",{align:"left"},e.description||"",(r=e.schema||{},a=[],Object.keys(r).forEach((function(e){"items"===e&&a.push(n.a.createElement("div",null,h(r.type||"")," of ",h(r.items.type),"s.")),"enum"===e&&a.push(n.a.createElement("div",null,"Allowed values: ",n.a.createElement("code",null,r.enum.join("|")))),"default"===e&&a.push(n.a.createElement("div",null,"The default value: ",n.a.createElement("code",null,r.default))),"minimum"===e&&a.push(n.a.createElement("div",null,"The minimal value: ",n.a.createElement("code",null,r.minimum))),"maximum"===e&&a.push(n.a.createElement("div",null,"The maximal value: ",n.a.createElement("code",null,r.maximum)))})),a)))}))))},d=function(e){var t=e.path,r=e.methodName,a=e.method;return n.a.createElement("div",{id:a.operationId,className:b.a.endpointItem},n.a.createElement("div",{className:b.a.endpointHeader},n.a.createElement("div",{className:b.a.endpointMethod},r.toUpperCase()),n.a.createElement("div",{className:b.a.endpointPath},t)),n.a.createElement("div",{className:b.a.endpointDescription},a.summary),a.parameters&&n.a.createElement("div",{className:b.a.endpointParameters},n.a.createElement("div",{className:b.a.endpointParametersTitle},"Query Parameters"),u(a)),a.requestBody&&n.a.createElement("div",{className:b.a.endpointParameters},n.a.createElement("div",{className:b.a.endpointParametersTitle},"Request Body Parameters"),function(e){var t=e.requestBody.content["application/json"].schema.$ref.split("/").pop();return n.a.createElement(p.a,{schemaName:t})}(a)))};return a&&n.a.createElement(o,{toc:(t=i(),[].concat(t.get.map(s),t.post.map(s),t.put.map(s),t.delete.map(s)))})||n.a.createElement("div",null,function(){var e=i();return[].concat(e.get.map(d),e.post.map(d),e.put.map(d),e.delete.map(d))}())}}}]);