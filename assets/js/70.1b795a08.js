(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{239:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"under-the-hood"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#under-the-hood"}},[e._v("#")]),e._v(" Under the hood")]),e._v(" "),s("p",[e._v("MassTransit hides all the details of messages and delivery from the developer.\nHowever, when there are issues it is important to know how it works so you can troubleshoot the issues.")]),e._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[e._v("#")]),e._v(" Setup")]),e._v(" "),s("p",[e._v("To see how this plays out, consider the following message types:")]),e._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" MySystem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Messages "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SomeMessage")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("Configure the bus that will listen to "),s("code",[e._v("SomeMessage")]),e._v(" with an endpoint of "),s("code",[e._v("my_endpoint")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"starting-a-bus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-bus"}},[e._v("#")]),e._v(" Starting a bus")]),e._v(" "),s("p",[e._v("When creating the endpoint above you indicated the name of the queue where the messages will end up.\nSee queue naming rules below.  Starting the bus with the consumers registered, causes the following configuration to happen:")]),e._v(" "),s("ul",[s("li",[e._v("A queue named "),s("code",[e._v("my_endpoint")]),e._v("is created for all messages on this endpoint")]),e._v(" "),s("li",[e._v("An exchange named "),s("code",[e._v("my_endpoint")]),e._v(" is created for all messages on this endpoint")]),e._v(" "),s("li",[e._v("An exchange named "),s("code",[e._v("MySystem.Messages.SomeMessage")]),e._v("is created for the message")]),e._v(" "),s("li",[e._v("An exchange to exchange binding from "),s("code",[e._v("MySystem.Messages.SomeMessage")]),e._v(" to "),s("code",[e._v("my_endpoint")]),e._v(" is created")]),e._v(" "),s("li",[e._v("A binding from the "),s("code",[e._v("my_endpoint")]),e._v(" exchange to "),s("code",[e._v("my_endpoint")]),e._v(" queue is created.")])]),e._v(" "),s("div",{staticClass:"alert alert-info"},[s("b",[e._v("Note:")]),e._v("\n    All exchanges created are of type FanOut\n")]),e._v(" "),s("h2",{attrs:{id:"publishing-a-message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publishing-a-message"}},[e._v("#")]),e._v(" Publishing a message")]),e._v(" "),s("p",[e._v("When you publish a message on the bus here is what happens:")]),e._v(" "),s("ul",[s("li",[e._v("Publish "),s("code",[e._v("MySystem.Messages.SomeMessage")])]),e._v(" "),s("li",[e._v("This message gets published by the publishing logic to the exchange "),s("code",[e._v("MySystem.Messages.SomeMessage")])]),e._v(" "),s("li",[e._v("The message is routed by messaging infrastructure to the "),s("code",[e._v("my_endpoint")]),e._v(" exchange")]),e._v(" "),s("li",[e._v("The message is then routed to the "),s("code",[e._v("my_endpoint")]),e._v(" queue")])]),e._v(" "),s("div",{staticClass:"alert alert-info"},[s("b",[e._v("Note:")]),e._v("\nIf you publish a message before the consumer has been started (and created its configuration), the exchange\n"),s("i",[e._v("MySystem.Messages.SomeMessage")]),e._v(" will be created. It will not be bound to anything until the consumer starts,\nso if you publish to it, the message will just disappear.\n")]),e._v(" "),s("h2",{attrs:{id:"queues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queues"}},[e._v("#")]),e._v(" Queues")]),e._v(" "),s("ul",[s("li",[e._v("Each application you write should use a unique queue name.")]),e._v(" "),s("li",[e._v("If you run multiple copies  of your consumer service, they would listen to the same queue (as they are copies).\nThis would mean you have multiple applications listening to "),s("code",[e._v("my_endpoint")]),e._v(" queue\nThis would result in a 'competing consumer' scenario.  (Which is what you want if you run same service multiple times)")]),e._v(" "),s("li",[e._v("If there is an exception from your consumer, the message will be sent to "),s("code",[e._v("my_endpoint_error")]),e._v(" queue.")]),e._v(" "),s("li",[e._v("If a message is received in a queue that the consumer does not know how to handle, the message will be sent to "),s("code",[e._v("my_endpoint_skipped")]),e._v(" queue.")])]),e._v(" "),s("h2",{attrs:{id:"design-benefits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-benefits"}},[e._v("#")]),e._v(" Design Benefits")]),e._v(" "),s("ul",[s("li",[e._v("Any application can listen to any message and that will not affect any other application that may or may not be listening for that message")]),e._v(" "),s("li",[e._v("Any application(s) that bind a group of messages to the same queue will result in the competing consumer pattern.")]),e._v(" "),s("li",[e._v("You do not have to concern yourself with anything but what message type to produce and what message type to consume.")])]),e._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" Faq")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("How many messages at a time will be simultaneously processed?")]),e._v(" "),s("ul",[s("li",[e._v("Each endpoint you create represents 1 queue.  That queue can receive any number of different message types (based on what you subscribe to it)")]),e._v(" "),s("li",[e._v("The configuration of each endpoint you can set the number of consumers with a call to "),s("code",[e._v("PrefetchCount(x)")]),e._v(".")]),e._v(" "),s("li",[e._v("This is the total number of consumers for all message types sent to this queue.")]),e._v(" "),s("li",[e._v("In MT2, you had to add ?prefetch=X to the Rabbit URL. This is handled automatically now.")])])]),e._v(" "),s("li",[s("p",[e._v("Can I have a set number of consumers per message type?")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Yes. This uses middleware.")]),e._v(" "),s("p",[s("code",[e._v("x.Consumer(new AutofacConsumerFactory<…>(), p => p.UseConcurrencyLimit(1)); x.PrefetchCount=16;")])]),e._v(" "),s("p",[e._v("PrefetchCount should be relatively high, a multiple of your concurrency limit for all message types so that RabbitMQ doesn't choke delivery messages due to network delays. Always have a queue ready to receive the message.")])])])]),e._v(" "),s("li",[s("p",[e._v("When my consumer is not running, I do not want the messages to wait in the queue.  How can I do this?")]),e._v(" "),s("ul",[s("li",[e._v("There are two ways.  Note that each of these imply you would never use a 'competing consumer' pattern, so make sure that is the case.\n"),s("ol",[s("li",[e._v("Set "),s("code",[e._v("PurgeOnStartup=true")]),e._v(" in the endpoint configuration. When the bus starts, it will empty the queue of all messages.")]),e._v(" "),s("li",[e._v("Set "),s("code",[e._v("AutoDelete=true")]),e._v(" in the endpoint configuration. This causes the queue to be removed when your application stops.")])])])])]),e._v(" "),s("li",[s("p",[e._v("How are Retries handled?")]),e._v(" "),s("ul",[s("li",[e._v("This is handled by "),s("router-link",{attrs:{to:"/understand/middleware.html"}},[e._v("middleware")]),e._v(". Each endpoint has a "),s("router-link",{attrs:{to:"/understand/retry.html"}},[e._v("retry policy")]),e._v(".")],1)])]),e._v(" "),s("li",[s("p",[e._v("Can I have a different retry policy per each message type?")]),e._v(" "),s("ul",[s("li",[e._v("No. This is set at an endpoint level. You would have to have a specific queue per consumer to achieve this.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);