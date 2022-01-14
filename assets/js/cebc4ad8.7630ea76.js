"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[510],{906:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],d={id:"StandardEntityFields",title:"Standard Entity Fields",sidebar_label:"Standard Entity Fields",slug:"standard-entity-fields.html"},o=void 0,l={unversionedId:"StandardEntityFields",id:"StandardEntityFields",title:"Standard Entity Fields",description:"The TrackMage API consists of many object types. There are several attributes that are consistent across all",source:"@site/docs/StandardEntityFields.mdx",sourceDirName:".",slug:"/standard-entity-fields.html",permalink:"/docs/standard-entity-fields.html",tags:[],version:"current",frontMatter:{id:"StandardEntityFields",title:"Standard Entity Fields",sidebar_label:"Standard Entity Fields",slug:"standard-entity-fields.html"},sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Errors",permalink:"/docs/errors.html"}},c=[],u={toc:c};function h(t){var e=t.components,a=(0,r.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The TrackMage API consists of many object types. There are several attributes that are consistent across all objects:"),(0,s.kt)("ul",null,(0,s.kt)("li",null,(0,s.kt)("strong",null,"id"),": Every TrackMage Object that can be created and received through the API has an id field that is used to refer to the object in other API calls. An id is represented by UUID. These id values may be used in many API endpoints to refer to an existing object rather than specifying the full object definition."),(0,s.kt)("li",null,(0,s.kt)("strong",null,"workspace"),": Most API Objects also include Workspace value in format '/workspaces/UUID' that is used to refer to the Workspace to which the object belongs. These Workspace values are required in the most API endpoints."),(0,s.kt)("li",null,(0,s.kt)("strong",null,"created_at/updated_at"),": Most API objects also include values for created_at and updated_at. These two fields respectively specify the time the object in question was created and most recently updated. These datetime fields are formatted according to ",(0,s.kt)("a",{href:"https://www.w3.org/TR/NOTE-datetime",target:"_blank",title:"ISO 8601 Date and Time Formats"},"ISO 8601"),".")))}h.isMDXComponent=!0}}]);