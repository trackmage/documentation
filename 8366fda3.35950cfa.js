(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(92)),c={id:"Objects",title:"Objects",sidebar_label:"Objects",slug:"objects"},i={unversionedId:"TrackMageApi/Objects",id:"TrackMageApi/Objects",isDocsHomePage:!1,title:"Objects",description:"The TrackMage API consists of many object types. There are several attributes that are consistent across all",source:"@site/docs/TrackMageApi/Objects.mdx",slug:"/TrackMageApi/objects",permalink:"/docs/TrackMageApi/objects",version:"current",sidebar_label:"Objects"},s=[],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The TrackMage API consists of many object types. There are several attributes that are consistent across all objects:"),Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("strong",null,"id"),": Every TrackMage Object that can be created and received through the API has an id field that is used to refer to the object in other API calls. An id is represented by UUID. These id values may be used in many API endpoints to refer to an existing object rather than specifying the full object definition."),Object(o.b)("li",null,Object(o.b)("strong",null,"workspace"),": Most API Objects also include Workspace value in format '/workspaces/UUID' that is used to refer to the Workspace to which the object belongs. These Workspace values are required in the most API endpoints."),Object(o.b)("li",null,Object(o.b)("strong",null,"created_at/updated_at"),": Most API objects also include values for created_at and updated_at. These two fields respectively specify the time the object in question was created and most recently updated. These datetime fields are formatted according to ",Object(o.b)("a",{href:"https://www.w3.org/TR/NOTE-datetime",target:"_blank",title:"ISO 8601 Date and Time Formats"},"ISO 8601"),".")))}u.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);