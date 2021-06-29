(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[317],{7502:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),s={id:"PhpSdk",title:"TrackMage PHP SDK",sidebar_label:"PHP",slug:"php-sdk.html"},d={unversionedId:"trackmage-sdks/PhpSdk",id:"trackmage-sdks/PhpSdk",isDocsHomePage:!1,title:"TrackMage PHP SDK",description:"Getting Stared with PHP SDK",source:"@site/docs/trackmage-sdks/php.mdx",sourceDirName:"trackmage-sdks",slug:"/trackmage-sdks/php-sdk.html",permalink:"/docs/trackmage-sdks/php-sdk.html",version:"current",sidebar_label:"PHP",frontMatter:{id:"PhpSdk",title:"TrackMage PHP SDK",sidebar_label:"PHP",slug:"php-sdk.html"},sidebar:"mainSidebar",previous:{title:"Carriers",permalink:"/docs/carriers.html"}},c=[{value:"Getting Stared with PHP SDK",id:"getting-stared-with-php-sdk",children:[]},{value:"Error handling",id:"error-handling",children:[]}],o={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getting-stared-with-php-sdk"},"Getting Stared with PHP SDK"),(0,i.kt)("p",null,"Download: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/trackmage/trackmage-sdk-php"},"https://github.com/trackmage/trackmage-sdk-php")),(0,i.kt)("h2",{id:"error-handling"},"Error handling"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"try {\n    $response = $client->post('/shipments', ['json' => $data]);\n} catch (ClientException $e) {\n    printf('An client exception occurred: %d %s', $e->getCode(), TrackMageClient::error($e);\n} catch (\\Exception $e) {\n    printf('An error occurred: %d %s', $e->getCode(), $e->getMessage());\n}\n")))}p.isMDXComponent=!0}}]);