(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{261:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-middleware"}},[e._v("#")]),e._v(" Using middleware")]),e._v(" "),a("p",[e._v("MassTransit is composed of a network of pipelines, which are used to dispatch messages from the transport, through the receive endpoint, past deserialization, and ultimately to the consumers. And these pipelines are entirely asynchronous, making them very fast and very flexible.")]),e._v(" "),a("p",[e._v("Middleware components can be added to every pipeline in MassTransit, allowing for complete customization of message processing. And the granular ways that middleware can be applied make it easy to focus a particular behavior into a single receive endpoint, a single consumer, a saga, or the entire bus.")]),e._v(" "),a("p",[e._v("Middleware components are configured via extension methods on any pipe configurator "),a("code",[e._v("IPipeConfigurator<T>")]),e._v(", and the extension methods all begin with "),a("code",[e._v("Use")]),e._v(" to separate them from other methods.")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/advanced/middleware/receive.html"}},[e._v("Receive Pipeline")])],1)]),e._v(" "),a("p",[e._v("The details of many of the built-in middleware components follow.")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/advanced/middleware/circuit-breaker.html"}},[e._v("Circuit breaker")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/advanced/middleware/concurrency-limit.html"}},[e._v("Concurrent message limit")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/advanced/middleware/rate-limiter.html"}},[e._v("Rate limiter")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/advanced/middleware/latest.html"}},[e._v("Latest")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"/advanced/middleware/custom.html"}},[e._v("Custom")])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);