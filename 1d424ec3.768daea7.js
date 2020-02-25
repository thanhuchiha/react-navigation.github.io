(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(9),r=(a(0),a(465)),o={id:"material-top-tab-navigator",title:"createMaterialTopTabNavigator",sidebar_label:"createMaterialTopTabNavigator"},b={id:"version-3.x/material-top-tab-navigator",title:"createMaterialTopTabNavigator",description:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the route or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.",source:"@site/versioned_docs/version-3.x/material-top-tab-navigator.md",permalink:"/docs/3.x/material-top-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/material-top-tab-navigator.md",version:"3.x",sidebar_label:"createMaterialTopTabNavigator",sidebar:"version-3.x-docs",previous:{title:"createMaterialBottomTabNavigator",permalink:"/docs/3.x/material-bottom-tab-navigator"},next:{title:"NavigationActions reference",permalink:"/docs/3.x/navigation-actions"}},l=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"TabNavigatorConfig",id:"tabnavigatorconfig",children:[]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]}],c={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the route or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);\n")),Object(r.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(r.b)("p",null,"The route configs object is a mapping from route name to a route config."),Object(r.b)("h2",{id:"tabnavigatorconfig"},"TabNavigatorConfig"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigationOptions")," - Navigation options for the navigator itself, to configure a parent navigator"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultNavigationOptions")," - Default navigation options to use for screens"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"backBehavior")," - ",Object(r.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab, ",Object(r.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab, ",Object(r.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab, or ",Object(r.b)("inlineCode",{parentName:"li"},"none"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tabBarPosition")," - Position of the tab bar, can be ",Object(r.b)("inlineCode",{parentName:"li"},"'top'")," or ",Object(r.b)("inlineCode",{parentName:"li"},"'bottom'"),", default is ",Object(r.b)("inlineCode",{parentName:"li"},"top"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"swipeEnabled")," - Whether to allow swiping between tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"animationEnabled")," - Whether to animate when changing tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lazy")," - Defaults to ",Object(r.b)("inlineCode",{parentName:"li"},"false"),". If ",Object(r.b)("inlineCode",{parentName:"li"},"true"),", tabs are rendered only when they are made active or on peek swipe. When ",Object(r.b)("inlineCode",{parentName:"li"},"false"),", all tabs are rendered immediately."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"optimizationsEnabled")," - Whether to wrap scenes into ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/react-navigation-tabs/blob/master/src/views/ResourceSavingScene.js"}),Object(r.b)("inlineCode",{parentName:"a"},"<ResourceSavingScene />"))," to move the scene out of the screen once it's unfocused, it improves memory usage."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialLayout")," - Optional object containing the initial ",Object(r.b)("inlineCode",{parentName:"li"},"height")," and ",Object(r.b)("inlineCode",{parentName:"li"},"width"),", can be passed to prevent the one frame delay in ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-tab-view#avoid-one-frame-delay"}),"react-native-tab-view")," rendering."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tabBarComponent")," - Optional, override the component to use as the tab bar."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tabBarOptions")," - An object with the following properties:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is false."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"upperCaseLabel")," - Whether to make label uppercase, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity for pressed tab (iOS and Android < 5.0 only)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scrollEnabled")," - Whether to enable scrollable tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"indicatorStyle")," - Style object for the tab indicator (line at the bottom of the tab)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"iconStyle")," - Style object for the tab icon."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"renderIndicator")," - Function which takes an object with the current route and returns a custom React Element to be used as a tab indicator.")))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"tabBarOptions: {\n  labelStyle: {\n    fontSize: 12,\n  },\n  tabStyle: {\n    width: 100,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),Object(r.b)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},Object(r.b)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),Object(r.b)("h4",{id:"title"},Object(r.b)("inlineCode",{parentName:"h4"},"title")),Object(r.b)("p",null,"Generic title that can be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(r.b)("h4",{id:"swipeenabled"},Object(r.b)("inlineCode",{parentName:"h4"},"swipeEnabled")),Object(r.b)("p",null,"True or false to enable or disable swiping between tabs, if not set then defaults to TabNavigatorConfig option swipeEnabled."),Object(r.b)("h4",{id:"tabbaricon"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(r.b)("p",null,"React Element or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",Object(r.b)("inlineCode",{parentName:"p"},"horizontal")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),Object(r.b)("h4",{id:"tabbarlabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(r.b)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",Object(r.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),Object(r.b)("h4",{id:"tabbaraccessibilitylabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(r.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(r.b)("h4",{id:"tabbartestid"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(r.b)("p",null,"ID to locate this tab button in tests."),Object(r.b)("h4",{id:"tabbaronpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarOnPress")),Object(r.b)("p",null,"Callback to handle press events; the argument is an object containing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),Object(r.b)("p",null,"Useful for adding a custom logic before the transition to the next scene (the\ntapped one) starts."),Object(r.b)("h4",{id:"tabbaronlongpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarOnLongPress")),Object(r.b)("p",null,"Callback to handle long press events; the argument is an object containing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")))}p.isMDXComponent=!0},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||r;return a?i.a.createElement(m,b({ref:t},c,{components:a})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);