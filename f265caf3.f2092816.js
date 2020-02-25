(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{444:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),i=(n(0),n(465)),r={id:"navigation-options-resolution",title:"Navigation options resolution",sidebar_label:"Navigation options resolution"},c={id:"version-2.x/navigation-options-resolution",title:"Navigation options resolution",description:"Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the [Configuring the header bar](headers.md) section of the fundamentals documentation we explain the basics of how this works.",source:"@site/versioned_docs/version-2.x/navigation-options-resolution.md",permalink:"/docs/2.x/navigation-options-resolution",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/navigation-options-resolution.md",version:"2.x",sidebar_label:"Navigation options resolution",sidebar:"version-2.x-docs",previous:{title:"Different status bar configuration based on route",permalink:"/docs/2.x/status-bar"},next:{title:"Custom Android back button behavior",permalink:"/docs/2.x/custom-android-back-button-handling"}},s=[{value:"<strong>Caution</strong>: the navigationOptions property vs configuration",id:"caution-the-navigationoptions-property-vs-configuration",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each screen can configure various aspects about how it gets presented in the navigator that renders it. In the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.x/headers"}),"Configuring the header bar")," section of the fundamentals documentation we explain the basics of how this works."),Object(i.b)("p",null,"In this document we'll explain how this works when there are multiple navigators. It's important to understand this so that you put your ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," in the correct place and can properly configure your navigators. If you put them in the wrong place, at best nothing will happen and at worst something confusing and unexpected will happen. Thankfully, the logic for this could not be any easier to understand:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"You can only modify navigation options for a navigator from one of its screen components. This applies equally to navigators that are nested as screens.")),Object(i.b)("p",null,"Let's take for example a tab navigator that contains a stack in each tab. What happens if we set the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on a screen inside of the stack?"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class A extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Home!',\n  };\n\n  // etc..\n}\n\nclass B extends React.Component {\n  static navigationOptions = {\n    tabBarLabel: 'Settings!',\n  };\n\n  // etc..\n}\n\nconst HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nexport default createBottomTabNavigator({\n  HomeStack,\n  SettingsStack,\n});\n")),Object(i.b)("a",{href:"https://snack.expo.io/@notbrent/nested-navigationoptions-wrong",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"As we mentioned earlier, you can only modify navigation options for a navigator from one of its screen components. ",Object(i.b)("inlineCode",{parentName:"p"},"A")," and ",Object(i.b)("inlineCode",{parentName:"p"},"B")," above are screen components in ",Object(i.b)("inlineCode",{parentName:"p"},"HomeStack")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SettingsStack")," respectively, not in the tab navigator. So the result will be that the ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarLabel")," property is not applied to the tab navigator. We can fix this though!"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const HomeStack = createStackNavigator({ A });\nconst SettingsStack = createStackNavigator({ B });\n\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n\nSettingsStack.navigationOptions = {\n  tabBarLabel: 'Settings!',\n};\n\nexport default createBottomTabNavigator({\n  HomeStack,\n  SettingsStack,\n});\n")),Object(i.b)("a",{href:"https://snack.expo.io/@notbrent/nested-navigationoptions-correct",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(i.b)("p",null,"To understand what is going on here, first recall that in the following example, ",Object(i.b)("inlineCode",{parentName:"p"},"MyComponent")," and ",Object(i.b)("inlineCode",{parentName:"p"},"MyOtherComponent")," are identical:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class MyComponent extends React.Component {\n  static navigationOptions = {\n    title: 'Hello!',\n  };\n  // etc.\n}\n\nclass MyOtherComponent extends React.Component {\n  // etc.\n}\n\nMyOtherComponent.navigationOptions = {\n  title: 'Hello!',\n};\n")),Object(i.b)("p",null,"We also know that ",Object(i.b)("inlineCode",{parentName:"p"},"createStackNavigator")," and related functions return React components. So when we set the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," directly on the ",Object(i.b)("inlineCode",{parentName:"p"},"HomeStack")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SettingsStack")," component, it allows us to control the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," for its parent navigator when its used as a screen component. In this case, the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on our stack components configure the label in the tab navigator that renders the stacks."),Object(i.b)("h2",{id:"caution-the-navigationoptions-property-vs-configuration"},Object(i.b)("strong",{parentName:"h2"},"Caution"),": the navigationOptions property vs configuration"),Object(i.b)("p",null,"Navigators are initialized with ",Object(i.b)("inlineCode",{parentName:"p"},"create*Navigator(routeConfig, navigatorConfig)"),". Inside of ",Object(i.b)("inlineCode",{parentName:"p"},"navigatorConfig")," we can add a ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," property. These ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," are the default options for screens within that navigator (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"headers.html#sharing-common-navigationoptions-across-screens"}),"read more about sharing common navigationOptions"),"), they do not refer to the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," for that navigator ","\u2014"," as we have seen above, we set the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," property directly on the navigator for that use case."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const HomeStack = createStackNavigator({ A }, {\n  // This is the default for screens in the stack, so `A` will\n  // use this title unless it overrides it\n  navigationOptions: {\n    title: 'Welcome'\n  }\n})\n\n// These are the options that are used by the navigator that renders\n// the HomeStack, in our example above this is a tab navigator.\nHomeStack.navigationOptions = {\n  tabBarLabel: 'Home!',\n};\n")),Object(i.b)("p",null,"We understand that overloading the naming here is a little bit confusing. Please ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/rfcs"}),"open a RFC")," if you have a suggestion about how we can make this API easier to learn and work with."),Object(i.b)("h1",{id:"a-stack-contains-a-tab-navigator-and-you-want-to-set-the-title-on-the-stack-header"},"A stack contains a tab navigator and you want to set the title on the stack header"),Object(i.b)("p",null,"Imagine the following configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n")),Object(i.b)("p",null,"If we were to set the ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," with ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"FeedScreen"),", this would not work. This is because the ",Object(i.b)("inlineCode",{parentName:"p"},"AppNavigator")," stack will only look at its immediate children for configuration: ",Object(i.b)("inlineCode",{parentName:"p"},"TabNavigator")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SettingsScreen"),". So we can set the ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"TabNavigator")," instead, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const TabNavigator = createBottomTabNavigator({\n  Feed: FeedScreen,\n  Profile: ProfileScreen,\n});\n\nTabNavigator.navigationOptions = ({ navigation }) => {\n  const { routeName } = navigation.state.routes[navigation.state.index];\n\n  // You can do whatever you like here to pick the title based on the route name\n  const headerTitle = routeName;\n\n  return {\n    headerTitle,\n  };\n};\n")),Object(i.b)("p",null,"Another option is to re-organize your navigators, such that each tab has its own stack. You can then hide the top-level stack's header when the tab screen is focused."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* other routes here */\n});\n\nconst ProfileStack = createStackNavigator({\n  ProfileHome: ProfileScreen,\n  /* other routes here */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileStack,\n});\n\nTabNavigator.navigationOptions = {\n  // Hide the header from AppNavigator stack\n  header: null,\n};\n\nconst AppNavigator = createStackNavigator({\n  Home: TabNavigator,\n  Settings: SettingsScreen,\n});\n")),Object(i.b)("p",null,"Using this configuration, the ",Object(i.b)("inlineCode",{parentName:"p"},"headerTitle")," or ",Object(i.b)("inlineCode",{parentName:"p"},"title")," from ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on ",Object(i.b)("inlineCode",{parentName:"p"},"FeedScreen")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ProfileScreen")," will not determine the title in their headers."),Object(i.b)("p",null,"Additionally, you can push new screens to the feed and profile stacks without hiding the tab bar by adding more routes to those stacks. If you want to push screens on top of the tab bar, then you can add them to the ",Object(i.b)("inlineCode",{parentName:"p"},"AppNavigator")," stack."),Object(i.b)("h1",{id:"a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens"},"A tab navigator contains a stack and you want to hide the tab bar on specific screens"),Object(i.b)("p",null,"Similar to the example above where a stack contains a tab navigator, we can solve this in two ways: add ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," to our tab navigator to set the tab bar to hidden depending on which route is active in the child stack, or we can move the tab navigator inside of the stack."),Object(i.b)("p",null,"Imagine the following configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: TabNavigator,\n});\n")),Object(i.b)("p",null,"If we want to hide the tab bar when we navigate from the feed home to a details screen without shuffling navigators, we cannot set the ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarVisible: false")," configuration in ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on ",Object(i.b)("inlineCode",{parentName:"p"},"DetailsScreen"),", because those options will only apply to the ",Object(i.b)("inlineCode",{parentName:"p"},"FeedStack"),". Instead, we can do the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let tabBarVisible = true;\n  if (navigation.state.index > 0) {\n    tabBarVisible = false;\n  }\n\n  return {\n    tabBarVisible,\n  };\n};\n")),Object(i.b)("p",null,"This will hide the tab bar any time we navigate away from the feed home. We could switch visibility based on route name, but it would be strange to have the tab bar be hidden and then appear again when pushing another route ","\u2014"," it should only be visible when returning to a route where it was previously visible."),Object(i.b)("p",null,"Another option here would be to add another stack navigator as a parent of the tab navigator, and put the details screen there. This is recommended."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route you want to render under the tab bar */\n});\n\nconst TabNavigator = createBottomTabNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Tabs: TabNavigator,\n  Details: DetailsScreen,\n  /* any other route you want to render above the tab bar */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n")),Object(i.b)("h1",{id:"a-drawer-has-a-stack-inside-of-it-and-you-want-to-lock-the-drawer-on-certain-screens"},"A drawer has a stack inside of it and you want to lock the drawer on certain screens"),Object(i.b)("p",null,"This is conceptually identical to having a tab with a stack inside of it (read that above if you have not already), where you want to hide the tab bar on certain screens. The only difference is that rather than using ",Object(i.b)("inlineCode",{parentName:"p"},"tabBarVisible")," you will use ",Object(i.b)("inlineCode",{parentName:"p"},"drawerLockMode"),"."),Object(i.b)("p",null,"Imagine the following configuration:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: DrawerNavigator,\n});\n")),Object(i.b)("p",null,"In order to hide the drawer when we push the details screen to the feed stack, we need to set ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"FeedStack"),". If we were to set ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on the ",Object(i.b)("inlineCode",{parentName:"p"},"DetailsScreen"),", they would be configuring the feed stack (its direct parent) and not the drawer."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  Details: DetailsScreen,\n});\n\nFeedStack.navigationOptions = ({ navigation }) => {\n  let drawerLockMode = 'unlocked';\n  if (navigation.state.index > 0) {\n    drawerLockMode = 'locked-closed';\n  }\n\n  return {\n    drawerLockMode,\n  };\n};\n")),Object(i.b)("p",null,"Another option here would be to add another stack navigator as a parent of the drawer navigator, and put the details screen there. This is recommended."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const FeedStack = createStackNavigator({\n  FeedHome: FeedScreen,\n  /* any other route where you want the drawer to remain available */\n  /* keep in mind that it will conflict with the swipe back gesture on ios */\n});\n\nconst DrawerNavigator = createDrawerNavigator({\n  Feed: FeedStack,\n  Profile: ProfileScreen,\n});\n\nconst HomeStack = createStackNavigator({\n  Drawer: DrawerNavigator,\n  Details: DetailsScreen,\n  /* add routes here where you want the drawer to be locked */\n});\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthScreen,\n  Home: HomeStack,\n});\n")))}b.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),h=a,u=p["".concat(r,".").concat(h)]||p[h]||d[h]||i;return n?o.a.createElement(u,c({ref:t},l,{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);