(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},116:function(e,t,n){"use strict";var a=n(0),r=n(117);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},117:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(116),c=n(102),o=n(56),l=n.n(o),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,b=e.className,g=Object(i.a)(),m=g.tabGroupChoices,h=g.setTabGroupChoices,f=Object(a.useState)(o),O=f[0],v=f[1],j=a.Children.toArray(e.children);if(null!=d){var C=m[d];null!=C&&C!==O&&p.some((function(e){return e.value===C}))&&v(C)}var k=function(e){v(e),null!=d&&h(d,e)},T=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},150:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(101)),c=n(149),o=n(150),l={id:"GettingStarted",title:"Getting Started",sidebar_label:"Getting Started",slug:"getting-started"},s={unversionedId:"GettingStarted",id:"GettingStarted",isDocsHomePage:!1,title:"Getting Started",description:"This guide will walk you through creating new shipment and getting tracking link with TrackMage.",source:"@site/docs/GettingStarted.mdx",slug:"/getting-started",permalink:"/docs/getting-started",version:"current",sidebar_label:"Getting Started",sidebar:"mainSidebar",previous:{title:"Authorization",permalink:"/docs/authorization"},next:{title:"Standard Entity Fields",permalink:"/docs/standard-entity-fields.html"}},u=[],p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This guide will walk you through creating new shipment and getting tracking link with TrackMage."),Object(i.b)("hr",null),Object(i.b)("h3",null,"Step 0: Obtain API Credentials and Authorization TOKEN"),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"/docs/authorization"},"Before Start")," for instructions on obtaining store API credentials and TOKEN."),Object(i.b)("p",null,"In API calls, include obtained authorization token or api credentials."),Object(i.b)("h3",null,"Step 1: Create client"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Skip this step if you use cURL, Postman or HTTP Client in your IDE"))),Object(i.b)(c.a,{groupId:"languages",defaultValue:"php",values:[{label:"PHP",value:"php"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"php",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"use TrackMage\\Client\\TrackMageClient;\n\n// Create Client using Client ID and Client Secret\n$clientId = 'CLIENT_ID';\n$clientSecret = 'CLIENT_SECRET';\n$client = new TrackMageClient($clientId, $clientSecret);\n\n// --- or ----\n// Create client using obtained authorization token\n$client = new TrackMageClient();\n$client->setAccessToken('YOUR_TOKEN');\n")))),Object(i.b)("h3",null,"Step 2: Create a shipment with tracking number"),Object(i.b)(c.a,{groupId:"languages",defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"PHP",value:"php"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"curl",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-curl"},'curl -X POST https://api.trackmage.com/shipments \\\n    -H "Accept: application/json" \\\n    -H "Content-Type: application/json \\\n    -H "Authorization: Bearer YOUR_TOKEN"\n'))),Object(i.b)(o.a,{value:"php",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"\nuse GuzzleHttp\\Exception\\ClientException;\n\n...\n\n$workspaceId = 'WORKSPACE_ID'; // a desired workspace UUID\n$data = [\n    'workspace' => \"/workspaces/{$workspaceId}\",\n    'trackingNumber' => 'TRACKING_NUMBER',\n    'originCarrier' => 'ORIGIN_CARRIER_CODE', // optionally\n    'email' => 'CUSTOMER_EMAIL' // optionally\n];\ntry {\n    $response = $client->getGuzzleClient()->post('/shipments', [\n    'headers' => [\n    'Content-Type' => 'application/ld+json'\n    ],\n    'body' => \\GuzzleHttp\\json_encode($data)\n    ]);\n    $shipment =  \\GuzzleHttp\\json_decode( $response->getBody()->getContents(), true );\n    echo $shipment['id'];\n} catch (ClientException $e) {\n    $contents = $e->getResponse()->getBody()->getContents();\n    $data = \\GuzzleHttp\\json_decode($contents, true);\n    printf('An client exception occurred: %d %s',\n            $e->getCode(),\n            $data['hydra:description']);\n} catch (\\Exception $e) {\n    printf('An error occurred: %d %s', $e->getCode(), $e->getMessage());\n}\n\n")))),Object(i.b)("h3",null,"Step 3: Receive tracking page link for created shipment"),Object(i.b)(c.a,{groupId:"languages",defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"PHP",value:"php"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"curl",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-curl"},'curl -X POST https://api.trackmage.com/generate_tracking_page_link \\\n    -H "Accept: application/json" \\\n    -H "Content-Type: application/json \\\n    -H "Authorization: Bearer YOUR_TOKEN"\n'))),Object(i.b)(o.a,{value:"php",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-php"},"try {\n     $response = $client->getGuzzleClient()->post('/generate_tracking_page_link', [\n         'headers' => [\n            'Content-Type' => 'application/ld+json'\n         ],\n         'body' => \\GuzzleHttp\\json_encode([\n             'trackingPageId' => 'TRACKING_PAGE_ID',\n             'filter' => [\n                'id' => $shipmentId\n             ]\n         ])\n     ]);\n     $trackingPageLink = \\GuzzleHttp\\json_decode( $response->getBody()->getContents(), true );\n     echo $trackingPageLink['link'];\n } catch (ClientException $e) {\n     $contents = $e->getResponse()->getBody()->getContents();\n     $data = \\GuzzleHttp\\json_decode($contents, true);\n     printf('An client exception occurred: %d %s', $e->getCode(), $data['hydra:description']);\n     exit;\n } catch (\\Exception $e) {\n     printf('An error occurred: %d %s', $e->getCode(), $e->getMessage());\n     exit;\n }\n")))))}d.isMDXComponent=!0}}]);