"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[819],{5374:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={id:"TrackingPageElements",title:"Tracking Widgets",sidebar_label:"Widgets",slug:"tracking-widgets.html"},l=void 0,d={unversionedId:"TrackingPageElements",id:"TrackingPageElements",title:"Tracking Widgets",description:"TrackMage allows to add tracking widgets on your own pages.",source:"@site/docs/TrackingPageElements.mdx",sourceDirName:".",slug:"/tracking-widgets.html",permalink:"/docs/tracking-widgets.html",tags:[],version:"current",frontMatter:{id:"TrackingPageElements",title:"Tracking Widgets",sidebar_label:"Widgets",slug:"tracking-widgets.html"},sidebar:"mainSidebar",previous:{title:"PHP",permalink:"/docs/trackmage-sdks/php-sdk.html"}},c=[{value:"Setup Widget",id:"setup-widget",children:[],level:2},{value:"Tracking Cards Widget",id:"tracking-cards-widget",children:[],level:2},{value:"Lookup Widget",id:"lookup-widget",children:[],level:2}],g={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TrackMage allows to add tracking widgets on your own pages."),(0,i.kt)("p",null,"To make widget works you should add script tag before ",(0,i.kt)("inlineCode",{parentName:"p"},"</body>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="https://s3-stage.trackmage.com/trackmage-widgets-rc/tracking-page-elements.js"><\/script>\n')),(0,i.kt)("h2",{id:"setup-widget"},"Setup Widget"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Is required"),". Should be added on each page where you want to use widgets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'  <trackmage-setup domain="DOMAIN_NAME" locale="LOCALE_CODE"></trackmage-setup>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",{className:"properties-table"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"domain")),(0,i.kt)("td",null,"Required parameter. Subdomain of your existing tracking page.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"locale")),(0,i.kt)("td",null,"Optional parameter. Locale two-letter code. If not set, default locale from your tracking page will be used. Allowed values: de, en, es, fr, gr, it, pt, ru.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Tracking Cards and Lookup widgets can work as separate widgets or in a pair."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If Lookup widget is used as a separate widget, search result will be opened in a new tab with full version of tracking page.\nIf Tracking Cards widget also presents on the page, search result with be shown on the same page."))),(0,i.kt)("h2",{id:"tracking-cards-widget"},"Tracking Cards Widget"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'  <trackmage-tracking-cards search="<TRACKING_NUMBER|ORDER_NUMBER>" bgcolor="BG_COLOR"></trackmage-tracking-cards>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",{className:"properties-table"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"search")),(0,i.kt)("td",null,"Optional parameter. A Tracking Number or Order Number for which you want to show information.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"bgcolor")),(0,i.kt)("td",null,"Optional parameter. Css background color for language menu. If not set 'transparent' background will be used. Example #000000.")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"search")," parameter should be set to display information if Tracking Cards widget is used without a Lookup widget"))),(0,i.kt)("h2",{id:"lookup-widget"},"Lookup Widget"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"  <trackmage-order-lookup></trackmage-order-lookup>\n")))}p.isMDXComponent=!0}}]);