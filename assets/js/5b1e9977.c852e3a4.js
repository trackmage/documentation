"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[313],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(a),m=i,u=g["".concat(d,".").concat(m)]||g[m]||l[m]||r;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6172:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"WordpressFull",title:"Complete widget's configuration in a WordPress",sidebar_label:"WordPress Configuration",slug:"wordpress-full.html"},d=void 0,c={unversionedId:"widgets/WordpressFull",id:"widgets/WordpressFull",title:"Complete widget's configuration in a WordPress",description:"Complete widget's configuration in a WordPress",source:"@site/docs/widgets/WordpressFull.mdx",sourceDirName:"widgets",slug:"/widgets/wordpress-full.html",permalink:"/docs/widgets/wordpress-full.html",draft:!1,tags:[],version:"current",frontMatter:{id:"WordpressFull",title:"Complete widget's configuration in a WordPress",sidebar_label:"WordPress Configuration",slug:"wordpress-full.html"},sidebar:"mainSidebar",previous:{title:"Tracking Widgets Overview",permalink:"/docs/widgets/tracking-widgets.html"},next:{title:"Troubleshooting Widgets",permalink:"/docs/widgets/widgets-troubleshooting.html"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Configure tracking page",id:"1-configure-tracking-page",level:3},{value:"2. Create a new page in your WordPress website",id:"2-create-a-new-page-in-your-wordpress-website",level:3},{value:"3. Add TrackMage Setup Widget",id:"3-add-trackmage-setup-widget",level:3},{value:"4. Add two columns",id:"4-add-two-columns",level:3},{value:"5. Add Lookup Widget and Tracking Cards Widget to first column",id:"5-add-lookup-widget-and-tracking-cards-widget-to-first-column",level:3},{value:"6. Add Sidebar Widget to second column",id:"6-add-sidebar-widget-to-second-column",level:3},{value:"7. Add script code to the page",id:"7-add-script-code-to-the-page",level:3},{value:"8. Save changes on the editor and open your page.",id:"8-save-changes-on-the-editor-and-open-your-page",level:3}],g={toc:l};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Complete widget's configuration in a WordPress"),(0,r.kt)("p",null,"This guide will show you how to configure tracking page on the your own WordPress website"),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-configure-tracking-page"},"1. Configure tracking page"),(0,r.kt)("p",null,"You should create and configure a tracking page in your TrackMage account."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find more helpful articles in our knowledgebase: ",(0,r.kt)("a",{parentName:"p",href:"https://help.trackmage.com/en/knowledgebase/8-tracking-pages-basic-configuration"},"Basic Configuration")," and ",(0,r.kt)("a",{parentName:"p",href:"https://help.trackmage.com/en/knowledgebase/10-tracking-pages-visual-builder"},"Visual Builder")))),(0,r.kt)("h3",{id:"2-create-a-new-page-in-your-wordpress-website"},"2. Create a new page in your WordPress website"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can use any custom page builder or native WordPress builder. We will use native WordPress page builder to create a new page."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New Wordpress Page",src:a(4609).Z,width:"1208",height:"353"})),(0,r.kt)("h3",{id:"3-add-trackmage-setup-widget"},"3. Add TrackMage Setup Widget"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Add code block")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Insert a code block",src:a(524).Z,width:"529",height:"521"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Copy Setup Widget html code from the ",(0,r.kt)("a",{parentName:"em",href:"https://docs.trackmage.com/docs/tracking-widgets.html#setup-widget"},"docs")," and insert it into the code block")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Copy Setup Widget code:"),"\n",(0,r.kt)("img",{alt:"Copy Setup Widget code",src:a(5403).Z,width:"1210",height:"336"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Insert Code:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Insert code",src:a(7513).Z,width:"773",height:"198"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Replace parameter with your values")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Copy Tracking Page Domain:"),"\n",(0,r.kt)("img",{alt:"Copy Tracking Page Domain",src:a(9042).Z,width:"826",height:"493"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In the result you should have something like below:"),"\n",(0,r.kt)("img",{alt:"Setup Widget Result",src:a(8779).Z,width:"757",height:"314"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For locale parameter you can use one of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"de, en, es, fr, gr, it, pt, ru"))," values.\nYou can delete locale parameter, in that case default locale from tracking page will be used."))),(0,r.kt)("h3",{id:"4-add-two-columns"},"4. Add two columns"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Step 1",src:a(9826).Z,width:"1258",height:"732"}),"\n",(0,r.kt)("img",{alt:"Step 2",src:a(6249).Z,width:"1223",height:"720"}),"\n",(0,r.kt)("img",{alt:"result",src:a(5414).Z,width:"923",height:"244"})),(0,r.kt)("h3",{id:"5-add-lookup-widget-and-tracking-cards-widget-to-first-column"},"5. Add Lookup Widget and Tracking Cards Widget to first column"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Copy Lookup Widget code from the ",(0,r.kt)("a",{parentName:"em",href:"https://docs.trackmage.com/docs/tracking-widgets.html#setup-widget"},"docs")," and insert it")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Copy Lookup Widget Code:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy Lookup Widget Code",src:a(7461).Z,width:"1170",height:"569"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Add widget code to first column:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Paste widget code Step 1",src:a(5264).Z,width:"431",height:"302"}),"\n",(0,r.kt)("img",{alt:"Paste widget code Step 2",src:a(8504).Z,width:"678",height:"350"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Copy Tracking Cards Widget code from the ",(0,r.kt)("a",{parentName:"em",href:"https://docs.trackmage.com/docs/tracking-widgets.html#tracking-cards-widget"},"docs")," and insert it")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Copy Tracking Cards Widget Code:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy Tracking Cards Widget Code",src:a(817).Z,width:"1193",height:"262"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Add widget code to first column:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Paste Tracking Page Widget Code",src:a(9083).Z,width:"720",height:"382"}),"\n",(0,r.kt)("img",{alt:"Delete unnecessary parameters",src:a(4806).Z,width:"732",height:"411"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"In the result you should have something like below:")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Widgets result",src:a(2802).Z,width:"723",height:"454"})),(0,r.kt)("h3",{id:"6-add-sidebar-widget-to-second-column"},"6. Add Sidebar Widget to second column"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Copy Sidebar Widget code from the ",(0,r.kt)("a",{parentName:"em",href:"https://docs.trackmage.com/docs/tracking-widgets.html#sidebar-widget"},"docs")," and insert it")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Copy Sidebar Widget Code:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy Sidebar Widget Code",src:a(747).Z,width:"1062",height:"449"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Paste Sidebar Widget Code:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Paste Sidebar Widget Code",src:a(1722).Z,width:"768",height:"437"})),(0,r.kt)("h3",{id:"7-add-script-code-to-the-page"},"7. Add script code to the page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Copy script code from the ",(0,r.kt)("a",{parentName:"em",href:"https://docs.trackmage.com/docs/tracking-widgets.html"},"docs"))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Copy Script Code",src:a(7044).Z,width:"1046",height:"411"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Paste script code")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Script Code to the Page",src:a(8054).Z,width:"973",height:"615"})),(0,r.kt)("h3",{id:"8-save-changes-on-the-editor-and-open-your-page"},"8. Save changes on the editor and open your page."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"If everything was added correctly, you will have working widgets on the page:"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tracking Page Example",src:a(3402).Z,width:"709",height:"552"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Test widgets work with one of your tracking/order number"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tracking Page Example 1",src:a(6815).Z,width:"1185",height:"651"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tracking Page Example 2",src:a(1175).Z,width:"938",height:"725"})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Page layout is just example. You can use widgets in different blocks on the page.\n",(0,r.kt)("img",{alt:"Another Layout",src:a(3402).Z,width:"709",height:"552"}),"\n",(0,r.kt)("img",{alt:"Another Layout Example",src:a(4782).Z,width:"1377",height:"628"}),"\n",(0,r.kt)("img",{alt:"Another Layout Example 2",src:a(1175).Z,width:"938",height:"725"})))))}m.isMDXComponent=!0},9826:function(e,t,a){t.Z=a.p+"assets/images/add-columns-1-96a69d25083483bb1fc1c16b63421d7b.png"},6249:function(e,t,a){t.Z=a.p+"assets/images/add-columns-2-5073392ce17dd3e081715b93f58737e6.png"},5414:function(e,t,a){t.Z=a.p+"assets/images/add-columns-result-984e441f4cca654762e5354b26966651.png"},5264:function(e,t,a){t.Z=a.p+"assets/images/add-lookup-code-1-d29a6f737f12288aaa43958d39e1b6aa.png"},8504:function(e,t,a){t.Z=a.p+"assets/images/add-lookup-code-2-b242f55cfd740dbcc82d0a1fc2f77c91.png"},524:function(e,t,a){t.Z=a.p+"assets/images/add-setup-code-block-54f7f51430d7550fb0b2cb507c2e7e5c.png"},5403:function(e,t,a){t.Z=a.p+"assets/images/add-setup-copy-code-df62821250f409e697477343a06d520e.png"},9042:function(e,t,a){t.Z=a.p+"assets/images/add-setup-copy-tp-domain-e0af884a5d8964ce21c15c0c2f93d036.png"},7513:function(e,t,a){t.Z=a.p+"assets/images/add-setup-insert-code-6b75cce3dbae64e78ad606953ddb8717.png"},8779:function(e,t,a){t.Z=a.p+"assets/images/add-setup-result-500feb1cf27bc756a490e8418883612b.png"},4782:function(e,t,a){t.Z=a.p+"assets/images/another-layout-example-1-38fca130270a13b720650f58d26079e0.png"},3402:function(e,t,a){t.Z=a.p+"assets/images/another-layout-3f714272b365f26021f3205ee4e34fca.png"},7461:function(e,t,a){t.Z=a.p+"assets/images/copy-lookup-efa5b4e2d2770f93167354d1c5c1a098.png"},7044:function(e,t,a){t.Z=a.p+"assets/images/copy-script-eb82aef8ac63408d526aeff8b3746bdd.png"},747:function(e,t,a){t.Z=a.p+"assets/images/copy-sidebar-f6d86a756227542c218349ccde7c942f.png"},817:function(e,t,a){t.Z=a.p+"assets/images/copy-tp-widget-dc2dc89dea19c2aa33dd4e60a89cf72a.png"},4806:function(e,t,a){t.Z=a.p+"assets/images/delete-tp-params-e590344a086bc053b4361ec63becd911.png"},2802:function(e,t,a){t.Z=a.p+"assets/images/insert-tp-result-d503e6816150394661844f3b9741ce3c.png"},9083:function(e,t,a){t.Z=a.p+"assets/images/insert-tp-widget-05beab07cd386c010a58fb02e0cb21ef.png"},4609:function(e,t,a){t.Z=a.p+"assets/images/new-page-e6ae2f97f71613e9ee5871ab92928809.png"},8054:function(e,t,a){t.Z=a.p+"assets/images/paste-script-04df069fc6d4ff974026fb7257ad88d7.png"},1722:function(e,t,a){t.Z=a.p+"assets/images/paste-sidebar-code-7e2c15da2f0e65684930df008aa8fdd5.png"},6815:function(e,t,a){t.Z=a.p+"assets/images/test-step-1-345a51151be9e2bdf16cae93491b2d4f.png"},1175:function(e,t,a){t.Z=a.p+"assets/images/test-step-2-09af69f4e06f5608850d9bd5deefc42c.png"}}]);