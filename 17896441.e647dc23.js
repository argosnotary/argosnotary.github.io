(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(102),i=a(94),c=a(97),s=a(96);var o=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},m=a(100);var d=function(){const{siteConfig:{title:e}}=Object(i.a)(),{pluginId:t}=Object(m.useActivePlugin)({failfast:!0}),a=Object(m.useActiveVersion)(t),{latestDocSuggestion:n,latestVersionSuggestion:r}=Object(m.useDocVersionSuggestions)(t);if(!r)return l.a.createElement(l.a.Fragment,null);const c=null!=n?n:(o=r).docs.find(e=>e.id===o.mainDocId);var o;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===a.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,a.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,a.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(s.a,{to:c.path},"latest version"))," ","(",r.label,")."))};var u=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n,i;function c(){const c=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){let a=0,n=!1;for(i=document.getElementsByClassName(e);a<i.length&&!n;){const e=i[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));c.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}})},g=a(54),E=a.n(g);function v({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(v,{isChild:!0,headings:e.children})))):null}var p=function({headings:e}){return u("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:E.a.tableOfContents},l.a.createElement(v,{headings:e}))},b=a(95),f=a(55),h=a.n(f);t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:s}=e,{metadata:u}=s,{description:g,title:E,permalink:v,editUrl:f,lastUpdatedAt:_,lastUpdatedBy:N}=u,{frontMatter:{image:w,keywords:k,hide_title:y,hide_table_of_contents:O}}=s,{pluginId:j}=Object(m.useActivePlugin)({failfast:!0}),C=Object(m.useVersions)(j),x=Object(m.useActiveVersion)(j),I=C.length>1,L=E?`${E} | ${n}`:n,A=Object(c.a)(w,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,L),l.a.createElement("meta",{property:"og:title",content:L}),g&&l.a.createElement("meta",{name:"description",content:g}),g&&l.a.createElement("meta",{property:"og:description",content:g}),k&&k.length&&l.a.createElement("meta",{name:"keywords",content:k.join(",")}),w&&l.a.createElement("meta",{property:"og:image",content:A}),w&&l.a.createElement("meta",{property:"twitter:image",content:A}),w&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),v&&l.a.createElement("meta",{property:"og:url",content:a+v}),v&&l.a.createElement("link",{rel:"canonical",href:a+v})),l.a.createElement("div",{className:Object(b.a)("container padding-vert--lg",h.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(b.a)("col",{[h.a.docItemCol]:!O})},l.a.createElement(d,null),l.a.createElement("div",{className:h.a.docItemContainer},l.a.createElement("article",null,I&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",x.label)),!y&&l.a.createElement("header",null,l.a.createElement("h1",{className:h.a.docTitle},E)),l.a.createElement("div",{className:"markdown"},l.a.createElement(s,null))),(f||_||N)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},f&&l.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||N)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",_&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:h.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),N&&" "),N&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,N)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(o,{metadata:u})))),!O&&s.rightToc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(p,{headings:s.rightToc})))))}}}]);