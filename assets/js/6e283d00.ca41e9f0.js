"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),u=n(7094),c=n(2466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,g=e.defaultValue,m=e.values,f=e.groupId,h=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===g?g:null!=(t=null!=g?g:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,u.U)(),E=T.tabGroupChoices,C=T.setTabGroupChoices,I=(0,a.useState)(y),O=I[0],w=I[1],N=[],_=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=E[f];null!=P&&P!==O&&b.some((function(e){return e.value===P}))&&w(P)}var S=function(e){var t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==O&&(_(t),w(r),null!=f&&C(f,String(r)))},$=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=N.indexOf(e.currentTarget)+1;n=null!=(r=N[a])?r:N[0];break;case"ArrowLeft":var i,l=N.indexOf(e.currentTarget)-1;n=null!=(i=N[l])?i:N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return N.push(e)},onKeyDown:$,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(k.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function g(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},5043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return g}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5488),o=n(5162),u=["components"],c={id:"GettingStarted",title:"Getting Started",sidebar_label:"Getting Started",slug:"getting-started"},s=void 0,p={unversionedId:"GettingStarted",id:"GettingStarted",title:"Getting Started",description:"This guide will walk you through creating new shipment and getting tracking link with TrackMage.",source:"@site/docs/GettingStarted.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"GettingStarted",title:"Getting Started",sidebar_label:"Getting Started",slug:"getting-started"},sidebar:"mainSidebar",previous:{title:"Authorization",permalink:"/docs/authorization"},next:{title:"Standard Entity Fields",permalink:"/docs/standard-entity-fields.html"}},d={},g=[],m={toc:g};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will walk you through creating new shipment and getting tracking link with TrackMage."),(0,i.kt)("hr",null),(0,i.kt)("h3",null,"Step 0: Obtain API Credentials and Authorization TOKEN"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/authorization"},"Authorization")," for instructions on obtaining store API credentials and TOKEN."),(0,i.kt)("p",null,"In API calls, include obtained authorization token or api credentials."),(0,i.kt)("h3",null,"Step 1: Create client"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Skip this step if you use cURL, Postman or HTTP Client in your IDE")),(0,i.kt)(l.Z,{groupId:"languages",defaultValue:"php",values:[{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TrackMage\\Client\\TrackMageClient;\n\n// Create Client using Client ID and Client Secret\n$clientId = 'CLIENT_ID';\n$clientSecret = 'CLIENT_SECRET';\n$client = new TrackMageClient($clientId, $clientSecret);\n\n// --- or ----\n// Create client using obtained authorization token\n$client = new TrackMageClient();\n$client->setAccessToken('YOUR_TOKEN');\n")))),(0,i.kt)("h3",null,"Step 2: Create a shipment with tracking number"),(0,i.kt)(l.Z,{groupId:"languages",defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},'curl \'https://api.trackmage.com/shipments\' \\\n  -H \'accept: application/ld+json\' \\\n  -H \'content-type: application/ld+json\' \\\n  -H \'authorization: Bearer YOUR_TOKEN\' \\\n  --data-binary \'{"trackingNumber":"TRACKING_NUMBER","originCarrier":"ORIGIN_CARRIER_CODE","email":"CUSTOMER_EMAIL","workspace":"/workspaces/WORKSPACE_ID"}\'\n'))),(0,i.kt)(o.Z,{value:"php",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"\nuse GuzzleHttp\\Exception\\ClientException;\n\n...\n\n$workspaceId = 'WORKSPACE_ID'; // a desired workspace UUID\n$data = [\n    'workspace' => \"/workspaces/{$workspaceId}\",\n    'trackingNumber' => 'TRACKING_NUMBER',\n    'originCarrier' => 'ORIGIN_CARRIER_CODE', // optionally\n    'email' => 'CUSTOMER_EMAIL' // optionally\n];\ntry {\n    $response = $client->post('/shipments', [\n        'json' => $data\n    ]);\n    $shipment = TrackMageClient::item($response);\n    echo $shipment['id'];\n} catch (ClientException $e) {\n    printf('An client exception occurred: %d %s', $e->getCode(), TrackMageClient::error($e);\n} catch (\\Exception $e) {\n    printf('An error occurred: %d %s', $e->getCode(), $e->getMessage());\n}\n")))),(0,i.kt)("h3",null,"Step 3: Receive tracking page link for created shipment"),(0,i.kt)(l.Z,{groupId:"languages",defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl 'https://api.trackmage.com/generate_tracking_page_link' \\\n  -H 'accept: application/ld+json' \\\n  -H 'content-type: application/ld+json' \\\n  -H 'authorization: Bearer YOUR_TOKEN' \\\n  --data-binary '{\"trackingPageId\":\"TRACKING_PAGE_ID\",\"filter\":{\"id\":\"SHIPMENT_ID\"}}'\n"))),(0,i.kt)(o.Z,{value:"php",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"try {\n     $response = $client->post('/generate_tracking_page_link', [\n         'json' => [\n             'trackingPageId' => 'TRACKING_PAGE_ID',\n             'filter' => [\n                'id' => $shipmentId\n             ]\n         ]\n     ]);\n     $trackingPageLink = TrackMageClient::item($response);\n     echo $trackingPageLink['link'];\n} catch (ClientException $e) {\n    printf('An client exception occurred: %d %s', $e->getCode(), TrackMageClient::error($e);\n} catch (\\Exception $e) {\n    printf('An error occurred: %d %s', $e->getCode(), $e->getMessage());\n}\n")))))}f.isMDXComponent=!0}}]);