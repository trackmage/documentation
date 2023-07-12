"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[988],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,k=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8728:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"Webhooks",title:"Webhooks Guide",sidebar_label:"Webhooks",slug:"webhooks.html"},s=void 0,p={unversionedId:"workflow/Webhooks",id:"workflow/Webhooks",title:"Webhooks Guide",description:"With webhooks you can receive updates about particular entities.",source:"@site/docs/workflow/Webhooks.mdx",sourceDirName:"workflow",slug:"/workflow/webhooks.html",permalink:"/docs/workflow/webhooks.html",draft:!1,tags:[],version:"current",frontMatter:{id:"Webhooks",title:"Webhooks Guide",sidebar_label:"Webhooks",slug:"webhooks.html"},sidebar:"mainSidebar",previous:{title:"Workflow",permalink:"/docs/workflow/workflow.html"},next:{title:"Custom Fields",permalink:"/docs/custom-fields.html"}},u={},c=[{value:"How to setup the Webhooks",id:"how-to-setup-the-webhooks",level:2},{value:"Securing Webhooks",id:"securing-webhooks",level:2},{value:"Frequency of updates and Concurrency",id:"frequency-of-updates-and-concurrency",level:2},{value:"Anatomy of Webhook",id:"anatomy-of-webhook",level:2},{value:"List of supported webhook entities and events",id:"list-of-supported-webhook-entities-and-events",level:2},{value:"What you can do with Webhook via API",id:"what-you-can-do-with-webhook-via-api",level:2},{value:"How to programmatically create webhook",id:"how-to-programmatically-create-webhook",level:3},{value:"How to programmatically delete webhook",id:"how-to-programmatically-delete-webhook",level:3},{value:"How to handle webhook updates",id:"how-to-handle-webhook-updates",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With webhooks you can receive updates about particular entities.\nAfter you subscribed to a webhook you'll be receiving events when the entity is created, updated or deleted."),(0,r.kt)("p",null,"For example, you can rely on webhooks to trigger an action in your app when an order is created, or when tracking status of shipment is updated.\nBy using webhooks subscriptions you can make fewer API calls overall, which makes sure that your apps are more efficient and update quickly."),(0,r.kt)("p",null,"You can view this ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rxjkoeN0uMs"},"video")," to better understand how webhooks work in TrackMage."),(0,r.kt)("h2",{id:"how-to-setup-the-webhooks"},"How to setup the Webhooks"),(0,r.kt)("p",null,"You can enable the webhook from the Automation / Webhooks page in the ",(0,r.kt)("a",{parentName:"p",href:"https://app.trackmage.com/"},"TrackMage admin panel")," --\x3e Add webhook --\x3e Enter Webhook URL -> Select entities and events to start receiving updates."),(0,r.kt)("h2",{id:"securing-webhooks"},"Securing Webhooks"),(0,r.kt)("p",null,"We currently support either HTTP or HTTPS URLs, so you can have security by using an SSL-enabled URL.\nTo restrict access for your webhook endpoint we allow use two types of authorization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Basic")," - an HTTP authentication using username and password."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bearer")," - an HTTP authentication scheme that involves security tokens called bearer tokens.")),(0,r.kt)("h2",{id:"frequency-of-updates-and-concurrency"},"Frequency of updates and Concurrency"),(0,r.kt)("p",null,"For each webhook you can set up frequency of updates."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Immediately"),": the update will be sent as soon as a tracking number status changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"5 minutes - 6 hours"),": Webhook accumulates the updates and will send them in a batch.")),(0,r.kt)("p",null,"How Concurrency works:",(0,r.kt)("br",null),"\nLet's say, in the webhook buffer there are 1500 tracking numbers. Before the sending, the buffer is always split into portions or batches. The number of requests depends on the amount of tracking numbers to send and on the batch size. Currently, the batch size is 500.\nThe webhook buffer gets empty on success response. If response status is an error (4xx, 5xx), the tracking numbers will remain in the queue. If the response status is 401 - the webhook will be disabled.\nPartially submitted data will not be submitted again. For example, if webhook was able to submit 500 tracking numbers out of 1000, on the next call it will submit only remaining 500 (not 1000 like it used to)."),(0,r.kt)("p",null,"Example 1. The concurrency is set to 1 (or none)."),(0,r.kt)("p",null,"The batches will be sent consequently, so requests will not be sent in parallel.\nThe next batch will be sent only after the response from the previous has been received. In case if response status is error it'll stop sending the others."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[500][500][500] => receiver\n")),(0,r.kt)("p",null,"Example 2. The concurrency is 3 and all requests are sent in parallel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[500]\n[500] => receiver\n[500]\n")),(0,r.kt)("p",null,"On error, it will not stop but will try to send the next request. At the end, all not-accepted requests will be scheduled for the next webhook call."),(0,r.kt)("h2",{id:"anatomy-of-webhook"},"Anatomy of Webhook"),(0,r.kt)("p",null,"After you configure a webhook subscription, the events that you specified will schedule or send immediately (depended on your webhook settings)\na webhook notification.\nTrackMage sends event driven data to webhook URL via POST method.\nThis notification contains a JSON payload with event data and authorization header (basic or bearer) if Auth Type is set in the webhook settings."),(0,r.kt)("p",null,"JSON payload is represented by list of objects with four properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"entity"'),"- the entity for which the webhook triggered"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"event"')," - the event type create/update/delete"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"data"')," - the entity's data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"updatedFields"')," - the list of updated fields codes (empty for create/delete events)")),(0,r.kt)("p",null,"For example, the shipments/update webhook contains:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Header")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"authorization: Basic eDE6eDI=\ncontent-length: 1007\ncontent-type: application/json\nhost: webhook.example.com\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Body")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "entity": "shipments",\n      "data": {\n        "id": "018c7b7f-91d9-442d-ade4-eb72f95b9c15",\n        "@id": "/shipments/018c7b7f-91d9-442d-ade4-eb72f95b9c15",\n        "@type": "Shipment",\n        "email": null,\n        ...\n        "@context": "/contexts/Shipment",\n        "createdAt": "2021-05-05T09:01:26+02:00",\n        "shippedAt": "2021-05-02T07:01:27+00:00",\n        "updatedAt": "2021-05-05T07:01:27+00:00",\n        ...\n      },\n      "event": "update",\n      "updatedFields": [\n        "trackingStatus",\n        "destinationCarrier",\n        ...\n      ]\n    },\n    {\n      "entity": "shipments",\n      "data": {\n        "id": "018c7b7f-91d9-442d-ade4-eb72f95b9c15",\n        "@id": "/shipments/018c7b7f-91d9-442d-ade4-eb72f95b9c15",\n        "@type": "Shipment",\n        "email": null,\n        ...\n        "@context": "/contexts/Shipment",\n        "createdAt": "2021-05-05T09:01:26+02:00",\n        "shippedAt": null,\n        "updatedAt": "2021-05-05T07:01:27+00:00",\n        ...\n      },\n      "event": "update",\n      "updatedFields": [\n        "originCarrier",\n        "handler",\n        "updatedAt"\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"list-of-supported-webhook-entities-and-events"},"List of supported webhook entities and events"),(0,r.kt)("p",null,"TrackMage allows to create one webhook for all supported entities and events.\nBut we recommend specifying separate webhooks for different entities and events."),(0,r.kt)("p",null,"Webhooks are available for the following entities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/shipment/shipment.html"},"Shipment"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/shipment/shipment-item.html"},"ShipmentItem"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/order/order.html"},"Order"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/order/order-item.html"},"OrderItem"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reviews"))),(0,r.kt)("p",null,"Webhooks can be triggered for the following events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"update")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"delete"))),(0,r.kt)("h2",{id:"what-you-can-do-with-webhook-via-api"},"What you can do with Webhook via API"),(0,r.kt)("p",null,"Webhooks are represented by ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/workflow.html"},"Workflow")," entity in the TrackMage API."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In API request you should use ",(0,r.kt)("inlineCode",{parentName:"p"},'type: "webhook"')," to be sure you work with webhook")),(0,r.kt)("p",null,"In addition to standard ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/workflow.html#workflow-properties"},"Workflow fields"),", webhook has its own specified properties, which should be used in API requests.\nA full list of specified properties can be retrieved by using request to ",(0,r.kt)("a",{parentName:"p",href:"/docs/custom-fields.html#getFieldCollection"},"Custom Fields")," endpoint with GET parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"entity=workflows.webhook"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"https://api.trackmage.com/fields?entity=workflows.webhook\n")),(0,r.kt)("p",null,"Full list of available endpoints to create/update/edit webhooks available on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/workflow/workflow.html#endpoints"},"workflow")," page."),(0,r.kt)("h3",{id:"how-to-programmatically-create-webhook"},"How to programmatically create webhook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n<?php\nuse TrackMage\\Client\\TrackMageClient;\n\ntry {\n    $response = $client->post('/workflows', ['json' => [\n        'type' => 'webhook',\n        'period' => 'immediately',\n        'event' => 'update',\n        'title' => 'test webhook', // webhook title\n        'concurrency' => '1',\n        'workspace' => '/workspaces/' . $workspaceId,\n        'url' => $targetUrl,\n        'enabled' => true,\n        'entity' => $entity, // shipments|shipment_items|orders|order_items or null for any\n        'event' => $event, // create|update|delete or null for any\n        'field' => $field, // any field or null for any\n    ]]);\n    $data = TrackMageClient::item($response);\n} catch( ClientException $e ) {\n    print('Unable to create webhook: '.TrackMageClient::error($e));\n}\n")),(0,r.kt)("h3",{id:"how-to-programmatically-delete-webhook"},"How to programmatically delete webhook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n<?php\nuse TrackMage\\Client\\TrackMageClient;\n\ntry {\n    $response = $client->delete('/workflows/'.$webhookId);\n} catch( ClientException $e ) {\n    print('Unable to delete webhook: '.TrackMageClient::error($e));\n}\n")),(0,r.kt)("h2",{id:"how-to-handle-webhook-updates"},"How to handle webhook updates"),(0,r.kt)("p",null,"This example shows you how to retrieve the webhook, validate Basic authentication it and save data to a CSV file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"\n<?php\n\nvalidateAuth('trackmage', 'QwYDLKEYPWBoj74T2');\n$trackings = extractTrackingsFromRequest();\n$filename = extractFilenameFromRequest();\nsaveTrackingsToFile($trackings, __DIR__.'/'.$filename.'.csv');\nprint count($trackings).\" items processed\";\n\nfunction validateAuth($allowedLogin, $allowedPassword) {\n    if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW']) ||\n        $_SERVER['PHP_AUTH_USER'] !== $allowedLogin || $_SERVER['PHP_AUTH_PW'] !== $allowedPassword\n    ) {\n        header('WWW-Authenticate: Basic realm=\"Restricted area\"');\n        http_response_code(401);\n        print 'Unauthorized ' . $_SERVER['REQUEST_URI'] . \" from \" . $_SERVER['REMOTE_ADDR'];\n        exit;\n    }\n}\n\nfunction extractFilenameFromRequest() {\n  $host = $_SERVER['HTTP_HOST'];\n  if (false === $pos = strpos($host, 'trackmagic-webhook.your-domain.com')) {\n    return 'trackings-log';\n  }\n  return substr($host, 0, $pos-1);\n}\n\nfunction extractTrackingsFromRequest() {\n    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {\n        http_response_code(400);\n        print 'Request method must be POST';\n        exit;\n    }\n    $json = file_get_contents('php://input');\n    $data = @json_decode($json, true);\n    if (is_null($data) || !isset($data['data'])) {\n        http_response_code(400);\n        print 'Bad json format';\n        exit;\n    }\n    return $data['data'];\n}\n\nfunction saveTrackingsToFile(array $trackings, $filename) {\n    $file = new SplFileObject($filename, 'a');\n    $timestamp = (new DateTime())->format('c');\n    foreach ($trackings as $tracking) {\n        $file->fputcsv([\n            $timestamp,\n            $tracking['trackingNumber'],\n            $tracking['status'],\n        ]);\n    }\n}\n\n")))}h.isMDXComponent=!0}}]);