"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=p(o),c=n,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return o?r.createElement(h,s(s({ref:t},u),{},{components:o})):r.createElement(h,s({ref:t},u))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,s[1]=a;for(var p=2;p<i;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4430:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const i={},s="Via WordPress",a={unversionedId:"Installation/wordpress",id:"Installation/wordpress",title:"Via WordPress",description:"The recommended way to install Underpin is using Composer. If you are already using Composer for your WordPress implementation, head on over to the Composer setup and follow the instructions there to set up Underpin through your existing Composer setup. If you do not currently have WordPress set up to use Composer, the guide below is intended to help you determine where you can set up Composer.",source:"@site/docs/Installation/wordpress.md",sourceDirName:"Installation",slug:"/Installation/wordpress",permalink:"/Installation/wordpress",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Via Composer",permalink:"/Installation/composer"},next:{title:"Underpin",permalink:"/"}},l={},p=[{value:"Setup Guide - Must-Use Plugin",id:"setup-guide---must-use-plugin",level:2},{value:"Setup Guide - WordPress Theme",id:"setup-guide---wordpress-theme",level:2},{value:"Setup Guide - WordPress Plugin",id:"setup-guide---wordpress-plugin",level:2},{value:"Distributing Underpin In Your Plugin or Theme",id:"distributing-underpin-in-your-plugin-or-theme",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"via-wordpress"},"Via WordPress"),(0,n.kt)("p",null,"The recommended way to install Underpin is using ",(0,n.kt)("a",{parentName:"p",href:"https://getcomposer.org"},"Composer"),". If you are already using Composer for your WordPress implementation, head on over to the ",(0,n.kt)("a",{parentName:"p",href:"composer"},"Composer")," setup and follow the instructions there to set up Underpin through your existing Composer setup. If you do ",(0,n.kt)("em",{parentName:"p"},"not")," currently have WordPress set up to use Composer, the guide below is intended to help you determine where you can set up Composer."),(0,n.kt)("h2",{id:"setup-guide---must-use-plugin"},"Setup Guide - Must-Use Plugin"),(0,n.kt)("p",null,"If you're building custom code for a specific site, the ",(0,n.kt)("a",{parentName:"p",href:"https://wordpress.org/documentation/article/must-use-plugins/"},"mu-plugin")," directory is most-likely the ideal place for your composer setup. This allows you to set up Underpin as must-use plugin, which ensures that the code is set up as early as possible within WordPress. The instructions below will place the ",(0,n.kt)("inlineCode",{parentName:"p"},"composer.json")," file in the root directory of your project, which gives you the most future-proof options for installing additional Composer packages, and also makes it easy to set up a git monorepo for your site."),(0,n.kt)("p",null,"First, set up a fresh Composer setup inside your ",(0,n.kt)("inlineCode",{parentName:"p"},"mu-plugins")," directory:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the root directory of your WordPress installation"),(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"composer init")," and follow the prompts.")),(0,n.kt)("p",null,"Now that you have set up your Composer file, we need to make a small tweak to it in-order to override the location in-which Underpin's files will reside. By default, Composer will try to install these files in the same directory as your ",(0,n.kt)("inlineCode",{parentName:"p"},"composer.json")," file, and we don't really want that. We actually want these to exist inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"mu-plugins")," directory."),(0,n.kt)("p",null,"To instruct Composer to do this, we need to change the ",(0,n.kt)("inlineCode",{parentName:"p"},"composer.json")," file. Add the following snippet inside your Composer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'  "config": {\n    "vendor-dir": "wp-content/mu-plugins/vendor"\n  }\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": If your composer file already has a ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," declared, you only need to add ",(0,n.kt)("inlineCode",{parentName:"p"},'"vendor-dir": "wp-content/mu-plugins/vendor"')," inside it."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new directory inside ",(0,n.kt)("inlineCode",{parentName:"li"},"{WordPress-root}/wp-content")," called ",(0,n.kt)("inlineCode",{parentName:"li"},"mu-plugins"),". If it already exists, move on to the next step."),(0,n.kt)("li",{parentName:"ol"},"Now install Underpin by running: ",(0,n.kt)("inlineCode",{parentName:"li"},"composer require underpin/underpin")," from your WordPress root directory. After doing this, you should see a ",(0,n.kt)("inlineCode",{parentName:"li"},"vendor")," directory inside your ",(0,n.kt)("inlineCode",{parentName:"li"},"mu-plugins")," directory."),(0,n.kt)("li",{parentName:"ol"},"Create a new file inside ",(0,n.kt)("inlineCode",{parentName:"li"},"mu-plugins"),". You can name it whatever you want, as long as it is a PHP file."),(0,n.kt)("li",{parentName:"ol"},"In this newly created file, require the autoloader like so:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nif ( ! defined( 'ABSPATH' ) ) {\n    exit;\n}\n\n// Load Underpin, and its dependencies.\n$autoload = plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';\n\nrequire_once( $autoload );\n")),(0,n.kt)("p",null,"And that's it! You should now be able to use Underpin anywhere in your WordPress installation."),(0,n.kt)("h2",{id:"setup-guide---wordpress-theme"},"Setup Guide - WordPress Theme"),(0,n.kt)("p",null,"If you intend to distribute the code you write as a WordPress theme, or you simply prefer to write all of your WordPress code using your WordPress theme, this is your best option."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the root directory of your WordPress theme."),(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"composer init")," and follow the prompts."),(0,n.kt)("li",{parentName:"ol"},"Now install Underpin by running: ",(0,n.kt)("inlineCode",{parentName:"li"},"composer require underpin/underpin")," from your WordPress theme root directory. After doing this, you should see a ",(0,n.kt)("inlineCode",{parentName:"li"},"vendor")," directory inside your theme directory."),(0,n.kt)("li",{parentName:"ol"},"Add the following code to the top of your theme's ",(0,n.kt)("inlineCode",{parentName:"li"},"functions.php")," file. For more info about this file, ",(0,n.kt)("a",{parentName:"li",href:"https://developer.wordpress.org/themes/basics/theme-functions/"},"see the WordPress docs"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"// Load Underpin, and its dependencies.\n$autoload = trailingslashit(get_template_directory_uri()) . 'vendor/autoload.php';\n\nrequire_once( $autoload );\n")),(0,n.kt)("h2",{id:"setup-guide---wordpress-plugin"},"Setup Guide - WordPress Plugin"),(0,n.kt)("p",null,"If you intend to distribute the code you write as a WordPress plugin, or you simply prefer to write all of your WordPress code using your WordPress plugin, this is your best option."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the root directory of your WordPress plugin."),(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"composer init")," and follow the prompts."),(0,n.kt)("li",{parentName:"ol"},"Now install Underpin by running: ",(0,n.kt)("inlineCode",{parentName:"li"},"composer require underpin/underpin")," from your WordPress plugin root directory. After doing this, you should see a ",(0,n.kt)("inlineCode",{parentName:"li"},"vendor")," directory inside your plugin directory."),(0,n.kt)("li",{parentName:"ol"},"Add the following code as early as possible, preferably toward the top of your plugin's entrypoint file. For more info about this file, ",(0,n.kt)("a",{parentName:"li",href:"https://developer.wordpress.org/plugins/plugin-basics/"},"see the WordPress docs"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"// Load Underpin, and its dependencies.\n$autoload = plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';\n\nrequire_once( $autoload );\n")),(0,n.kt)("h2",{id:"distributing-underpin-in-your-plugin-or-theme"},"Distributing Underpin In Your Plugin or Theme"),(0,n.kt)("p",null,"If you plan on distributing a plugin or theme that is created using Composer (including with Underpin), You'll need to use some kind of scoping library, such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/coenjacobs/mozart"},"Mozart")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/humbug/php-scoper"},"PHP Scoper"),". This is important, because it's possible that any other WordPress site is ",(0,n.kt)("em",{parentName:"p"},"also")," using Composer, and if they are running a different version of your plugin, that version might load instead of your version, and cause unintended conflicts. These scoping libraries fix this problem by automatically changing the namespace of your Composer dependencies, which allows both versions to run separately without conflict."),(0,n.kt)("p",null,"This is not something that at this moment has been tested extensively, however Underpin works closely with how Composer naturally works, and should be compatible with the scoping libraries mentioned above."))}d.isMDXComponent=!0}}]);