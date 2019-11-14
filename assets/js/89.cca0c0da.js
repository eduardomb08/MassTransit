(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{221:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"messages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),s("p",[e._v("In MassTransit, a message is defined using the .NET type system. Messages can be defined using both classes and interfaces, however, it is suggested that types use read-only properties and no behavior.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("It is strongly suggested to use interfaces for message contracts, based on experience over several years with varying levels of developer experience. MassTransit will create dynamic interface implementations for the messages, ensuring a clean separation of the message contract from the consumer.")])]),e._v(" "),s("p",[e._v("An example message to update a customer address is shown below.")]),e._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[e._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("namespace")]),e._v(" Company"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Contracts\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("using")]),e._v(" System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("UpdateCustomerAddress")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Guid")]),e._v(" CommandId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("DateTime")]),e._v(" Timestamp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(" CustomerId "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(" HouseNumber "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(" Street "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(" City "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(" State "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),e._v(" PostalCode "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("A common mistake when engineers are new to messaging is to create a base class for messages, and try to dispatch that base class in the consumer – including the behavior of the subclass. Ouch. This always leads to pain and suffering, so just say no to base classes.")]),e._v(" "),s("h2",{attrs:{id:"message-names"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-names"}},[e._v("#")]),e._v(" Message Names")]),e._v(" "),s("p",[e._v("There are two main message types, "),s("em",[e._v("events")]),e._v(" and "),s("em",[e._v("commands")]),e._v(". When choosing a name for a message, the type of message should dictate the tense of the message.")]),e._v(" "),s("h3",{attrs:{id:"commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),s("p",[e._v("A command tells a service to do something. Commands are "),s("router-link",{attrs:{to:"/usage/producers.html#send"}},[e._v("sent")]),e._v(" (using "),s("code",[e._v("Send")]),e._v(") to an endpoint, as it is expected that a single service instance performs the command action. A command should never be published.")],1),e._v(" "),s("p",[e._v("Commands should be expressed in a verb-noun sequence, following the "),s("em",[e._v("tell")]),e._v(" style.")]),e._v(" "),s("p",[e._v("Example Commands:")]),e._v(" "),s("ul",[s("li",[e._v("UpdateCustomerAddress")]),e._v(" "),s("li",[e._v("UpgradeCustomerAccount")]),e._v(" "),s("li",[e._v("SubmitOrder")])]),e._v(" "),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),s("p",[e._v("An event signifies that something has happened. Events are "),s("router-link",{attrs:{to:"/usage/producers.html#publish"}},[e._v("published")]),e._v(" (using "),s("code",[e._v("Publish")]),e._v(") via either "),s("code",[e._v("IBus")]),e._v(" (standalone) or "),s("code",[e._v("ConsumeContext")]),e._v(" (within a message consumer). An event should not be sent directly to an endpoint.")],1),e._v(" "),s("p",[e._v("Events should be expressed in a noun-verb (past tense) sequence, indicating that something happened.")]),e._v(" "),s("p",[e._v("Example Events:")]),e._v(" "),s("ul",[s("li",[e._v("CustomerAddressUpdated")]),e._v(" "),s("li",[e._v("CustomerAccountUpgraded")]),e._v(" "),s("li",[e._v("OrderSubmitted, OrderAccepted, OrderRejected, OrderShipped")])]),e._v(" "),s("h2",{attrs:{id:"message-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-headers"}},[e._v("#")]),e._v(" Message Headers")]),e._v(" "),s("p",[e._v("MassTransit encapsulates every sent or published message in a message envelope (described by the "),s("a",{attrs:{href:"https://www.enterpriseintegrationpatterns.com/patterns/messaging/EnvelopeWrapper.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Envelope Wrapper"),s("OutboundLink")],1),e._v(" pattern). The envelope includes the message along with additional message headers, including:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Property")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Type")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("MessageId")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Generated for each message using "),s("code",[e._v("NewId.NextGuid")]),e._v(".")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("CorrelationId")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("User")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Assigned by the application, or automatically by convention, and should uniquely identify the operation, event, etc.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("RequestId")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Request")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Assigned by the request client, and automatically copied by the "),s("em",[e._v("Respond")]),e._v(" methods to correlate responses to the original request.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("InitiatorId")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Assigned when publishing or sending from a consumer, saga, or activity to the value of the "),s("em",[e._v("CorrelationId")]),e._v(" on the consumed message.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("ConversationId")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Assigned when the first message sent or published and no consumed message is available, ensuring that a set of messages within the same conversation have the save identifier.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("SourceAddress")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Where the message originated (may be a temporary address for messages published or sent from "),s("code",[e._v("IBus")]),e._v(").")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("DestinationAddress")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Where the message was sent")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("ResponseAddress")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Request")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Where responses to the request should be sent. If not present, responses are "),s("em",[e._v("published")]),e._v(".")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("FaultAddress")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("User")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Where consumer faults should be sent. If not present, faults are "),s("em",[e._v("published")]),e._v(".")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("ExpirationTime")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("User")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("When the message should expire, which may be used by the transport to remove the message if it isn't consumed by the expiration time.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("SentTime")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("When the message was sent, in UTC.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("MessageType")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("An array of message types, in a "),s("code",[e._v("MessageUrn")]),e._v(" format, which can be deserialized.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Host")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Auto")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("The host information of the machine that sent or published the message.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Headers")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("User")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Additional headers, which can be added by the user, middleware, or diagnostic trace filters.")])])])]),e._v(" "),s("h2",{attrs:{id:"message-correlation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-correlation"}},[e._v("#")]),e._v(" Message Correlation")]),e._v(" "),s("p",[e._v("Since messages usually do not live in isolation, publishing one message usually leads to publishing another message, and then another, and so on. It is useful to trace such sequences, however, to find them these messages need to have some information detailing how they relate to each other.")]),e._v(" "),s("p",[e._v("Correlation is the principle of connecting messages together, usually by using a unique identifier that is included in every message that is part of a logical sequence. In MassTransit, the unique identifier is referred to as the "),s("code",[e._v("CorrelationId")]),e._v(", which is included in the message envelope and available via the "),s("code",[e._v("ConsumeContext")]),e._v(" or the "),s("code",[e._v("SendContext")]),e._v(". MassTransit also includes a "),s("code",[e._v("ConversationId")]),e._v(" which is the same across an entire set of related messages.")]),e._v(" "),s("p",[e._v("In a distributed message-based system, message correlation is very important. Since operations are potentially executing across hundreds of nodes, the ability to correlate different messages to build a path through the system is absolutely necessary for engineers to troubleshoot problems.")]),e._v(" "),s("p",[e._v("The headers on the message envelope provided by MassTransit already make it easy to specify correlation values. In fact, most are setup by default if not specified by the developer.")]),e._v(" "),s("p",[e._v("MassTransit provides the interface "),s("code",[e._v("CorrelatedBy<T>")]),e._v(", which can be used to setup a default correlationId. This is used by sagas as well, since all sagas have a unique "),s("code",[e._v("CorrelationId")]),e._v(" for each instance of the saga. If a message implements "),s("code",[e._v("CorrelatedBy<Guid>")]),e._v(", it will automatically be directed to the saga instance with the matching identifier. If a new saga instance is created by the event, it will be assigned the "),s("code",[e._v("CorrelationId")]),e._v(" from the initiating message.")]),e._v(" "),s("p",[e._v("For message types that have a correlation identifier, but are not using the "),s("code",[e._v("CorrelatedBy")]),e._v(" interface, it is possible to declare the identifier for the message type and MassTransit will use that identifier by default for correlation.")]),e._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[e._v("MessageCorrelation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("UseCorrelationId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("YourMessageClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SomeGuidValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("This should be called before you start the bus. We currently recommend that you put all of these in a static method for easy grouping and then call it at the beginning of the MassTransit configuration block.")])]),e._v(" "),s("p",[e._v("Most transactions in a system will end up being logged and wide scale correlation is likely. Therefore, the use of consistent correlation identifiers is recommended. In fact, using a "),s("code",[e._v("Guid")]),e._v(" type is highly recommended. MassTransit uses the "),s("a",{attrs:{href:"https://www.nuget.org/packages/NewId",target:"_blank",rel:"noopener noreferrer"}},[e._v("NewId"),s("OutboundLink")],1),e._v(" library to generate identifiers that are unique and sequential that are represented as a "),s("code",[e._v("Guid")]),e._v(". The identifiers are clustered-index friendly, being ordered in a way that SQL Server can efficiently insert them into a database with the "),s("em",[e._v("uniqueidentifier")]),e._v(" as the primary key. Just use "),s("code",[e._v("NewId.NextGuid()")]),e._v(" to generate an identifier -- it's fast, fun, and all your friends are doing it.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("So, what does correlated actually mean? In short it means that this message is a part of a larger conversation. For instance, you may have a message that says "),s("i",[e._v("New Order (Item:Hammers; Qty:22; OrderNumber:45)")]),e._v(" and there may be another message that is a response to that message that says "),s("i",[e._v("Order Allocated(OrderNumber:45)")]),e._v(". In this case, the order number is acting as your correlation identifier, it ties the messages together.")])]),e._v(" "),s("h3",{attrs:{id:"correlation-conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#correlation-conventions"}},[e._v("#")]),e._v(" Correlation Conventions")]),e._v(" "),s("p",[e._v("In addition to the explicit "),s("code",[e._v("CorrelateBy<T>")]),e._v(" interface, a convention-based correlation is supported. If the message contract has a property named "),s("code",[e._v("CorrelationId")]),e._v(", "),s("code",[e._v("CommandId")]),e._v(", or "),s("code",[e._v("EventId")]),e._v(", the correlationId header is automatically populated on Send or Publish. It can also be manually specified using the "),s("code",[e._v("SendContext")]),e._v(".")]),e._v(" "),s("p",[e._v("Bear in mind that sagas default "),s("code",[e._v("CorrelateById()")]),e._v(" only support messages where the explicit "),s("code",[e._v("CorrelateBy<Guid>")]),e._v(" interface is implemented. However, the header is still useful if you do not use sagas, for example for message flow analysis and debugging.")]),e._v(" "),s("h2",{attrs:{id:"guidelines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guidelines"}},[e._v("#")]),e._v(" Guidelines")]),e._v(" "),s("p",[e._v("Given everything that was stated above, here are a few guidelines.")]),e._v(" "),s("ol",[s("li",[e._v("Interface-based inheritance is OK, don't be afraid, but don't go nuts.")]),e._v(" "),s("li",[e._v("Class-based inheritance is to be approached with caution.")]),e._v(" "),s("li",[e._v("Composing messages together ends up pushing us into content-based routing which is something we don't recommend.")]),e._v(" "),s("li",[e._v("Message Design is not OO Design (a message is just state, no behavior). There is a greater focus on interop and contract design.")]),e._v(" "),s("li",[e._v("As messages are more about contracts, we suggest subscribing to interfaces that way you can easily evolve the message definition.")]),e._v(" "),s("li",[e._v("A big base class may cause pain down the road as each change will have a larger ripple. This can be especially bad when you need to support multiple versions.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);