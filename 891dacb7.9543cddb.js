(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{322:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(1),n=a(9),o=(a(0),a(465)),r={id:"limitations",title:"Limitations",sidebar_label:"Limitations"},s={id:"version-5.x/limitations",title:"Limitations",description:"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt [a different library instead](alternatives.md). We discuss the high level design decisions in the [pitch & anti-pitch](pitch.md) section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you.",source:"@site/versioned_docs/version-5.x/limitations.md",permalink:"/docs/limitations",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/limitations.md",version:"5.x",sidebar_label:"Limitations",sidebar:"version-5.x/docs",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"Tab navigation",permalink:"/docs/tab-based-navigation"}},c=[{value:"Performance limitations",id:"performance-limitations",children:[]},{value:"Right-to-left (RTL) layout support",id:"right-to-left-rtl-layout-support",children:[]},{value:"Some platform-specific behavior",id:"some-platform-specific-behavior",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/alternatives"}),"a different library instead"),". We discuss the high level design decisions in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/pitch"}),"pitch & anti-pitch")," section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you."),Object(o.b)("h2",{id:"performance-limitations"},"Performance limitations"),Object(o.b)("p",null,"React Navigation implements animations and gestures using ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://software-mansion.github.io/react-native-reanimated/"}),"Reanimated")," and ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://kmagiera.github.io/react-native-gesture-handler/"}),"Gesture Handler")," which run in the native thread. This makes sure that the animations and gestures are smooth even if the JavaScript thread is blocked. However, you might still experience frame drops when rendering expensive components which render or update many complex views since rendering also happens on the same thread that the animations run in. We're also limited by the performance of Reanimated and Gesture Handler libraries."),Object(o.b)("p",null,"The new ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/native-stack-navigator"}),"native stack navigator")," uses the platform navigation primitives. While the customization options are limited with it, you'll get much better performance with it."),Object(o.b)("h2",{id:"right-to-left-rtl-layout-support"},"Right-to-left (RTL) layout support"),Object(o.b)("p",null,"We try to handle RTL layouts properly in React Navigation, however the team working on React Navigation is fairly small and we do not have the bandwidth or processes at the moment to test all changes against RTL layouts. So you might encounter issues with RTL layouts."),Object(o.b)("p",null,"If you like what React Navigation has to offer but are turned off by this constraint, we encourage you to get involved and take ownership of RTL layout support. Please reach out to us on Twitter: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://twitter.com/reactnavigation"}),"@reactnavigation"),"."),Object(o.b)("h2",{id:"some-platform-specific-behavior"},"Some platform-specific behavior"),Object(o.b)("p",null,"React Navigation doesn't support master-detail split-views on iPad yet. If you need this feature, you may want to use another library, although you can build it yourself if you like."),Object(o.b)("p",null,"React Navigation does not include support for the peek & pop feature available on devices with 3D touch."))}p.isMDXComponent=!0},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,m=u["".concat(r,".").concat(d)]||u[d]||h[d]||o;return a?n.a.createElement(m,s({ref:t},l,{components:a})):n.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);