"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Via Composer",l={unversionedId:"Installation/composer",id:"Installation/composer",title:"Via Composer",description:"Underpin can be installed in any place you can write code using Composer. You can learn more about how to set up Composer using their documentation.",source:"@site/docs/Installation/composer.md",sourceDirName:"Installation",slug:"/Installation/composer",permalink:"/Installation/composer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Via WordPress",permalink:"/Installation/wordpress"}},c={},p=[{value:"What Is Composer?",id:"what-is-composer",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"via-composer"},"Via Composer"),(0,o.kt)("p",null,"Underpin can be installed in any place you can write code using Composer. You can learn more about how to set up Composer using ",(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"their documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"composer require underpin/underpin\n")),(0,o.kt)("h2",{id:"what-is-composer"},"What Is Composer?"),(0,o.kt)("p",null,"Composer is a package manager, somewhat like ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),". It allows you to download and use Underpin (and many other things) in your project. It also allows you to easily update this code as changes come along in the future. Generally, it will also handle automatically loading the files for you as well, so you don't need to worry about making ",(0,o.kt)("inlineCode",{parentName:"p"},"require_once")," calls throughout your code."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"You can learn more about composer here"),"."))}u.isMDXComponent=!0}}]);