(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{397:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(9),o=(a(0),a(465)),r={id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},b={id:"version-5.x/material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-5.x/material-bottom-tab-navigator.md",permalink:"/docs/material-bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/material-bottom-tab-navigator.md",version:"5.x",sidebar_label:"createMaterialBottomTabNavigator",sidebar:"version-5.x/docs",previous:{title:"createBottomTabNavigator",permalink:"/docs/bottom-tab-navigator"},next:{title:"createMaterialTopTabNavigator",permalink:"/docs/material-top-tab-navigator"}},c=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",children:[]}],l={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused."),Object(o.b)("p",null,"This wraps the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"}),Object(o.b)("inlineCode",{parentName:"a"},"BottomNavigation"))," component from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnativepaper.com"}),Object(o.b)("inlineCode",{parentName:"a"},"react-native-paper")),". If you ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/getting-started.html"}),"configure the Babel plugin"),", it won't include the whole ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle."),Object(o.b)("img",{src:"/docs/assets/navigators/tabs/material-bottom-tabs.gif",style:{width:"420px",maxWidth:"100%",margin:"16px 0"}}),Object(o.b)("p",null,"To use this navigator, ensure that you have ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/getting-started"}),Object(o.b)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/master/packages/material-bottom-tabs"}),Object(o.b)("inlineCode",{parentName:"a"},"@react-navigation/material-bottom-tabs")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install @react-navigation/material-bottom-tabs react-native-paper\n")),Object(o.b)("p",null,"This API also requires that you install ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo, it will just work out of the box. Otherwise, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oblador/react-native-vector-icons#installation"}),"follow these installation instructions"),"."),Object(o.b)("p",null,"To use this tab navigator, import it from ",Object(o.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs")),Object(o.b)("h2",{id:"api-definition"},"API Definition"),Object(o.b)("p",null,"To use this tab navigator, import it from ",Object(o.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs"),":"),Object(o.b)("samp",{id:"material-tab-based-navigation-minimal"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/tab-based-navigation"}),"Tab Navigation"))),Object(o.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(o.b)("p",null,"The route configs object is a mapping from route name to a route config."),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),Object(o.b)("h4",{id:"initialroutename"},Object(o.b)("inlineCode",{parentName:"h4"},"initialRouteName")),Object(o.b)("p",null,"The name of the route to render on first load of the navigator."),Object(o.b)("h4",{id:"screenoptions"},Object(o.b)("inlineCode",{parentName:"h4"},"screenOptions")),Object(o.b)("p",null,"Default options to use for the screens in the navigator."),Object(o.b)("h4",{id:"backbehavior"},Object(o.b)("inlineCode",{parentName:"h4"},"backBehavior")),Object(o.b)("p",null,"Behavior of back button handling."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none")," to not handle back button")),Object(o.b)("h4",{id:"shifting"},Object(o.b)("inlineCode",{parentName:"h4"},"shifting")),Object(o.b)("p",null,"Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label. By default, this is ",Object(o.b)("inlineCode",{parentName:"p"},"true")," when you have more than 3 tabs."),Object(o.b)("h4",{id:"labeled"},Object(o.b)("inlineCode",{parentName:"h4"},"labeled")),Object(o.b)("p",null,"Whether to show labels in tabs. When ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", only icons will be displayed."),Object(o.b)("h4",{id:"activecolor"},Object(o.b)("inlineCode",{parentName:"h4"},"activeColor")),Object(o.b)("p",null,"Custom color for icon and label in the active tab."),Object(o.b)("h4",{id:"inactivecolor"},Object(o.b)("inlineCode",{parentName:"h4"},"inactiveColor")),Object(o.b)("p",null,"Custom color for icon and label in the inactive tab."),Object(o.b)("h4",{id:"barstyle"},Object(o.b)("inlineCode",{parentName:"h4"},"barStyle")),Object(o.b)("p",null,"Style for the bottom navigation bar. You can set a bottom padding here if you have a translucent navigation bar on Android: ",Object(o.b)("inlineCode",{parentName:"p"},"barStyle={{ paddingBottom: 48 }}"),"."),Object(o.b)("p",null,"Example:"),Object(o.b)("samp",{id:"material-bottom-tab-styled"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ backgroundColor: \'#694fad\' }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"options")," prop can be used to configure individual screens inside the navigator. Supported options are:"),Object(o.b)("h4",{id:"title"},Object(o.b)("inlineCode",{parentName:"h4"},"title")),Object(o.b)("p",null,"Generic title that can be used as a fallback for ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(o.b)("h4",{id:"tabbaricon"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(o.b)("p",null,"Function that given ",Object(o.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),Object(o.b)("h4",{id:"tabbarcolor"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarColor")),Object(o.b)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",Object(o.b)("inlineCode",{parentName:"p"},"shifting")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h4",{id:"tabbarlabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(o.b)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",Object(o.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(o.b)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),Object(o.b)("h4",{id:"tabbarbadge"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarBadge")),Object(o.b)("p",null,"Badge to show on the tab icon, can be ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to show a dot, ",Object(o.b)("inlineCode",{parentName:"p"},"string")," or ",Object(o.b)("inlineCode",{parentName:"p"},"number")," to show text."),Object(o.b)("h4",{id:"tabbaraccessibilitylabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(o.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(o.b)("h4",{id:"tabbartestid"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(o.b)("p",null,"ID to locate this tab button in tests."),Object(o.b)("h3",{id:"events"},"Events"),Object(o.b)("p",null,"The navigator can fire events on certain actions. Supported events are:"),Object(o.b)("h4",{id:"tabpress"},Object(o.b)("inlineCode",{parentName:"h4"},"tabPress")),Object(o.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),Object(o.b)("li",{parentName:"ul"},"If the tab is already focused:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, scroll to top is performed by ",Object(o.b)("inlineCode",{parentName:"li"},"useScrollToTop")),Object(o.b)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",Object(o.b)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),Object(o.b)("p",null,"To prevent the default behavior, you can call ",Object(o.b)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),Object(o.b)("samp",{id:"material-bottom-tab-prevent-default"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', e => {\n    // Prevent default behavior\n\n    e.preventDefault();\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(o.b)("h3",{id:"helpers"},"Helpers"),Object(o.b)("p",null,"The tab navigator adds the following methods to the navigation prop:"),Object(o.b)("h4",{id:"jumpto"},Object(o.b)("inlineCode",{parentName:"h4"},"jumpTo")),Object(o.b)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," - ",Object(o.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - ",Object(o.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(o.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(o.b)("samp",{id:"material-tab-jump-to"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("samp",{id:"material-bottom-tab-example"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\nimport { MaterialCommunityIcons } from \'react-native-vector-icons\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      activeColor="#e91e63"\n      labelStyle={{ fontSize: 12 }}\n      style={{ backgroundColor: \'tomato\' }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="home" color={color} size={size} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={size} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color, size }) => (\n            <MaterialCommunityIcons name="account" color={color} size={size} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')),Object(o.b)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",Object(o.b)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),Object(o.b)("p",null,"You can use the theming support in ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/getting-started.html"}),Object(o.b)("inlineCode",{parentName:"a"},"Provider")," from ",Object(o.b)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/theming.html"}),"instructions on ",Object(o.b)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}p.isMDXComponent=!0},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,d=s["".concat(r,".").concat(u)]||s[u]||m[u]||o;return a?i.a.createElement(d,b({ref:t},l,{components:a})):i.a.createElement(d,b({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);