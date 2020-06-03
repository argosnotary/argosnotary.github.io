(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),o=(r(0),r(129)),i={id:"10_overview",title:"Overview"},c={id:"00_overview/10_overview",title:"Overview",description:"## Introduction",source:"@site/docs/00_overview/10_overview.md",permalink:"/docs/00_overview/10_overview",editUrl:"https://github.com/argosnotary/docs/tree/master/docs/00_overview/10_overview.md",sidebar:"docs",next:{title:"Getting started with Argos Notary",permalink:"/docs/10_get_started/10_get_started"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"System overview",id:"system-overview",children:[{value:"Involved actors",id:"involved-actors",children:[]},{value:"Components",id:"components",children:[]},{value:"Workflow example",id:"workflow-example",children:[]}]},{value:"Acknowledgement",id:"acknowledgement",children:[]}],l={rightToc:b};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Argos provides a framework to protect the integrity of a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#software-supply-chain-or-ssc"}),Object(o.b)("strong",{parentName:"a"},"software supply chain")),". It provides a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/10_api"}),Object(o.b)("strong",{parentName:"a"},"REST API"))," and client libraries in order to protect the integrity of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#artifact"}),Object(o.b)("strong",{parentName:"a"},"artifacts"))," produced by a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#software-supply-chain-or-ssc"}),Object(o.b)("strong",{parentName:"a"},"software supply chain")),"."),Object(o.b)("p",null,"It does so by verifying that each ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#step"}),Object(o.b)("strong",{parentName:"a"},"step"))," in the chain is carried out as planned, by authorized systems or personnel, and that the product is not tampered with in transit."),Object(o.b)("p",null,"It allows a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#project-owner"}),Object(o.b)("strong",{parentName:"a"},"project owner"))," to create a layout. A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#layout"}),Object(o.b)("strong",{parentName:"a"},"layout"))," lists the sequence of steps of the software supply chain, and the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#functionary"}),Object(o.b)("strong",{parentName:"a"},"functionaries"))," authorized to perform these steps."),Object(o.b)("p",null,"When a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#functionary"}),Object(o.b)("strong",{parentName:"a"},"functionary"))," performs a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#step"}),Object(o.b)("strong",{parentName:"a"},"step"))," it gathers information about the used commands and the related files and sends it to the ",Object(o.b)("strong",{parentName:"p"},"Argos Notary Service")," in a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#link"}),Object(o.b)("strong",{parentName:"a"},"link"))," metadata file. As a consequence ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#link"}),Object(o.b)("strong",{parentName:"a"},"link"))," files provide the required evidence to establish a continuous chain that can be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#verification"}),Object(o.b)("strong",{parentName:"a"},"verified"))," against the steps defined in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#layout"}),Object(o.b)("strong",{parentName:"a"},"layout"))),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#layout"}),Object(o.b)("strong",{parentName:"a"},"layout")),", signed by the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#project-owner"}),Object(o.b)("strong",{parentName:"a"},"project owners"))," together with the links, signed by the designated ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#functionary"}),Object(o.b)("strong",{parentName:"a"},"functionaries"))," for a particular ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../50_reference/30_terminology#scr"}),Object(o.b)("strong",{parentName:"a"},"supply chain run")),", can be verified by the service."),Object(o.b)("p",null,"This ",Object(o.b)("strong",{parentName:"p"},"Overview")," is a short description of the system. A complete definition can be found in other parts of the documentation."),Object(o.b)("h2",{id:"system-overview"},"System overview"),Object(o.b)("h3",{id:"involved-actors"},"Involved actors"),Object(o.b)("p",null,"In the context of Argos Notary, a actor has duties and has to perform a set of actions."),Object(o.b)("p",null,"In the description of the actors that follows, it is important to remember that the framework has been designed to allow a large amount of flexibility for many different use cases. Given that every project uses a very specific set of tools and practices, this is a necessary requirement for Argos Notary."),Object(o.b)("p",null,"There are three different kind of actors in the framework:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Project Owner"),": defines the ",Object(o.b)("em",{parentName:"li"},"layout")," of a software ",Object(o.b)("em",{parentName:"li"},"supply chain"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Functionary"),": performs a ",Object(o.b)("em",{parentName:"li"},"step")," in the ",Object(o.b)("em",{parentName:"li"},"supply chain")," and provides a signed ",Object(o.b)("em",{parentName:"li"},"link")," as a record that such a ",Object(o.b)("em",{parentName:"li"},"step")," was carried out."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Client"),": Performs ",Object(o.b)("em",{parentName:"li"},"verification")," on a set of ",Object(o.b)("em",{parentName:"li"},"end products")," by requesting a validation of the set on the Argos Notary Service.")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Layouts")," and ",Object(o.b)("em",{parentName:"p"},"links")," are signed with the private RSA key of the actor."),Object(o.b)("h3",{id:"components"},"Components"),Object(o.b)("p",null,"Argos Notary has three types of components"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Argos Notary Service"),": An integrated service to store and manage all Argos Notary objects"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Artifact Collectors"),": Services to collect ",Object(o.b)("em",{parentName:"li"},"Artifacts")," in the same as domain as the ",Object(o.b)("em",{parentName:"li"},"Artifact")," store, e.g. Git, Maven..."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Deployment Verifiers"),": Extensions on Deployment Mechanisms to validate end products to deploy.  ")),Object(o.b)("h3",{id:"workflow-example"},"Workflow example"),Object(o.b)("p",null,"To exemplify the working of the system, we will describe a simple scenario."),Object(o.b)("p",null,"Consider a ",Object(o.b)("em",{parentName:"p"},"project owner"),", Alice, and her five ",Object(o.b)("em",{parentName:"p"},"functionaries"),", Diana, Bob, Carl, Build and Client. Alice wants Diana to write a Python script (foo.py). Then, Alice wants Build to package the script into a tarball (foo.tar.gz). This tarball will be sent to the client, Client, as part of the ",Object(o.b)("em",{parentName:"p"},"end product"),". Client wants to deploy this target file, foo.tar.gz."),Object(o.b)("p",null,"Alice will create a ",Object(o.b)("em",{parentName:"p"},"layout")," object that will be used by the Argos Notary Service during the ",Object(o.b)("em",{parentName:"p"},"verification")," request by Client to make sure of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"That Bob and Carl approved the script which was written by Diana"),Object(o.b)("li",{parentName:"ul"},"That the script written by Diana was input for the packaging of the tarball done by Build."),Object(o.b)("li",{parentName:"ul"},"That the tarball ",Object(o.b)("em",{parentName:"li"},"end product")," is approved by Alice.")),Object(o.b)("p",null,"In order for the Argos Notary Servive to do this, it will need four ",Object(o.b)("em",{parentName:"p"},"link")," objects and the ",Object(o.b)("em",{parentName:"p"},"layout"),": first, Alice\u2019s ",Object(o.b)("em",{parentName:"p"},"layout"),", describing the requirements listed above. Then, 2 ",Object(o.b)("em",{parentName:"p"},"link")," objects signed by Bob and Carl which correspond to the approval of Diana\u2019s action of writing a script, and a ",Object(o.b)("em",{parentName:"p"},"link")," object signed by Build for the ",Object(o.b)("em",{parentName:"p"},"step")," of packaging the script. Finally, there should be a ",Object(o.b)("em",{parentName:"p"},"link")," object, including the target file (foo.tar.gz) ",Object(o.b)("em",{parentName:"p"},"artifact"),", signed by Alice to approve the all ",Object(o.b)("em",{parentName:"p"},"end products"),"."),Object(o.b)("p",null,"When the Argos Notary Service verifies the end product on behalf of Deploy, it will perform the following checks:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("em",{parentName:"li"},"layout")," exists and is signed with a trusted key (in this case, Alice's)."),Object(o.b)("li",{parentName:"ol"},"All ",Object(o.b)("em",{parentName:"li"},"end product")," ",Object(o.b)("em",{parentName:"li"},"artifacts")," match with the expected ",Object(o.b)("em",{parentName:"li"},"end products")," in the ",Object(o.b)("em",{parentName:"li"},"layout"),". "),Object(o.b)("li",{parentName:"ol"},"Every ",Object(o.b)("em",{parentName:"li"},"step")," in the ",Object(o.b)("em",{parentName:"li"},"layout")," has at least as much as needed corresponding ",Object(o.b)("em",{parentName:"li"},"link")," objects signed by the intended ",Object(o.b)("em",{parentName:"li"},"functionaries"),", as described in the ",Object(o.b)("em",{parentName:"li"},"layout"),"."),Object(o.b)("li",{parentName:"ol"},"All the ",Object(o.b)("em",{parentName:"li"},"materials")," and ",Object(o.b)("em",{parentName:"li"},"products")," listed in the ",Object(o.b)("em",{parentName:"li"},"link")," object match, as specified by the ",Object(o.b)("em",{parentName:"li"},"layout"),". This will be used to prevent packages from being altered without a record (missing ",Object(o.b)("em",{parentName:"li"},"artifacts")," in the ",Object(o.b)("em",{parentName:"li"},"link")," object), or tampered with while in transit. In this case, the ",Object(o.b)("em",{parentName:"li"},"products")," reported by Bob should match the ",Object(o.b)("em",{parentName:"li"},"materials")," reported by Build and so on.")),Object(o.b)("p",null,"If all of these ",Object(o.b)("em",{parentName:"p"},"verifications")," pass, the Argos Notary Service returns the valid response on the request."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/00_overview_workflow.svg",alt:"Workflow"})),Object(o.b)("sub",null,"1. the workflow for this example")),Object(o.b)("h2",{id:"acknowledgement"},"Acknowledgement"))}p.isMDXComponent=!0},129:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.a.createElement(u,c({ref:t},l,{components:r})):n.a.createElement(u,c({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);