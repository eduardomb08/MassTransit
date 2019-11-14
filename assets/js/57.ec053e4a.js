(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{271:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[e._v("#")]),e._v(" Upgrading")]),e._v(" "),a("p",[e._v("There have been several changes to v6 to reduce complexity, along with a few enhancements.")]),e._v(" "),a("h2",{attrs:{id:"automatonymous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatonymous"}},[e._v("#")]),e._v(" Automatonymous")]),e._v(" "),a("p",[e._v("In previous version, using Automatonymous required an additional package, "),a("code",[e._v("MassTransit.Automatonymous")]),e._v(". The contents of that package are now\nincluded in the "),a("code",[e._v("MassTransit")]),e._v(" assembly/package, which now depends on "),a("code",[e._v("Automatonymous")]),e._v(". This was done to reduce the number of extra packages\nrequired for container support (along with state machine registration), as well as improve the saga repository persistence assemblies.")]),e._v(" "),a("p",[e._v("When upgrading to v6, any references to the old "),a("code",[e._v("MassTransit.Automatonymous")]),e._v(" package should be removed.")]),e._v(" "),a("p",[e._v("If you are using a container with MassTransit, and were using one of the old container packages for Automatonymous, those package references\nshould also be removed. With version 6, only the single container integration package is required (such as "),a("code",[e._v("MassTransit.Autofac")]),e._v(" or\n"),a("code",[e._v("MassTransit.Extensions.DependencyInjection")]),e._v(").")]),e._v(" "),a("p",[e._v("The following packages are available for the supported containers:")]),e._v(" "),a("ul",[a("li",[e._v("MassTransit.Autofac")]),e._v(" "),a("li",[e._v("MassTransit.Extensions.DependencyInjection")]),e._v(" "),a("li",[e._v("MassTransit.Lamar")]),e._v(" "),a("li",[e._v("MassTransit.Ninject (no registration support)")]),e._v(" "),a("li",[e._v("MassTransit.SimpleInjector")]),e._v(" "),a("li",[e._v("MassTransit.StructureMap")]),e._v(" "),a("li",[e._v("MassTransit.Unity (no registration support)")]),e._v(" "),a("li",[e._v("MassTransit.Windsor")])]),e._v(" "),a("h2",{attrs:{id:"logging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging"}},[e._v("#")]),e._v(" Logging")]),e._v(" "),a("p",[e._v("The previous log abstraction used by MassTransit has been replaced with "),a("code",[e._v("Microsoft.Extensions.Logging.Abstractions")]),e._v(".")]),e._v(" "),a("p",[e._v("The previous log integration packages for Log4Net, NLog, and Serilog have been deprecated. An "),a("code",[e._v("ILoggerFactory")]),e._v(" instance can be\nconfigured for MassTransit by calling:")]),e._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[e._v("LogContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ConfigureCurrentLogContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("loggerFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("This should be done prior to configuring the bus.")]),e._v(" "),a("h3",{attrs:{id:"diagnosticsource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diagnosticsource"}},[e._v("#")]),e._v(" DiagnosticSource")]),e._v(" "),a("p",[e._v("As of version 6, MassTransit now uses DiagnosticSource for tracking messaging operations, such as Send, Receive, Publish, Consume, etc. An "),a("code",[e._v("Activity")]),e._v(" is\ncreated for each operation, and context-relevant tags and baggage are added.")]),e._v(" "),a("p",[e._v("To use a specific DiagnosticSource with MassTransit, you can specify it as an additional argument when configuring the LogContext.")]),e._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[e._v("LogContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ConfigureCurrentLogContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("loggerFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" diagnosticListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("blockquote",[a("p",[e._v("If you are using Application Insights (with Azure), you can connect a listener and all message activity will be reported automatically.")])]),e._v(" "),a("h2",{attrs:{id:"receive-endpoint-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receive-endpoint-configuration"}},[e._v("#")]),e._v(" Receive Endpoint Configuration")]),e._v(" "),a("p",[e._v("When MassTransit underwent a major overhaul, and multiple host support was added, that seemed like a great idea. A single bus talking to more than one broker, doing messaging. "),a("em",[e._v("Reality")]),e._v(" &emdot; nobody used it. It added a lot of complexity, that wasn't used.")]),e._v(" "),a("p",[e._v("With version 6, a single bus has a single host. That's it. Simple. And with this change, it is no longer necessary to specify the host when configuring a receive endpoint. Yes, the old methods are there, and a pseudo-host is returned from the "),a("code",[e._v(".Host()")]),e._v(" call which can still be passed, but it is ignored. All the transport-specific configuration methods are still there, without the "),a("code",[e._v("host")]),e._v(" parameter.")]),e._v(" "),a("p",[e._v("So, enjoy the simplicity. Under the covers some other things were also made simple &emdot; but I doubt you'll notice.")]),e._v(" "),a("h2",{attrs:{id:"courier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#courier"}},[e._v("#")]),e._v(" Courier")]),e._v(" "),a("p",[e._v("To be consistent with the rest of MassTransit, many of the interfaces in Courier has been renamed. For example, "),a("code",[e._v("ExecuteActivity<TArguments>")]),e._v(" is now\n"),a("code",[e._v("IExecuteActivity<TArguments>")]),e._v(". The previous interfaces are still supported, but have been marked obsolete.")]),e._v(" "),a("h2",{attrs:{id:"conductor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conductor"}},[e._v("#")]),e._v(" Conductor")]),e._v(" "),a("p",[e._v("Hard things are hard. Building distributed applications at scale is a hard thing, and it's hard. In fact, it is really hard.")]),e._v(" "),a("p",[a("em",[e._v("Conductor wants to make it easier, with less complexity.")])]),e._v(" "),a("h2",{attrs:{id:"masstransit-host-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-host-service"}},[e._v("#")]),e._v(" MassTransit Host Service")]),e._v(" "),a("p",[e._v("Previous version of MassTransit provided a generalized service host, built using Topshelf, to get started with your first project. But the world has changed. With ASP.NET Core 3.0, and all the goodness that is the generic host, the developer community has moved to a new place.")]),e._v(" "),a("p",[e._v("The latest version of the host is built entirely from scratch, and takes advantage of:")]),e._v(" "),a("ul",[a("li",[e._v("Microsoft Dependency Injection")]),e._v(" "),a("li",[e._v(".NET Core Generic Host")]),e._v(" "),a("li",[e._v("Microsoft Extensions Logging")]),e._v(" "),a("li",[e._v("MassTransit's most excellent container registration/discovery extensions")])]),e._v(" "),a("p",[e._v("Once it's built, the details will all be... revealed!")])])}),[],!1,null,null,null);t.default=n.exports}}]);