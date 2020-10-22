(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,h=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return a?n.a.createElement(h,c(c({ref:t},l),{},{components:a})):n.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},145:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/00_overview_workflow-be0d429f0881f0dc056d60b842d6ef92.svg"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),i=(a(0),a(100)),o={id:"10_overview",title:"Overview"},c={unversionedId:"00_overview/10_overview",id:"00_overview/10_overview",isDocsHomePage:!1,title:"Overview",description:"Introduction",source:"@site/docs/00_overview/10_overview.md",slug:"/00_overview/10_overview",permalink:"/docs/00_overview/10_overview",editUrl:"https://github.com/argosnotary/docs/tree/master/docs/00_overview/10_overview.md",version:"current",sidebar:"docs",next:{title:"Getting started with Argos Notary",permalink:"/docs/10_get_started/10_get_started"}},b=[{value:"Introduction",id:"introduction",children:[]},{value:"System overview",id:"system-overview",children:[{value:"Involved actors",id:"involved-actors",children:[]},{value:"Components",id:"components",children:[]},{value:"Workflow example",id:"workflow-example",children:[]}]},{value:"Acknowledgement",id:"acknowledgement",children:[]}],l={rightToc:b};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Argos provides a framework to protect the integrity of a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#software-supply-chain-or-ssc"}),Object(i.b)("strong",{parentName:"a"},"software supply chain")),". It provides a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://argosnotary.github.io/generated/openapi/"}),Object(i.b)("strong",{parentName:"a"},"REST API"))," and client libraries in order to protect the integrity of ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#artifact"}),Object(i.b)("strong",{parentName:"a"},"artifacts"))," produced by a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#software-supply-chain-or-ssc"}),Object(i.b)("strong",{parentName:"a"},"software supply chain")),"."),Object(i.b)("p",null,"It does so by verifying that each ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#step"}),Object(i.b)("strong",{parentName:"a"},"step"))," in the chain is carried out as planned, by authorized systems or personnel, and that the product is not tampered with in transit."),Object(i.b)("p",null,"It allows a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#project-owner"}),Object(i.b)("strong",{parentName:"a"},"project owner"))," to create a layout. A ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#layout"}),Object(i.b)("strong",{parentName:"a"},"layout"))," lists the sequence of steps of the software supply chain, and the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#functionary"}),Object(i.b)("strong",{parentName:"a"},"functionaries"))," authorized to perform these steps."),Object(i.b)("p",null,"When a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#functionary"}),Object(i.b)("strong",{parentName:"a"},"functionary"))," performs a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#step"}),Object(i.b)("strong",{parentName:"a"},"step"))," it gathers information about the related files and sends it to the ",Object(i.b)("strong",{parentName:"p"},"Argos Notary Service")," in a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#link"}),Object(i.b)("strong",{parentName:"a"},"link"))," metadata file. As a consequence ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#link"}),Object(i.b)("strong",{parentName:"a"},"link"))," files provide the required evidence to establish a continuous chain that can be ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#verification"}),Object(i.b)("strong",{parentName:"a"},"verified"))," against the steps defined in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#layout"}),Object(i.b)("strong",{parentName:"a"},"layout"))),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#layout"}),Object(i.b)("strong",{parentName:"a"},"layout")),", signed by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#project-owner"}),Object(i.b)("strong",{parentName:"a"},"project owners"))," together with the links, signed by the designated ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#functionary"}),Object(i.b)("strong",{parentName:"a"},"functionaries"))," for a particular ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../70_reference/10_terminology#scr"}),Object(i.b)("strong",{parentName:"a"},"supply chain run")),", can be verified by the service."),Object(i.b)("p",null,"This ",Object(i.b)("strong",{parentName:"p"},"Overview")," is a short description of the system. A complete definition can be found in other parts of the documentation."),Object(i.b)("h2",{id:"system-overview"},"System overview"),Object(i.b)("h3",{id:"involved-actors"},"Involved actors"),Object(i.b)("p",null,"In the context of Argos Notary, a actor has duties and has to perform a set of actions."),Object(i.b)("p",null,"In the description of the actors that follows, it is important to remember that the framework has been designed to allow a large amount of flexibility for many different use cases. Given that every project uses a very specific set of tools and practices, this is a necessary requirement for Argos Notary."),Object(i.b)("p",null,"There are three different kind of actors in the framework:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Project Owner"),": defines the ",Object(i.b)("em",{parentName:"li"},"layout")," of a software ",Object(i.b)("em",{parentName:"li"},"supply chain"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Functionary"),": performs a ",Object(i.b)("em",{parentName:"li"},"step")," in the ",Object(i.b)("em",{parentName:"li"},"supply chain")," and provides a signed ",Object(i.b)("em",{parentName:"li"},"link")," as a record that such a ",Object(i.b)("em",{parentName:"li"},"step")," was carried out."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Client"),": Performs ",Object(i.b)("em",{parentName:"li"},"verification")," on a set of ",Object(i.b)("em",{parentName:"li"},"end products")," by requesting a validation of the set on the Argos Notary Service.")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Layouts")," and ",Object(i.b)("em",{parentName:"p"},"links")," are signed with the private RSA key of the actor."),Object(i.b)("h3",{id:"components"},"Components"),Object(i.b)("p",null,"Argos Notary has three types of components"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Argos Notary Service"),": An integrated service to store and manage all Argos Notary objects"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Artifact Collectors"),": Services to collect ",Object(i.b)("em",{parentName:"li"},"Artifacts")," in the same as domain as the ",Object(i.b)("em",{parentName:"li"},"Artifact")," store, e.g. Git, Maven..."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Deployment Verifiers"),": Extensions on Deployment Mechanisms to validate end products to deploy.  ")),Object(i.b)("h3",{id:"workflow-example"},"Workflow example"),Object(i.b)("p",null,"To exemplify the working of the system, we will describe a simple scenario."),Object(i.b)("p",null,"Consider a ",Object(i.b)("em",{parentName:"p"},"project owner"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Alice"),", and her five ",Object(i.b)("em",{parentName:"p"},"functionaries"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Diana"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Bob"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Carl"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Build")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Client"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"Alice")," wants ",Object(i.b)("inlineCode",{parentName:"p"},"Diana")," to write a Python script (foo.py). Then, ",Object(i.b)("inlineCode",{parentName:"p"},"Alice")," wants ",Object(i.b)("inlineCode",{parentName:"p"},"Build")," to package the script into a tarball (foo.tar.gz).\nThis tarball will be sent to the client, ",Object(i.b)("inlineCode",{parentName:"p"},"Client"),", as part of the ",Object(i.b)("em",{parentName:"p"},"end product"),". ",Object(i.b)("inlineCode",{parentName:"p"},"Client")," wants to deploy this target file, foo.tar.gz."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Alice")," will create a ",Object(i.b)("em",{parentName:"p"},"layout")," object that will be used by the Argos Notary Service during the ",Object(i.b)("em",{parentName:"p"},"release")," request to make sure of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"That ",Object(i.b)("inlineCode",{parentName:"li"},"Bob")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Carl")," approved the script which was written by ",Object(i.b)("inlineCode",{parentName:"li"},"Diana")),Object(i.b)("li",{parentName:"ul"},"That the script written by ",Object(i.b)("inlineCode",{parentName:"li"},"Diana")," was input for the packaging of the tarball done by Build."),Object(i.b)("li",{parentName:"ul"},"That the tarball ",Object(i.b)("em",{parentName:"li"},"end product")," is approved by ",Object(i.b)("inlineCode",{parentName:"li"},"Alice"),".")),Object(i.b)("p",null,"In order for the Argos Notary Servive to do this, it will need four ",Object(i.b)("em",{parentName:"p"},"link")," objects and the ",Object(i.b)("em",{parentName:"p"},"layout"),": first, ",Object(i.b)("inlineCode",{parentName:"p"},"Alice\u2019s")," ",Object(i.b)("em",{parentName:"p"},"layout"),", describing the requirements listed above.\nThen, 2 ",Object(i.b)("em",{parentName:"p"},"link")," objects signed by ",Object(i.b)("inlineCode",{parentName:"p"},"Bob")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Carl")," which correspond to the approval of ",Object(i.b)("inlineCode",{parentName:"p"},"Diana\u2019s")," action of writing a script,\nand a ",Object(i.b)("em",{parentName:"p"},"link")," object signed by ",Object(i.b)("inlineCode",{parentName:"p"},"Build")," for the ",Object(i.b)("em",{parentName:"p"},"step")," of packaging the script. Finally, there should be a ",Object(i.b)("em",{parentName:"p"},"link")," object,\nincluding the target file (foo.tar.gz) ",Object(i.b)("em",{parentName:"p"},"artifact"),", signed by ",Object(i.b)("inlineCode",{parentName:"p"},"Alice")," to approve the all ",Object(i.b)("em",{parentName:"p"},"end products"),"."),Object(i.b)("p",null,"When the Argos Notary Service releases this end product on behalf of ",Object(i.b)("inlineCode",{parentName:"p"},"Alice"),", it will perform the following checks:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The ",Object(i.b)("em",{parentName:"li"},"layout")," exists and is signed with a trusted key (in this case, ",Object(i.b)("inlineCode",{parentName:"li"},"Alice's"),")."),Object(i.b)("li",{parentName:"ol"},"All ",Object(i.b)("em",{parentName:"li"},"end product")," ",Object(i.b)("em",{parentName:"li"},"artifacts")," match with the expected ",Object(i.b)("em",{parentName:"li"},"end products")," in the ",Object(i.b)("em",{parentName:"li"},"layout"),". "),Object(i.b)("li",{parentName:"ol"},"Every ",Object(i.b)("em",{parentName:"li"},"step")," in the ",Object(i.b)("em",{parentName:"li"},"layout")," has at least as much as needed corresponding ",Object(i.b)("em",{parentName:"li"},"link")," objects signed by the intended ",Object(i.b)("em",{parentName:"li"},"functionaries"),", as described in the ",Object(i.b)("em",{parentName:"li"},"layout"),"."),Object(i.b)("li",{parentName:"ol"},"All the ",Object(i.b)("em",{parentName:"li"},"materials")," and ",Object(i.b)("em",{parentName:"li"},"products")," listed in the ",Object(i.b)("em",{parentName:"li"},"link")," object match, as specified by the ",Object(i.b)("em",{parentName:"li"},"layout"),". This will be used to prevent packages from being altered without\na record (missing ",Object(i.b)("em",{parentName:"li"},"artifacts")," in the ",Object(i.b)("em",{parentName:"li"},"link")," object), or tampered with while in transit.\nIn this case, the ",Object(i.b)("em",{parentName:"li"},"products")," reported by Bob should match the ",Object(i.b)("em",{parentName:"li"},"materials")," reported by Build and so on.")),Object(i.b)("p",null,"If all of these ",Object(i.b)("em",{parentName:"p"},"verifications")," pass, the Argos Notary Service creates and stores a Release Dossier and returns the valid response on the request."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"Client")," wants to verify the validity of the target file it requests a verification of the hash in combination with optionally the domain of\nthe Supply Chain. For this request the Argos Notary Service checks the availabillity of the Release Dossier with the hash of the target file with optionally the domain."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Workflow",src:a(145).default}),Object(i.b)("sub",null,"1. the workflow for this example")),Object(i.b)("h2",{id:"acknowledgement"},"Acknowledgement"),Object(i.b)("p",null,"Argos Notary is an implementation of or at least inspired by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/in-toto/docs/blob/master/in-toto-spec.md"}),"in-toto specification"),".\nThis is the reason some parts of this documentation are the same as that specification. We couldn't completely refer to that specification\nbecause there also large differences. We are absolutely gratefull for the inspiration we got from their work."))}p.isMDXComponent=!0}}]);