(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[533],{7601:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7294),a=n(2263),i=n(6010),l="tableOfContentsInline_3fWc";function o(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(o,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return r.createElement("div",{className:(0,i.Z)(l)},r.createElement(o,{toc:t}))},c="endpointItem_1HQL",m="endpointHeader_iX0t",d="endpointMethod_2SQp",u="endpointPath_2_Zo",p="endpointDescription_1iXR",h="endpointParameters_JrGz",f="endpointParametersTitle_2iBJ",v=n(5550);function E(e){return e.charAt(0).toUpperCase()+e.slice(1)}var y=function(e){var t,n=e.resourceName,i=e.toc,l=(0,a.default)().siteConfig.customFields.openApiJSON,o=function(){var e={get:[],post:[],put:[],delete:[]},t=l.paths||{};return Object.keys(t).sort((function(e,t){return e&&t&&e.length>t.length?1:-1})).forEach((function(r){var a=t[r]||{};Object.keys(a).forEach((function(a){var i=t[r][a]||{};((null==i?void 0:i.tags)||[]).includes(n)&&e[a].push({path:r,methodName:a,method:i})}))})),e},y=function(e){var t=e.path,n=e.methodName,r=e.method;return{value:"<strong>"+n.toUpperCase()+" "+t+'</strong><br/><span class="method-description">'+r.summary+"</span>",id:""+r.operationId,children:[]}},g=function(e){var t=e.parameters;return r.createElement("table",{width:"100%"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{align:"center"},"Name"),r.createElement("th",{align:"center"},"In"),r.createElement("th",{align:"center"},"Is Required"),r.createElement("th",{align:"center"},"Type"),r.createElement("th",{align:"center",style:{width:"100%"}},"Description"))),r.createElement("tbody",null,t.sort((function(e,t){return+t.required-+e.required})).map((function(e){var t,n,a;return r.createElement("tr",{key:e.name},r.createElement("td",{align:"center"},e.name),r.createElement("td",{align:"center"},e.in),r.createElement("td",{align:"center"},e.required?"Yes":"No"),r.createElement("td",{align:"left"},(null==(t=e.schema)?void 0:t.type)||""),r.createElement("td",{align:"left"},e.description||"",(n=e.schema||{},a=[],Object.keys(n).forEach((function(e){"items"===e&&a.push(r.createElement("div",null,E(n.type||"")," of ",E(n.items.type),"s.")),"enum"===e&&a.push(r.createElement("div",null,"Allowed values: ",r.createElement("code",null,n.enum.join("|")))),"default"===e&&a.push(r.createElement("div",null,"The default value: ",r.createElement("code",null,n.default))),"minimum"===e&&a.push(r.createElement("div",null,"The minimal value: ",r.createElement("code",null,n.minimum))),"maximum"===e&&a.push(r.createElement("div",null,"The maximal value: ",r.createElement("code",null,n.maximum)))})),a)))}))))},N=function(e){var t=e.path,n=e.methodName,a=e.method;return r.createElement("div",{id:a.operationId,className:c},r.createElement("div",{className:m},r.createElement("div",{className:d},n.toUpperCase()),r.createElement("div",{className:u},t)),r.createElement("div",{className:p},a.summary),a.parameters&&r.createElement("div",{className:h},r.createElement("div",{className:f},"Query Parameters"),g(a)),a.requestBody&&r.createElement("div",{className:h},r.createElement("div",{className:f},"Request Body Parameters"),function(e){var t=e.requestBody.content["application/json"].schema.$ref.split("/").pop();return r.createElement(v.Z,{schemaName:t})}(a)))};return i&&r.createElement(s,{toc:(t=o(),[].concat(t.get.map(y),t.post.map(y),t.put.map(y),t.delete.map(y)))})||r.createElement("div",null,function(){var e=o();return[].concat(e.get.map(N),e.post.map(N),e.put.map(N),e.delete.map(N))}())}},7578:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),l=n(5550),o=n(7601),s={id:"Fields",title:"Custom Fields",sidebar_label:"Custom Fields",slug:"custom-fields.html"},c={unversionedId:"Fields",id:"Fields",isDocsHomePage:!1,title:"Custom Fields",description:"What you can do with Fields",source:"@site/docs/CustomFields.mdx",sourceDirName:".",slug:"/custom-fields.html",permalink:"/docs/custom-fields.html",version:"current",sidebar_label:"Custom Fields",frontMatter:{id:"Fields",title:"Custom Fields",sidebar_label:"Custom Fields",slug:"custom-fields.html"},sidebar:"mainSidebar",previous:{title:"Webhooks Guide",permalink:"/docs/workflow/webhooks.html"},next:{title:"Carriers",permalink:"/docs/carriers.html"}},m=[{value:"What you can do with Fields",id:"what-you-can-do-with-fields",children:[]},{value:"Field Properties:",id:"field-properties",children:[]},{value:"Endpoints",id:"endpoints",children:[]}],d={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-you-can-do-with-fields"},"What you can do with Fields"),(0,i.kt)(o.Z,{resourceName:"Field",toc:!0,mdxType:"ResourceMethods"}),(0,i.kt)("h2",{id:"field-properties"},"Field Properties:"),(0,i.kt)(l.Z,{schemaName:"Field-Get",mdxType:"ResourceFields"}),(0,i.kt)("h2",{id:"endpoints"},"Endpoints"),(0,i.kt)(o.Z,{resourceName:"Field",mdxType:"ResourceMethods"}))}u.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);