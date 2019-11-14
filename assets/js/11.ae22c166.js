(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{252:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"using-courier"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-courier"}},[e._v("#")]),e._v(" Using Courier")]),e._v(" "),i("p",[e._v("Developing applications using a distributed, message-based architecture significantly increases the complexity of performing operations transactionally, where an end-to-end set of steps must be completed entirely, or not at all. In an application using an ACID database, this is typically done using SQL transactions, where partial operations are rolled back if the transaction cannot be completed. However, this doesn't scale when the steps being to include dependencies outside of a single database. And in the distributed, "),i("em",[e._v("microservices")]),e._v(" based architectures, the use of a single ACID database is shrinking to completely non-existent.")]),e._v(" "),i("p",[e._v("MassTransit Courier is a mechanism for creating and executing distributed transactions with fault compensation that can be used to meet the requirements previously within the domain of database transactions, but built to scale across a large system of distributed services. Courier also works well with MassTransit sagas, which add transaction monitoring and recoverability.")]),e._v(" "),i("h2",{attrs:{id:"using-a-routing-slip"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-a-routing-slip"}},[e._v("#")]),e._v(" Using a Routing Slip")]),e._v(" "),i("p",[e._v("A routing slip specifies a sequence of processing steps called "),i("em",[e._v("activities")]),e._v(" that are combined into a single transaction. As each activity completes, the routing slip is forwarded to the next activity in the itinerary. When all activities have completed, the routing slip is completed and the transaction is complete.")]),e._v(" "),i("p",[e._v("A key advantage to using a routing slip is it allows the activities to vary for each transaction. Depending upon the requirements for each transaction, which may differ based on things like payment methods, billing or shipping address, or customer preference ratings, the routing slip builder can selectively add activities to the routing slip. This dynamic behavior is in contrast to a more explicit behavior defined by a state machine or sequential workflow that is statically defined (either through the use of code, a DSL, or something like Windows Workflow).")]),e._v(" "),i("h2",{attrs:{id:"masstransit-courier"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#masstransit-courier"}},[e._v("#")]),e._v(" MassTransit Courier")]),e._v(" "),i("p",[e._v("MassTransit Courier is a framework that implements the routing slip pattern. Leveraging a durable messaging transport and the advanced saga features of MassTransit, Courier provides a powerful set of components to simplify the use of routing slips in distributed applications. Combining the routing slip pattern with a state machine such as "),i("a",{attrs:{href:"https://github.com/MassTransit/Automatonymous",target:"_blank",rel:"noopener noreferrer"}},[e._v("Automatonymous"),i("OutboundLink")],1),e._v("results in a reliable, recoverable, and supportable approach for coordinating and monitoring message processing across multiple services.")]),e._v(" "),i("p",[e._v("In addition to the basic routing slip pattern, MassTransit Courier also supports "),i("a",{attrs:{href:"http://en.wikipedia.org/wiki/Compensation_%28engineering%29",target:"_blank",rel:"noopener noreferrer"}},[e._v("compensations"),i("OutboundLink")],1),e._v(" which allow activities to store execution data so that reversible operations can be undone, using either a traditional rollback mechanism or by applying an offsetting operation. For example, an activity that holds a seat for a patron could release the held seat when compensated.")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"activities"}},[e._v("Activities")])]),e._v(" "),i("li",[i("a",{attrs:{href:"builder"}},[e._v("Builder")])]),e._v(" "),i("li",[i("a",{attrs:{href:"execute"}},[e._v("Execution")])]),e._v(" "),i("li",[i("a",{attrs:{href:"events"}},[e._v("Events")])]),e._v(" "),i("li",[i("a",{attrs:{href:"subscriptions"}},[e._v("Subscriptions")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);