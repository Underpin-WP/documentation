"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[192],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},s="Registry (Abstraction)",o={unversionedId:"reference/registries/abstract-registry",id:"reference/registries/abstract-registry",title:"Registry (Abstraction)",description:"The Registry is a no-frills base abstraction of a registry. It can be extended and used as you see-fit.",source:"@site/docs/reference/registries/abstract-registry.md",sourceDirName:"reference/registries",slug:"/reference/registries/abstract-registry",permalink:"/reference/registries/abstract-registry",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Registries",permalink:"/reference/registries/"},next:{title:"Object Registries",permalink:"/reference/registries/object-registries/"}},l={},c=[{value:"Example Registry",id:"example-registry",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"registry-abstraction"},"Registry (Abstraction)"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Registry")," is a no-frills base abstraction of a ",(0,a.kt)("a",{parentName:"p",href:"./"},"registry"),". It can be extended and used as you see-fit."),(0,a.kt)("p",null,"Before using this abstraction, make sure that you wouldn't be better-served using an existing extension of this class."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If this registry exists only as a one-off variable instead of an object that needs to be repeatedly instantiated\nthroughout your project, you probably want to use the\nconcrete ",(0,a.kt)("a",{parentName:"li",href:"./Registry"},"Registry class"),", ",(0,a.kt)("a",{parentName:"li",href:"./object-registries/collections/mutable-collection"},"Mutable Collection"),"\nor ",(0,a.kt)("a",{parentName:"li",href:"./object-registries/collections/immutable-collection"},"Immutable Collection")," instead."),(0,a.kt)("li",{parentName:"ol"},"If you're just validating the type of the items in your array, use ",(0,a.kt)("a",{parentName:"li",href:"./object-registries/abstract-Object-Registry"},"Object Registry"),", instead.")),(0,a.kt)("p",null,"All registries should:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Store the items provided with the ",(0,a.kt)("inlineCode",{parentName:"li"},"add")," method"),(0,a.kt)("li",{parentName:"ol"},"Validate the items added with ",(0,a.kt)("inlineCode",{parentName:"li"},"add")," using ",(0,a.kt)("inlineCode",{parentName:"li"},"validate_item"))),(0,a.kt)("h2",{id:"example-registry"},"Example Registry"),(0,a.kt)("p",null,"Let's say you have a list of ratings, on a scale of 1 to 5, and you want to have a way to run various calculations\nagainst this list. Let's assume this is coming from a database, where we have access to the user who made this review's\nID, as well as their rating."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$user_ratings = ['user-1' => 4, 'user-2' => 2, 'user-3' => 1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 5];\n")),(0,a.kt)("p",null,"You could create a registry that stores these items, and also provides ways to interact with this registry, making it\npossible to calculate totals, and other things."),(0,a.kt)("p",null,"The class declared below makes it possible to create a registry, ",(0,a.kt)("inlineCode",{parentName:"p"},"Ratings_Collection"),". This class will only allow you to\nadd items to it if the values are integers, and the ratings are between 1 and 5. Note that this also includes two\nexceptions, ",(0,a.kt)("inlineCode",{parentName:"p"},"Rating_Too_Low")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Rating_Too_High"),", which are used in the validation process to throw an exception that\nmakes clear why the validation failed."),(0,a.kt)("p",null,"We also added an ",(0,a.kt)("inlineCode",{parentName:"p"},"average")," method, which will calculate the average rating of the items provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use \\Underpin\\Abstracts\\Registries\\Registry;\n\nclass Ratings_Collection extends Registry{\n\n  /**\n  * {@inheritDoc}\n  */\n  protected function validate_item(string $key,mixed $value) : bool\n  {\n    $valid = is_int($value) && $value >= 1 && $value <= 5;\n    \n    if(!is_int($value)){\n      throw new \\Underpin\\Exceptions\\Invalid_Registry_Item('Could not validate the item');\n    }\n    \n    // This is optional. You don't have to create specific exceptions for everything, but it does make handling invalid cases a little easier.\n    if($value < 1){\n      throw new Rating_Too_Low('The provided rating is too low. Ratings cannot be less than 1.');\n    }\n    \n    if($value > 5){\n      throw new Rating_Too_High('The provided rating is too high. Ratings cannot be greater than 5');\n    }\n    \n    return $valid;\n  }\n  \n  /**\n   * Calculates the average rating of the ratings provided.\n   * @return float\n  */\n  public function average(): float\n  {\n    return array_sum($this->to_array())/count($this->to_array());\n  }\n}\n\nclass Rating_Too_High extends \\Underpin\\Exceptions\\Invalid_Registry_Item{}\n\nclass Rating_Too_Low extends \\Underpin\\Exceptions\\Invalid_Registry_Item{}\n")),(0,a.kt)("p",null,"With this registry in-place, you can now interact with it, and add logic that handles things based on the validations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$ratings_collection = new Ratings_Collection();\n$user_ratings = ['user-1' => 4, 'user-2' => 2, 'user-3' => -1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 6];\n\nforeach($user_ratings as $key => $value){\n  try{\n    $ratings_collection->add($key, $value);\n  }catch(Rating_Too_High $e){\n    // Cap the rating at 5\n    $ratings_collection->add($key, 5);\n  }catch(Rating_Too_Low $e){\n    // Cap the low end at 1\n    $ratings_collection->add($key, 1);\n  }catch(\\Underpin\\Exceptions\\Invalid_Registry_Item $e){\n    // Probably should just log the error, but you could also simply not catch this and pass it along.\n  }\n}\n\n// ['user-1' => 4, 'user-2' => 2, 'user-3' => 1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 5]\nvar_dump($user_ratings->to_array());\nvar_dump($user_ratings->average());\n")),(0,a.kt)("p",null,"The above would output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"array(6) ['user-1' => 4, 'user-2' => 2, 'user-3' => 1, 'user-4' => 4, 'user-5' => 2, 'user-6' => 5]\nfloat(3.0)\n")))}p.isMDXComponent=!0}}]);