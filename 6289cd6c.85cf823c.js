(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{262:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),i=(n(0),n(465)),o={id:"react-native-screens",title:"Optimize memory usage and performance",sidebar_label:"Optimize memory usage and performance"},c={id:"version-2.x/react-native-screens",title:"Optimize memory usage and performance",description:"Prior to `react-navigation@2.14.0`, all screens are essentially regular native `View` in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution.",source:"@site/versioned_docs/version-2.x/react-native-screens.md",permalink:"/docs/2.x/react-native-screens",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/react-native-screens.md",version:"2.x",sidebar_label:"Optimize memory usage and performance",sidebar:"version-2.x-docs",previous:{title:"Common mistakes",permalink:"/docs/2.x/common-mistakes"},next:{title:"Limitations",permalink:"/docs/2.x/limitations"}},s=[{value:"Setup when you are using Expo",id:"setup-when-you-are-using-expo",children:[]},{value:"Setup in normal react-native applications",id:"setup-in-normal-react-native-applications",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Prior to ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation@2.14.0"),", all screens are essentially regular native ",Object(i.b)("inlineCode",{parentName:"p"},"View")," in each platform, which will increase memory usage and make the render tree deep in a heavy-stacked application. This is one of the reason your app is slowing down comparing to native navigation solution."),Object(i.b)("p",null,"With the advent of ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-screens"),", the native screen optimization is brought possible to ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation")," by bringing the native navigation component (",Object(i.b)("inlineCode",{parentName:"p"},"UIViewController")," for iOS, and ",Object(i.b)("inlineCode",{parentName:"p"},"FragmentActivity")," for Android). By using ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-screens"),", it is possible for each native platform to optimize the memory usage for screens that are under the view stack and also simplify the native node hierarchy. You can take a look at the comparison ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/janicduplessis/status/1039979591815897088?s=21"}),"here")," to see the performance gain."),Object(i.b)("h2",{id:"setup-when-you-are-using-expo"},"Setup when you are using Expo"),Object(i.b)("p",null,"By default expo already included ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-screens"),", all you need to do is pasting the following snippet before your navigation stacks are rendered (typically in an ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," or ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," file):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Before rendering any navigation stack\nimport { useScreens } from 'react-native-screens';\nuseScreens();\n")),Object(i.b)("h2",{id:"setup-in-normal-react-native-applications"},"Setup in normal react-native applications"),Object(i.b)("p",null,"You will need to follow the installation instruction from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/kmagiera/react-native-screens"}),"react-native-screens")," first. After that, you can import the library like mentioned above and enjoy the optimization."))}l.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(b,c({ref:t},p,{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);