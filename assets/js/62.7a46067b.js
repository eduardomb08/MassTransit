(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{205:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"samples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#samples"}},[e._v("#")]),e._v(" Samples")]),e._v(" "),a("p",[e._v("Working code is an excellent way to learn how to use MassTransit features. The samples below show the capabilities of MassTransit, and can be cloned, forked, and explored to get a better understanding.")]),e._v(" "),a("p",[e._v("The new samples are standalone repositories, which use NuGet to pull dependencies exactly as a developerwould use MassTransit.")]),e._v(" "),a("h3",{attrs:{id:"request-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-response"}},[e._v("#")]),e._v(" Request Response")]),e._v(" "),a("p",[e._v("This sample demonstrates how to create a client that sends a request to a service which responds with a response.")]),e._v(" "),a("p",[e._v("Features used:")]),e._v(" "),a("ul",[a("li",[e._v("Request Client")])]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/Sample-RequestResponse",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"shopping-cart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shopping-cart"}},[e._v("#")]),e._v(" Shopping Cart")]),e._v(" "),a("p",[e._v("This was a fun sample, created in response to a "),a("a",{attrs:{href:"http://joshkodroff.com/2015/08/21/an-elegant-abandoned-cart-email-using-nservicebus/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog post"),a("OutboundLink")],1),e._v(" on how to send an email to a customer that abandoned a shopping cart. My response to that post is "),a("a",{attrs:{href:"http://blog.phatboyg.com/general/2015/09/12/sagas-state-machines-and-abandoned-carts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("located here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Features used:")]),e._v(" "),a("ul",[a("li",[e._v("Automatonymous")]),e._v(" "),a("li",[e._v("Quartz")])]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/Sample-ShoppingWeb",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"courier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#courier"}},[e._v("#")]),e._v(" Courier")]),e._v(" "),a("p",[e._v("Courier is MassTransit's routing-slip implementation, which makes it possible to orchestrate distributed services into a business transaction. This sample demonstrates how to create and execute a routing slip, record routing slip events, and track transaction state using "),a("a",{attrs:{href:"https://github.com/MassTransit/Automatonymous",target:"_blank",rel:"noopener noreferrer"}},[e._v("Automatonymous"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("This sample includes multiple console applications, which can be started simultaneously, to observe how the services interact.")]),e._v(" "),a("p",[e._v("Features used:")]),e._v(" "),a("ul",[a("li",[e._v("Courier")]),e._v(" "),a("li",[e._v("Automatonymous")])]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/Sample-Courier",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"race-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#race-registration"}},[e._v("#")]),e._v(" Race Registration")]),e._v(" "),a("p",[e._v("This sample has multiple console applications, and a web API, allowing registrations to be submitted. The routing slip is tracked using a saga, and can compensate when an activity faults.")]),e._v(" "),a("p",[e._v("Features used:")]),e._v(" "),a("ul",[a("li",[e._v("Courier")]),e._v(" "),a("li",[e._v("Automatonymous")])]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/phatboyg/Demo-Registration",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[e._v("#")]),e._v(" Container")]),e._v(" "),a("p",[e._v("MassTransit supports several dependency injection containers. Examples of how to setup and use MassTransit with those containers is provided via a sample application.")]),e._v(" "),a("blockquote",[a("p",[e._v("Only currently active containers are fully supported. Other containers are still supported, but considered legacy.")])]),e._v(" "),a("p",[e._v("Features used:")]),e._v(" "),a("ul",[a("li",[e._v("Autofac")]),e._v(" "),a("li",[e._v("Castle Windsor")]),e._v(" "),a("li",[e._v("StructureMap")]),e._v(" "),a("li",[e._v("Lamar")]),e._v(" "),a("li",[e._v("Simple Injector")]),e._v(" "),a("li",[e._v("Microsoft Extensions Dependency Injection")])]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/Sample-Containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"asp-net-core-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asp-net-core-web"}},[e._v("#")]),e._v(" ASP.NET Core Web")]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/phatboyg/Sample-DotNetCore-DI",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"asp-net-core-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asp-net-core-console"}},[e._v("#")]),e._v(" ASP.NET Core Console")]),e._v(" "),a("p",[e._v("This sample uses the latest setup and integration to create a console service using .NET Core 2.2 (or later). This service can easily be deployed into a Docker container, and hosted in the Kubernetes cluster of choice.")]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/Sample-ConsoleService",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"quartz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quartz"}},[e._v("#")]),e._v(" Quartz")]),e._v(" "),a("p",[e._v("Features used:")]),e._v(" "),a("ul",[a("li",[e._v("Scheduling")]),e._v(" "),a("li",[e._v("Quartz")])]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/Sample-Quartz",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"rabbitmq-direct-exchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-direct-exchange"}},[e._v("#")]),e._v(" RabbitMQ Direct Exchange")]),e._v(" "),a("p",[e._v("Shows how to configure a consumer and a producer to use RabbitMQ direct exchange routing.")]),e._v(" "),a("p",[e._v("Features used:")]),e._v(" "),a("ul",[a("li",[e._v("RabbitMQ")])]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/Sample-Quartz",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"benchmark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[e._v("#")]),e._v(" Benchmark")]),e._v(" "),a("p",[e._v("Test the performance of MassTransit in your environment.")]),e._v(" "),a("p",[e._v("Clone the sample: "),a("a",{attrs:{href:"https://github.com/MassTransit/MassTransit-Benchmark",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);