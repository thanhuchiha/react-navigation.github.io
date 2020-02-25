(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{279:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(1),i=a(9),r=(a(0),a(465)),o={id:"community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",sidebar_label:"Community Navigators and Libraries"},c={id:"version-5.x/community-libraries-and-navigators",title:"Community-developed Navigators and Libraries",description:"> Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.",source:"@site/versioned_docs/version-5.x/community-libraries-and-navigators.md",permalink:"/docs/community-libraries-and-navigators",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/community-libraries-and-navigators.md",version:"5.x",sidebar_label:"Community Navigators and Libraries",sidebar:"version-5.x/docs",previous:{title:"Supported React Native versions",permalink:"/docs/supported-react-native-versions"},next:{title:"More Resources",permalink:"/docs/more-resources"}},s=[{value:"Fluid Transitions",id:"fluid-transitions",children:[]},{value:"react-navigation-collapsible",id:"react-navigation-collapsible",children:[]},{value:"react-native-screens",id:"react-native-screens",children:[]},{value:"react-navigation-header-buttons",id:"react-navigation-header-buttons",children:[]},{value:"react-navigation-props-mapper",id:"react-navigation-props-mapper",children:[]},{value:"react-navigation-backhandler",id:"react-navigation-backhandler",children:[]},{value:"react-native-header-scroll-view",id:"react-native-header-scroll-view",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Libraries listed in this guide may not have been updated to work with the latest version of React Navigation. Please refer to the library's documentation to see which version of React Navigation it supports.")),Object(r.b)("h1",{id:"navigators"},"Navigators"),Object(r.b)("h2",{id:"fluid-transitions"},"Fluid Transitions"),Object(r.b)("p",null,"Fluid Transitions is a library that provides Shared Element Transitions during navigation between screens using react-navigation."),Object(r.b)("p",null,"A Shared Element Transition is the visualization of an element in one screen being transformed into a corresponding element in another screen during the navigation transition."),Object(r.b)("p",null,"The library implements a custom navigator called ",Object(r.b)("inlineCode",{parentName:"p"},"FluidNavigator")," that makes all this and more possible."),Object(r.b)("h4",{id:"links"},"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/fram-x/FluidTransitions"}),"github.com/fram-x/FluidTransitions")),Object(r.b)("h1",{id:"libraries"},"Libraries"),Object(r.b)("h2",{id:"react-navigation-collapsible"},"react-navigation-collapsible"),Object(r.b)("p",null,"react-navigation-collapsible is a library and a ",Object(r.b)("inlineCode",{parentName:"p"},"Higher Order Component")," that adjusts your screen options and makes your screen header collapsible."),Object(r.b)("p",null,"Since react-navigation's header is designed as ",Object(r.b)("inlineCode",{parentName:"p"},"Animated")," component, you can animate the header by passing ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.Value")," from your ",Object(r.b)("inlineCode",{parentName:"p"},"ScrollView")," or ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," to the header."),Object(r.b)("h4",{id:"links-1"},"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/benevbright/react-navigation-collapsible"}),"github.com/benevbright/react-navigation-collapsible")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://snack.expo.io/@benevbright/react-navigation-collapsible"}),"Demo on Snack")),Object(r.b)("h2",{id:"react-native-screens"},"react-native-screens"),Object(r.b)("p",null,"This project aims to expose native navigation container components to React Native and React Navigation can integrate with it since version 2.14.0. Using ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-screens")," brings several benefits, such as support for the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.cnet.com/how-to/how-to-use-reachability-on-iphone-6-6-plus/"}),'"reachability feature"')," on iOS, and improved memory consumption on both platforms."),Object(r.b)("h4",{id:"links-2"},"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kmagiera/react-native-screens"}),"github.com/kmagiera/react-native-screens")),Object(r.b)("h2",{id:"react-navigation-header-buttons"},"react-navigation-header-buttons"),Object(r.b)("p",null,"Helps you to render buttons in the navigation bar and handle the styling so you don't have to. It tries to mimic the appearance of native navbar buttons and attempts to offer a simple interface for you to interact with."),Object(r.b)("h4",{id:"links-3"},"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-header-buttons"}),"github.com/vonovak/react-navigation-header-buttons")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/@vonovak/navbar-buttons-demo"}),"Demo on expo")),Object(r.b)("h2",{id:"react-navigation-props-mapper"},"react-navigation-props-mapper"),Object(r.b)("p",null,"Provides simple HOCs that map react-navigation props to your screen components directly - ie. instead of ",Object(r.b)("inlineCode",{parentName:"p"},"const user = this.props.route.params.activeUser"),", you'd write ",Object(r.b)("inlineCode",{parentName:"p"},"const user = this.props.activeUser"),"."),Object(r.b)("h4",{id:"links-4"},"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-props-mapper"}),"github.com/vonovak/react-navigation-props-mapper")),Object(r.b)("h2",{id:"react-navigation-backhandler"},"react-navigation-backhandler"),Object(r.b)("p",null,"Easily handle Android back button behavior with React-Navigation with a component based API."),Object(r.b)("h4",{id:"links-5"},"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/vonovak/react-navigation-backhandler"}),"github.com/vonovak/react-navigation-backhandler")),Object(r.b)("h2",{id:"react-native-header-scroll-view"},"react-native-header-scroll-view"),Object(r.b)("p",null,"This component implements ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://react-navigation.canny.io/feature-requests/p/ios-11-large-header-and-growshrink-on-scroll"}),"iOS large header with grow/shrink on scroll"),", made by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jonsamp"}),"@jonsamp"),". Note that it doesn't handle header animation between screens, it only handles animating the header title on scroll."),Object(r.b)("p",null,"To use this component, we'd want to disable the built-in header. There are 2 ways to disable the header in React Navigation:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Disable the default header for one screen:")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"static navigationOptions = {\n  headerShown: false\n};\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Disable header globally in ",Object(r.b)("inlineCode",{parentName:"li"},"createStackNavigator"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const Home = createStackNavigator(\n  {\n    ExampleScreen1,\n    ExampleScreen1,\n  },\n  {\n    headerMode: 'none',\n  }\n);\n")),Object(r.b)("h4",{id:"links-6"},"Links"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/jonsamp/react-native-header-scroll-view"}),"https://github.com/jonsamp/react-native-header-scroll-view")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://expo.io/@thomaswangio/vax-now"}),"Demo on expo via VaxNow")))}l.isMDXComponent=!0},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),l=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=l(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return a?i.a.createElement(h,c({ref:t},b,{components:a})):i.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<r;b++)o[b]=a[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);