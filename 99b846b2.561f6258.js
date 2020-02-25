(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),i=n(9),o=(n(0),n(465)),a={id:"switch-actions",title:"SwitchActions reference",sidebar_label:"SwitchActions"},c={id:"version-3.x/switch-actions",title:"SwitchActions reference",description:"`SwitchActions` is an object containing methods for generating actions specific to switch-based navigators. Its methods expand upon the actions available in [`NavigationActions`](navigation-actions.md).",source:"@site/versioned_docs/version-3.x/switch-actions.md",permalink:"/docs/3.x/switch-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/switch-actions.md",version:"3.x",sidebar_label:"SwitchActions",sidebar:"version-3.x-docs",previous:{title:"StackActions reference",permalink:"/docs/3.x/stack-actions"},next:{title:"DrawerActions reference",permalink:"/docs/3.x/drawer-actions"}},s=[{value:"jumpTo",id:"jumpto",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"SwitchActions")," is an object containing methods for generating actions specific to switch-based navigators. Its methods expand upon the actions available in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/3.x/navigation-actions"}),Object(o.b)("inlineCode",{parentName:"a"},"NavigationActions")),"."),Object(o.b)("p",null,"The following actions are supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#jumpto"}),"JumpTo")," - Jump to a route in the navigator")),Object(o.b)("h3",{id:"jumpto"},"jumpTo"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"jumpTo")," action can be used to jump to an existing route in the switch navigator."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"routeName")," - ",Object(o.b)("em",{parentName:"li"},"string")," - required - ",Object(o.b)("inlineCode",{parentName:"li"},"routeName")," of the route to jump to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," - ",Object(o.b)("em",{parentName:"li"},"string")," - optional - If set, the action will be scoped to the switch-based navigator with the given key.")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { SwitchActions } from 'react-navigation';\n\nthis.props.navigation.dispatch(SwitchActions.jumpTo({ routeName }));\n")))}l.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||o;return n?i.a.createElement(d,c({ref:t},p,{components:n})):i.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);