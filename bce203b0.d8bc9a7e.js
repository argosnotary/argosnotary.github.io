(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(93)),l={id:"10_installation",title:"Installation",sidebar_label:"Installation"},i={unversionedId:"30_installation/10_installation",id:"30_installation/10_installation",isDocsHomePage:!1,title:"Installation",description:"This is page is work in progress",source:"@site/docs/30_installation/10_installation.md",slug:"/30_installation/10_installation",permalink:"/docs/30_installation/10_installation",editUrl:"https://github.com/argosnotary/docs/tree/master/docs/30_installation/10_installation.md",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Architectural Decision Records (ADRs)",permalink:"/docs/20_architecture/20_decisions/10_intro"},next:{title:"wip",permalink:"/docs/30_installation/20_upgrade"}},c=[{value:"Prerequesites",id:"prerequesites",children:[]},{value:"Install with internal MongoDB",id:"install-with-internal-mongodb",children:[{value:"Install Argos Notary",id:"install-argos-notary",children:[]}]},{value:"Install with Atlas MongoDB",id:"install-with-atlas-mongodb",children:[{value:"Install Argos Notary",id:"install-argos-notary-1",children:[]}]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This is page is work in progress"))),Object(o.b)("p",null,"The installation will be based on ",Object(o.b)("inlineCode",{parentName:"p"},"Kubernetes")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Helm3")," charts. "),Object(o.b)("p",null,"At this moment only Azure AD is supported as OAUTH2 Provider."),Object(o.b)("h2",{id:"prerequesites"},"Prerequesites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"kubernetes 1.15+: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/home/"}),"documentation")),Object(o.b)("li",{parentName:"ul"},"kubectl: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"}),"documentation")),Object(o.b)("li",{parentName:"ul"},"helm3 3.1+: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://helm.sh/docs/intro/install/"}),"documentation")),Object(o.b)("li",{parentName:"ul"},"nginx-ingress-controler: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/kubernetes/ingress-nginx"}),"documentation")),Object(o.b)("li",{parentName:"ul"},"cert-manager: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jetstack/cert-manager"}),"documentation")),Object(o.b)("li",{parentName:"ul"},"Azure AD App Registration: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app"}),"quickstart register app")),Object(o.b)("li",{parentName:"ul"},"Github OAUTH App: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.github.com/en/developers/apps/building-oauth-apps"}),"building oauth apps")),Object(o.b)("li",{parentName:"ul"},"Google OAUTH: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://support.google.com/cloud/answer/6158849?hl=en"}),"Setting up OAuth 2.0"))),Object(o.b)("h2",{id:"install-with-internal-mongodb"},"Install with internal MongoDB"),Object(o.b)("p",null,"The following yaml should be used as input for the Helm install. Save this yaml in the\nfile ",Object(o.b)("inlineCode",{parentName:"p"},"values.yaml")," and fill in all parameters. All possible OAUTH providers are activated in this example."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"global:\n  oauthstub:\n    enabled: false\n\nfrontend: \n  ingress:\n    enabled: true    \n    annotations:\n      kubernetes.io/ingress.class: nginx\n      cert-manager.io/cluster-issuer: letsencrypt\n    hosts:\n      - host: '<ingress host>'\n    tls:\n      - secretName: tls-secret\n        hosts:\n          - '<ingress host>'\n\nservice:\n  secret:\n    mongodb_uri:\n      password: '<mongo password>'\n      dbhost_and_port: '<release name>-mongodb'\n  oauth2:\n    client:\n      registration:\n        azure:\n          clientId: '<azure client id>'\n          clientSecret: '<azure client secret>'\n        github:\n          clientId: '<github client id>'\n          clientSecret: '<github client secret>'\n        google:\n          clientId: '<google client id>'\n          clientSecret: '<google client secret>'\n      provider:\n        azure:\n          enabled: true\n        github:\n          enabled: true\n        google:\n          enabled: true\n  auth:\n    frontendRedirectBasePath: '<loadbalancer endpoint>'\n  jwt:\n    token:\n      secret: '<generated jwt token>'\n\nmongodb:\n  mongodbRootPassword: '<random string as mongodb password>'\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"client id"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The client id's of the OAUTH Providers")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"client secret"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The secrets of the OAUTH Providers")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"jwt token"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"JWT Token used for OAUTH, a new one should be created")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"password"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"choose a random string which will be used as the mongodb root password during initialization")))),Object(o.b)("h3",{id:"install-argos-notary"},"Install Argos Notary"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"helm install argos argosnotary/argosnotary -f values.yaml\n")),Object(o.b)("h2",{id:"install-with-atlas-mongodb"},"Install with Atlas MongoDB"),Object(o.b)("p",null,"It is also possible to use the MongoDB cloud solution ",Object(o.b)("inlineCode",{parentName:"p"},"Atlas MongoDB"),". To use this you have to\ncreate a database cluster at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloud.mongodb.com"}),"Atlas MongoDB"),". After this has been\ndone and an account and connection string is created, the following yaml statements should be used as\ninput for the Helm install."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# extra options for Atlas MongoDB\nservice:\n  secret:\n    mongodb_uri:\n      password: '<password delivered by Atlas MongoDB>'\n      dbhost_and_port: '<from Atlas connection url>'\n      dbconn: '<from Atlas connection url>'\n      dbprotocol: 'mongodb+srv'\n# an external mongodb cluster is used\nmongodb:\n  enabled: false\n")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"host and port"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The host and port part of the ",Object(o.b)("inlineCode",{parentName:"td"},"Atlas MongoDB")," cluster connection string")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"connection uri"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The uri part of the  ",Object(o.b)("inlineCode",{parentName:"td"},"Atlas MongoDB")," cluster connection string")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"username"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is the account created on ",Object(o.b)("inlineCode",{parentName:"td"},"Atlas MongoDB")," for connecting to the cluster")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"password"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This is the password for the mongo account")))),Object(o.b)("h3",{id:"install-argos-notary-1"},"Install Argos Notary"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"helm install argos argosnotary/argosnotary -f values.yaml\n")))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);