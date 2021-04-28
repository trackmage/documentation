(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),l=(r(0),r(102)),a={id:"Errors",title:"Errors",sidebar_label:"Errors",slug:"errors.html"},c={unversionedId:"Errors",id:"Errors",isDocsHomePage:!1,title:"Errors",description:"TrackMage uses conventional HTTP response codes to indicate the success or failure of an API request.",source:"@site/docs/Errors.mdx",slug:"/errors.html",permalink:"/docs/errors.html",version:"current",sidebar_label:"Errors",sidebar:"mainSidebar",previous:{title:"Standard Entity Fields",permalink:"/docs/standard-entity-fields.html"},next:{title:"Shipment",permalink:"/docs/shipment/shipment.html"}},s=[{value:"Common Error Status Codes",id:"common-error-status-codes",children:[]},{value:"Responses Examples",id:"responses-examples",children:[{value:"Token Not Found",id:"token-not-found",children:[]},{value:"Not Acceptable Format",id:"not-acceptable-format",children:[]},{value:"Create Shipment Failed (validation error)",id:"create-shipment-failed-validation-error",children:[]},{value:"Internal Server Error",id:"internal-server-error",children:[]}]}],i={toc:s};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"TrackMage uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that resulted from the provided information (e.g. a required parameter was missing, an endpoint is not found, etc.), and codes in the 5xx range indicate an error with TrackMage server."),Object(l.b)("p",null,"In the event of a client or server error, the response will contain the standard 4xx or 5xx respectively, accompanied by a description of the error in the ",Object(l.b)("a",{target:"_blank",href:"https://www.hydra-cg.com/spec/latest/core/#description-of-http-status-codes-and-errors",title:"Hydra error format"},"Hydra error format")," or in the format described in the ",Object(l.b)("a",{href:"https://tools.ietf.org/html/rfc7807",title:"RFC 7807"},"RFC 7807"),"."),Object(l.b)("p",null,"Each client library will encapsulate these errors and raise an exception, in addition to other exceptional cases, such as network failures. It is recommended to handle exceptions gracefully."),Object(l.b)("h2",{id:"common-error-status-codes"},"Common Error Status Codes"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"code"),Object(l.b)("th",null,"reason-phrase"),Object(l.b)("th",null,"description"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"301"),Object(l.b)("td",null,"Moved Permanently"),Object(l.b)("td",null,"Error with request url. Moved permanently")),Object(l.b)("tr",null,Object(l.b)("td",null,"400"),Object(l.b)("td",null,"Bad Request"),Object(l.b)("td",null,"Request not processed due to client error")),Object(l.b)("tr",null,Object(l.b)("td",null,"401"),Object(l.b)("td",null,"Unauthorized"),Object(l.b)("td",null,"Authentication required")),Object(l.b)("tr",null,Object(l.b)("td",null,"402"),Object(l.b)("td",null,"Payment Required"),Object(l.b)("td",null,"Plan Upgrade Required")),Object(l.b)("tr",null,Object(l.b)("td",null,"403"),Object(l.b)("td",null,"Access Denied"),Object(l.b)("td",null,"You have no permissions to process the request")),Object(l.b)("tr",null,Object(l.b)("td",null,"404"),Object(l.b)("td",null,"Not Found"),Object(l.b)("td",null,"The url you are trying to request not found!")),Object(l.b)("tr",null,Object(l.b)("td",null,"405"),Object(l.b)("td",null,"Method Not Allowed"),Object(l.b)("td",null,"The method you are trying to call is not allowed!")),Object(l.b)("tr",null,Object(l.b)("td",null,"406"),Object(l.b)("td",null,"Not Acceptable"),Object(l.b)("td",null,"The target resource does not have a current representation that would be acceptable to the user agent.")),Object(l.b)("tr",null,Object(l.b)("td",null,"413"),Object(l.b)("td",null,"Payload Too Large"),Object(l.b)("td",null,"The file you are trying to upload is too big! Try smaller file")),Object(l.b)("tr",null,Object(l.b)("td",null,"500"),Object(l.b)("td",null,"Server Error"),Object(l.b)("td",null,"There is an internal server error with your request.")),Object(l.b)("tr",null,Object(l.b)("td",null,"502"),Object(l.b)("td",null,"Bad Gateway"),Object(l.b)("td",null,"There is a bad gateway server error with your request. Please, try again later.")))),Object(l.b)("h2",{id:"responses-examples"},"Responses Examples"),Object(l.b)("h3",{id:"token-not-found"},"Token Not Found"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "message": "JWT Token not found"\n}\n')),Object(l.b)("h3",{id:"not-acceptable-format"},"Not Acceptable Format"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "https:\\/\\/tools.ietf.org\\/html\\/rfc2616#section-10",\n  "title": "An error occurred",\n  "detail": "Requested format \\"application\\/xml\\" is not supported. Supported MIME types are \\"application\\/ld+json\\", \\"application\\/json\\", \\"text\\/csv\\", \\"text\\/html\\".",\n  "trace": [\n    { ... }\n  ]\n}\n')),Object(l.b)("h3",{id:"create-shipment-failed-validation-error"},"Create Shipment Failed (validation error)"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "https:\\/\\/tools.ietf.org\\/html\\/rfc2616#section-10",\n  "title": "An error occurred",\n  "detail": "trackingNumber: Shipment with this tracking number already exists",\n  "violations": [\n    {\n      "propertyPath": "trackingNumber",\n      "message": "Shipment with this tracking number already exists"\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"internal-server-error"},"Internal Server Error"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "https:\\/\\/tools.ietf.org\\/html\\/rfc2616#section-10",\n  "title": "An error occurred",\n  "detail": "Something went wrong",\n  "trace": [\n    {...}\n  ]\n}\n')))}d.isMDXComponent=!0}}]);