"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[179],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={id:"TrackingStatuses",title:"Tracking Statuses",sidebar_label:"Tracking Statuses",slug:"tracking-statuses.html"},c=void 0,l={unversionedId:"shipment/TrackingStatuses",id:"shipment/TrackingStatuses",title:"Tracking Statuses",description:"- pre_transit - Carrier has received information about the package, but it has not yet been scanned and picked up.",source:"@site/docs/shipment/TrackingStatuses.mdx",sourceDirName:"shipment",slug:"/shipment/tracking-statuses.html",permalink:"/docs/shipment/tracking-statuses.html",draft:!1,tags:[],version:"current",frontMatter:{id:"TrackingStatuses",title:"Tracking Statuses",sidebar_label:"Tracking Statuses",slug:"tracking-statuses.html"},sidebar:"mainSidebar",previous:{title:"Tracking Checkpoint",permalink:"/docs/shipment/tracking-checkpoint.html"},next:{title:"Shipment Status",permalink:"/docs/shipment/shipment-status.html"}},p={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pre_transit")," - Carrier has received information about the package, but it has not yet been scanned and picked up."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"no_info")," - A shipping label has been created, but the package has not yet been scanned and/or picked up by the carrier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"in_transit")," - A package is travelling to its destination. You may receive multiple updates of this type as the package travels to its destination."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"delivery_in_progress")," - A package has reached the local area and is in the process of being delivered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"delivered")," - The package has been delivered"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"unsuccessful_delivery")," - Carrier attempted to deliver, but failed, and usually leaves a notice and will try to deliver again."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"error")," - Unable to track this parcel due to technical issues. Please re-track."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"exception")," - Customs hold or any shipping exceptions. Please contact the carrier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"expired")," - A package has no tracking information for 30 days since it was created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"available_for_pickup")," - The package is available for pickup from the carrier's facility."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cancelled")," - The delivery has been cancelled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"return_to_sender")," - The package was not delivered and is now on its way back to the sender."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"transit_limit_exceeded")," - The package has been in transit way longer than normal transit time allows. Please contact the carrier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"customs_clearance")," - Customs Clearance: Package undergoing inspection and compliance checks at customs authority.")))}d.isMDXComponent=!0}}]);