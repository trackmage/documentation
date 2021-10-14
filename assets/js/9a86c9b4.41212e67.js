(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[943],{8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(7294),r=a(944),i=a(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,s=39;var u=function(e){var t=e.lazy,a=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=(0,r.Z)(),k=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,n.useState)(u),T=v[0],f=v[1],N=n.Children.toArray(e.children),_=[];if(null!=d){var y=k[d];null!=y&&y!==T&&p.some((function(e){return e.value===y}))&&f(y)}var b=function(e){var t=e.currentTarget,a=_.indexOf(t),n=p[a].value;f(n),null!=d&&(g(d,n),setTimeout((function(){var e,a,n,r,i,o,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,a>=0&&i<=s&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case s:var n=_.indexOf(e.target)+1;a=_[n]||_[0];break;case l:var r=_.indexOf(e.target)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":T===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:w,onFocus:b,onClick:b},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5160:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(1395),c=a(8215),l={id:"Authorization",title:"Authorization",sidebar_label:"Authorization",slug:"authorization"},s={unversionedId:"Authorization",id:"Authorization",isDocsHomePage:!1,title:"Authorization",description:"Create a TrackMake account",source:"@site/docs/Authorization.mdx",sourceDirName:".",slug:"/authorization",permalink:"/docs/authorization",version:"current",sidebar_label:"Authorization",frontMatter:{id:"Authorization",title:"Authorization",sidebar_label:"Authorization",slug:"authorization"},sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Getting Started",permalink:"/docs/getting-started"}},u=[],p={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"create-account"},"Create a TrackMake account"),"See ",(0,i.kt)("a",{href:"https://help.trackmage.com/en/docs/5-how-to-sign-up-for-trackmage",title:"How to sign up for TrackMage",target:"_blank"},"How to sign up for TrackMage")," for instructions on creating new Account on TrackMage.",(0,i.kt)("h3",{id:"create-api-keys"},"Create API Keys"),(0,i.kt)("p",null,"To use TrackMage API, you'll need to generate an API Key and Secret which will be included with any calls made to the API. The Key and Secret are used to authenticate the API calls so that TrackMage updates the information within your specific account. To generate your API Key and Secret, follow the steps below:"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Go to ",(0,i.kt)("a",{href:"https://app.trackmage.com/dashboard/user-profile/api-keys",target:"_blank",title:"TrackMage Api Keys Settings"},"Api Keys Settings")),(0,i.kt)("li",null,"Enter your App Name and App Url, press on Generate button"),(0,i.kt)("li",null,"Copy your Client Id and Secret")),(0,i.kt)("h3",{id:"obtain-authorization-token"},"Obtain Authorization TOKEN"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Ignore this step of you use ",(0,i.kt)("a",{parentName:"p",href:"/docs/trackmage-sdks/php-sdk.html"},"TrackMage PHP SDK")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Use generated "access_token" from response in the future requests.'))),(0,i.kt)(o.Z,{groupId:"languages",defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"HTTP",value:"http"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request GET 'https://api.trackmage.com/oauth/v2/token?grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET'\n"))),(0,i.kt)(c.Z,{value:"http",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"GET https://api.rc.trackmage.com/oauth/v2/token?grant_type=client_credentials&client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET\nAccept: application/json\n")))),(0,i.kt)("p",null,"Example response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTMwMDY1ODcsImV4cCI6MTU5MzAxMDE4Nywicm9sZXMiOltdLCJ1c2VybmFtZSI6ImhhcmJ1em5pYWsueWV2aGVuaWlAZ21haWwuY29tIn0.WyAtVsSq4z3T90-mVac7ReSHZ9ro3nBWKS_OqXoC2rkLxX4yiHGmgAZFrnojbJP0Qyq7nIliwRJO-32o24n4TVhoSmtyVNddVAHpHyTVhvS5MXK4huCvu1S30cCQBIPgSJFE82e7cu9-Sq50JmhvjTtW0_Ww0Jv1ofAm56q46k2RlvOus4SXvEBRJHP53FDSBjnGqTpogwy7FB6TZJfujxVBlA3VqPbj0L5bmchzg-dAvrZYrehEKsGTYPGXDveNg3ptAK1nQ56u-r_WgZ_uIpeBXNBnY9RRj_xZWFGYYIiMUhCueENDCFPya61BoxrjSu97EiP_vr7GYJ2FO-ObFbk5hKc-Pa6pI70ey6ai5VwQ0DgtSTJhvRBijphzNDP5ucAX0sn2xJYKHcgP91kAXWQTsVGZBD3e-cfN0S2K4VaG_nyLkQWn-DbN8SJa_-eoUFJ2R2OBOSHunRM1LQe9Ub2EQ9hh07JzR_T2XiTedJM8B02S6UoQ4sXuTdr0wEP5ANxTSYS6vWUatdm6A_K3inrhK82-qWyhldp2XrqC8a8XYThvTTBufxzUcTnjIEbrdgd-UPajSH7WFNl-mpRTE9I2vtYwFsKo1IHekPZu5hX5qs-ZSrRBqY4vGved2NS7gQ9TcZLzX6wSmEV7LpBMnSAQ1TXA_lGXBC7TSCsUI2A",\n    "expires_in": 3600,\n    "token_type": "bearer",\n    "scope": "user",\n    "user_id": "fe1dec62-490e-4f16-afb2-6f9dd303d930",\n    "user_email": "your@email.com"\n}\n')),(0,i.kt)("h2",{id:"oauth-flow"},"OAuth Authentication flow"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For integrating third-party application with TrackMage you'll need to generate client id and secret in TrackMage.\nGo to ",(0,i.kt)("a",{href:"https://app.trackmage.com/dashboard/user-profile/api-keys",target:"_blank",title:"TrackMage Api Keys Settings"},"Api Keys Settings"),", specify App Name and App Url and click Generate."))),(0,i.kt)("ul",null,(0,i.kt)("li",null,"The user clicks the Login with TrackMage button on any third-party application."),(0,i.kt)(o.Z,{groupId:"languages",defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"HTTP",value:"http"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request GET 'https://api.trackmage.com/oauth/v2/auth?client_id=YOUR_CLIENT_ID&state=STATE&redirect_uri=https://example.com&response_type=code'\n"))),(0,i.kt)(c.Z,{value:"http",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},"GET https://api.trackmage.com/oauth/v2/auth?client_id=YOUR_CLIENT_ID&state=STATE&redirect_uri=https://example.com&response_type=code\nAccept: application/json\n")))),(0,i.kt)("li",null,"The application redirects the user to the TrackMage Login page, and the user enters the TrackMage credentials."),(0,i.kt)("li",null,"TrackMage asks the user whether he wants to Allow access to the third-party application."),(0,i.kt)("li",null,"User clicks the Allow button"),(0,i.kt)("li",null,"TrackMage will redirect to the requested redirect url, e.g https://example.com?state=STATE&code=CODE"),(0,i.kt)("li",null,"The third-party application obtains the access token"),(0,i.kt)(o.Z,{groupId:"languages",defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"HTTP",value:"http"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-curl"},'curl --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"grant_type": "authorization_code","code": "CODE", "redirect_uri": "https://example.com", "client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET"}\' \\\n  https://api.trackmage.com/oauth/v2/auth\n'))),(0,i.kt)(c.Z,{value:"http",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST https://api.trackmage.com/oauth/v2/auth\nContent-Type: application/json\n{"grant_type": "authorization_code","code": "CODE", "redirect_uri": "https://example.com", "client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET"}\n')))),(0,i.kt)("p",null,"Example response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token":"token",\n  "expires_in":3600,\n  "token_type":"bearer",\n  "scope":null,\n  "refresh_token":"token",\n  "user_id":"e7508450-4aab-4c5f-b14d-d7440e6da3fd",\n  "user_email":"test@example.com"\n}\n'))))}d.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);