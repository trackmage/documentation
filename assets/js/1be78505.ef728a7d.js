(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[514],{767:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ie}});var a=n(7294),o=n(3905),r=n(2263),l=n(6291),i=n(2611),s=n(2122),c=n(9756),u=n(6010),d=n(6700),p=n(944),m=n(1839),h=n(3783),b=n(7898),f=n(6742),y=n(3919),g=n(5537),v=function(e){return a.createElement("svg",(0,s.Z)({width:"20",height:"20",role:"img"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=n(4478),E=n(4973),C="sidebar_15mo",_="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",S="menu_Bmed",T="menuLinkText_2aKo",I="menuWithAnnouncementBar_2WvA",x="collapseSidebarButton_1CGd",L="collapseSidebarButtonIcon_3E-R",j="sidebarMenuIcon_fgN0",B="sidebarMenuCloseIcon_1lpH",A="menuLinkExternal_1OhN";var P=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},R=(0,a.memo)((function(e){var t=e.items,n=(0,c.Z)(e,["items"]);return t.map((function(e,t){return a.createElement(w,(0,s.Z)({key:t,item:e},n))}))}));function w(e){switch(e.item.type){case"category":return a.createElement(O,e);case"link":default:return a.createElement(D,e)}}function O(e){var t,n,o,r=e.item,l=e.onItemClick,i=e.collapsible,d=e.activePath,p=(0,c.Z)(e,["item","onItemClick","collapsible","activePath"]),m=r.items,h=r.label,b=P(r,d),f=(n=b,o=(0,a.useRef)(n),(0,a.useEffect)((function(){o.current=n}),[n]),o.current),y=(0,a.useState)((function(){return!!i&&(!b&&r.collapsed)})),g=y[0],v=y[1],k=(0,a.useRef)(null),E=(0,a.useState)(void 0),C=E[0],_=E[1],N=function(e){var t;void 0===e&&(e=!0),_(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){b&&!f&&g&&v(!1)}),[b,f,g]);var Z=(0,a.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return v((function(e){return!e}))}),100)}),[C]);return 0===m.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":g})},a.createElement("a",(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&b},t[T]=!i,t)),onClick:i?Z:void 0,href:i?"#!":void 0},p),h),a.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){g||N(!1)}},a.createElement(R,{items:m,tabIndex:g?"-1":"0",onItemClick:l,collapsible:i,activePath:d})))}function D(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,l=(e.collapsible,(0,c.Z)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,d=n.label,p=P(n,r);return a.createElement("li",{className:"menu__list-item",key:d},a.createElement(f.Z,(0,s.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":p},t[A]=!(0,y.Z)(i),t)),to:i},(0,y.Z)(i)&&{isNavLink:!0,exact:!0,onClick:o},l),d))}function M(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",x),onClick:t},a.createElement(v,{className:L}))}function H(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(j,B)},"\xd7"):a.createElement(k.Z,{className:j,height:24,width:24}))}var W=function(e){var t,n,o=e.path,r=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,c=e.isHidden,f=function(){var e=(0,p.Z)().isAnnouncementBarClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,b.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),y=(0,d.LU)(),v=y.navbar.hideOnScroll,k=y.hideableSidebar,E=(0,p.Z)().isAnnouncementBarClosed,T=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var o=(0,h.Z)();return(0,a.useEffect)((function(){o===h.D.desktop&&n(!1)}),[o]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=T.showResponsiveSidebar,L=T.closeResponsiveSidebar,j=T.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[_]=v,t[N]=c,t))},v&&a.createElement(g.Z,{tabIndex:-1,className:Z}),a.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":x},n[I]=!E&&f,n))},a.createElement(H,{responsiveSidebarOpened:x,onClick:j}),a.createElement("ul",{className:"menu__list"},a.createElement(R,{items:r,onItemClick:L,collapsible:i,activePath:o}))),k&&a.createElement(M,{onClick:s}))},z={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},F={Prism:n(7410).Z,theme:z};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var K=/\r\n|\r|\n/,J=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},V=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Y=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=$({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=$({},n,{backgroundColor:null}),o};function G(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var q=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),U(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Y(e.theme,e.language):void 0;return t.themeDict=n})),U(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=$({},G(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?$({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),U(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var l=a?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(i))}})),U(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,l=$({},G(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?$({},l.style,o):o),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),U(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,l=0,i=[],s=[i];l>-1;){for(;(r=a[l]++)<o[l];){var c=void 0,u=t[l],d=n[l][r];if("string"==typeof d?(u=l>0?u:["plain"],c=d):(u=V(u,d.type),d.alias&&(u=V(u,d.alias)),c=d.content),"string"==typeof c){var p=c.split(K),m=p.length;i.push({types:u,content:p[0]});for(var h=1;h<m;h++)J(i),s.push(i=[]),i.push({types:u,content:p[h]})}else l++,t.push(u),n.push(c),a.push(0),o.push(c.length)}l--,t.pop(),n.pop(),a.pop(),o.pop()}return J(i),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var Q=n(7594),X=n.n(Q),ee={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},te=n(5350),ne=function(){var e=(0,d.LU)().prism,t=(0,te.Z)().isDarkTheme,n=e.theme||ee,a=e.darkTheme||n;return t?a:n},ae="codeBlockContainer_K1bP",oe="codeBlockContent_hGly",re="codeBlockTitle_eoMF",le="codeBlock_23N8",ie="codeBlockWithTitle_2JqI",se="copyButton_Ue-o",ce="codeBlockLines_39YC",ue=/{([\d,-]+)}/,de=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function pe(e){var t=e.children,n=e.className,o=e.metastring,r=e.title,l=(0,d.LU)().prism,i=(0,a.useState)(!1),c=i[0],p=i[1],m=(0,a.useState)(!1),h=m[0],b=m[1];(0,a.useEffect)((function(){b(!0)}),[]);var f=(0,d.bc)(o)||r,y=(0,a.useRef)(null),g=[],v=ne(),k=Array.isArray(t)?t.join(""):t;if(o&&ue.test(o)){var C=o.match(ue)[1];g=X()(C).filter((function(e){return e>0}))}var _=n&&n.replace(/language-/,"");!_&&l.defaultLanguage&&(_=l.defaultLanguage);var N=k.replace(/\n$/,"");if(0===g.length&&void 0!==_){for(var Z,S="",T=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return de(["js","jsBlock"]);case"jsx":case"tsx":return de(["js","jsBlock","jsx"]);case"html":return de(["js","jsBlock","html"]);case"python":case"py":return de(["python"]);default:return de()}}(_),I=k.replace(/\n$/,"").split("\n"),x=0;x<I.length;){var L=x+1,j=I[x].match(T);if(null!==j){switch(j.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=L+",";break;case"highlight-start":Z=L;break;case"highlight-end":S+=Z+"-"+(L-1)+","}I.splice(x,1)}else x+=1}g=X()(S),N=I.join("\n")}var B=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(N),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.createElement(q,(0,s.Z)({},F,{key:String(h),theme:v,code:N,language:_}),(function(e){var t,n=e.className,o=e.style,r=e.tokens,l=e.getLineProps,i=e.getTokenProps;return a.createElement("div",{className:ae},f&&a.createElement("div",{style:o,className:re},f),a.createElement("div",{className:(0,u.Z)(oe,_)},a.createElement("div",{tabIndex:0,className:(0,u.Z)(n,le,"thin-scrollbar",(t={},t[ie]=f,t))},a.createElement("div",{className:ce,style:o},r.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.createElement("div",(0,s.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,s.Z)({key:t},i({token:e,key:t})))})))})))),a.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(se),onClick:B},c?a.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var me="enhancedAnchor_2LWZ",he=function(e){return function(t){var n,o=t.id,r=(0,c.Z)(t,["id"]),l=(0,d.LU)().navbar.hideOnScroll;return o?a.createElement(e,r,a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,u.Z)("anchor",(n={},n[me]=!l,n)),id:o}),r.children,a.createElement("a",{className:"hash-link",href:"#"+o,title:(0,E.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):a.createElement(e,r)}},be={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(pe,e):a.createElement("code",e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(pe,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:he("h1"),h2:he("h2"),h3:he("h3"),h4:he("h4"),h5:he("h5"),h6:he("h6")},fe=n(4608),ye=n(5977),ge="docPage_31aa",ve="docMainContainer_3ufF",ke="docMainContainerEnhanced_3NYZ",Ee="docSidebarContainer_3Kbt",Ce="docSidebarContainerHidden_3pA8",_e="collapsedDocSidebar_2JMH",Ne="expandSidebarButtonIcon_1naQ",Ze="docItemWrapperEnhanced_2vyJ",Se="docItemWrapper_3FMP";function Te(e){var t,n,l,s,c,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,b=(0,r.default)(),f=b.siteConfig,y=b.isClient,g=m.pluginId,k=m.permalinkToSidebar,C=m.docsSidebars,_=m.version,N=k[p.path],Z=C[N],S=(0,a.useState)(!1),T=S[0],I=S[1],x=(0,a.useState)(!1),L=x[0],j=x[1],B=(0,a.useCallback)((function(){L&&j(!1),I(!T)}),[L]);return a.createElement(i.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:_,tag:(0,d.os)(g,_)}},a.createElement("div",{className:ge},Z&&a.createElement("div",{className:(0,u.Z)(Ee,(t={},t[Ce]=T,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Ee)&&T&&j(!0)},role:"complementary"},a.createElement(W,{key:N,sidebar:Z,path:p.path,sidebarCollapsible:null==(n=null==(l=f.themeConfig)?void 0:l.sidebarCollapsible)||n,onCollapse:B,isHidden:L}),L&&a.createElement("div",{className:_e,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:B,onClick:B},a.createElement(v,{className:Ne}))),a.createElement("main",{className:(0,u.Z)(ve,(s={},s[ke]=T||!Z,s))},a.createElement("div",{className:(0,u.Z)("container padding-vert--lg",Se,(c={},c[Ze]=T,c))},a.createElement(o.Zo,{components:be},h)))))}var Ie=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,r=t.find((function(e){return(0,ye.LX)(o.pathname,e)}));return r?a.createElement(Te,{currentDocRoute:r,versionMetadata:n},(0,l.Z)(t)):a.createElement(fe.default,e)}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);