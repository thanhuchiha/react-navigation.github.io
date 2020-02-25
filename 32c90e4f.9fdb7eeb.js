(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),i=(n(0),n(465)),r={id:"custom-navigators",title:"Custom navigators",sidebar_label:"Custom navigators"},c={id:"version-3.x/custom-navigators",title:"Custom navigators",description:"A navigator is any React component that has a [router](https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/StackRouter.js) on it, to define the navigation behavior. Each navigator is given a `navigation` prop, which allows the parent to control the navigation state.",source:"@site/versioned_docs/version-3.x/custom-navigators.md",permalink:"/docs/3.x/custom-navigators",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/custom-navigators.md",version:"3.x",sidebar_label:"Custom navigators",sidebar:"version-3.x-docs",previous:{title:"Routers",permalink:"/docs/3.x/routers"},next:{title:"Custom routers",permalink:"/docs/3.x/custom-routers"}},s=[{value:"Extending Navigators",id:"extending-navigators",children:[]},{value:"Navigator Navigation Prop",id:"navigator-navigation-prop",children:[{value:"Navigation State",id:"navigation-state",children:[]},{value:"Navigation Dispatchers",id:"navigation-dispatchers",children:[]}]},{value:"API for building custom navigators",id:"api-for-building-custom-navigators",children:[{value:"<code>createNavigator</code>",id:"createnavigator",children:[]},{value:"Scene Descriptors",id:"scene-descriptors",children:[]}]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A navigator is any React component that has a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation-core/blob/master/src/routers/StackRouter.js"}),"router")," on it, to define the navigation behavior. Each navigator is given a ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop, which allows the parent to control the navigation state."),Object(i.b)("h2",{id:"extending-navigators"},"Extending Navigators"),Object(i.b)("p",null,"It is possible to take an existing Navigator and extend its behavior, using the following approach:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = MyStack.router;\n  render() {\n    const { navigation } = this.props;\n\n    return <MyStack navigation={navigation} />;\n  }\n}\n")),Object(i.b)("p",null,"Now it is possible to render additional things, observe the navigation prop, and override behavior of the router:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const MyStack = createStackNavigator({ ... });\n\nclass CustomNavigator extends React.Component {\n  static router = {\n    ...MyStack.router,\n    getStateForAction: (action, lastState) => {\n      // check for custom actions and return a different navigation state.\n      return MyStack.router.getStateForAction(action, lastState);\n    },\n  };\n  componentDidUpdate(lastProps) {\n    // Navigation state has changed from lastProps.navigation.state to this.props.navigation.state\n  }\n  render() {\n    const { navigation } = this.props;\n\n    return (\n      <View>\n        <MyStack navigation={navigation} />\n        {...}\n      </View>\n    );\n  }\n}\n")),Object(i.b)("h2",{id:"navigator-navigation-prop"},"Navigator Navigation Prop"),Object(i.b)("p",null,"The navigation prop passed down to a navigator only includes ",Object(i.b)("inlineCode",{parentName:"p"},"state"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"addListener"),". This is the current state of the navigator, and an event channel to send action requests."),Object(i.b)("p",null,"All navigators are controlled components: they always display what is coming in through ",Object(i.b)("inlineCode",{parentName:"p"},"props.navigation.state"),", and their only way to change the state is to send actions into ",Object(i.b)("inlineCode",{parentName:"p"},"props.navigation.dispatch"),"."),Object(i.b)("p",null,"Navigators can specify custom behavior to parent navigators by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/custom-routers"}),"customizing their router"),". For example, a navigator is able to specify when actions should be blocked by returning null from ",Object(i.b)("inlineCode",{parentName:"p"},"router.getStateForAction"),". Or a navigator can specify custom URI handling by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"router.getActionForPathAndParams")," to output a relevant navigation action, and handling that action in ",Object(i.b)("inlineCode",{parentName:"p"},"router.getStateForAction"),"."),Object(i.b)("h3",{id:"navigation-state"},"Navigation State"),Object(i.b)("p",null,"The navigation state that is passed into a navigator's ",Object(i.b)("inlineCode",{parentName:"p"},"props.navigation.state")," has the following structure:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"{\n  index: 1, // identifies which route in the routes array is active\n  routes: [\n    {\n      // Each route needs a name, which routers will use to associate each route\n      // with a react component\n      routeName: 'MyRouteName',\n\n      // A unique id for this route, used to keep order in the routes array:\n      key: 'myroute-123',\n\n      // Routes can have any additional data. The included routers have `params`\n      ...customRouteData,\n    },\n    ...moreRoutes,\n  ]\n}\n")),Object(i.b)("h3",{id:"navigation-dispatchers"},"Navigation Dispatchers"),Object(i.b)("p",null,"A navigator can dispatch navigation actions, such as 'Go to a URI', 'Go back'."),Object(i.b)("p",null,"The dispatcher will return ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the action was successfully handled, otherwise ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h2",{id:"api-for-building-custom-navigators"},"API for building custom navigators"),Object(i.b)("p",null,"To help developers implement custom navigators, the following utilities are provided with React Navigation:"),Object(i.b)("h3",{id:"createnavigator"},Object(i.b)("inlineCode",{parentName:"h3"},"createNavigator")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: The ",Object(i.b)("inlineCode",{parentName:"p"},"createNavigator")," API has changed in version 2. The old doc for v1 can be accessed here: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v1.reactnavigation.org/docs/custom-navigators.html"}),"https://v1.reactnavigation.org/docs/custom-navigators.html"))),Object(i.b)("p",null,"This utility combines a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/routers"}),"router")," and a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/3.x/navigation-views"}),"navigation view")," together in a standard way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { createNavigator } from "react-navigation";\n\nconst AppNavigator = createNavigator(NavigationView, router, navigationConfig);\n')),Object(i.b)("p",null,"The new ",Object(i.b)("inlineCode",{parentName:"p"},"AppNavigator")," can be rendered as such:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<AppNavigator\n  navigation={{ state, dispatch, addListener }}\n  screenProps={...}\n/>\n")),Object(i.b)("p",null,"Then the view will be rendered in the following way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<NavigationView\n  screenProps={screenProps}\n  navigation={navigation}\n  navigationConfig={navigationConfig}\n  descriptors={descriptors}\n/>\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop is the same navigation prop that was passed into the navigator."),Object(i.b)("p",null,"Both ",Object(i.b)("inlineCode",{parentName:"p"},"navigationConfig")," and ",Object(i.b)("inlineCode",{parentName:"p"},"screenProps")," are simply passed through, as defined above."),Object(i.b)("p",null,"Most information about child screens comes through the ",Object(i.b)("inlineCode",{parentName:"p"},"descriptors")," prop. The descriptors is an object map of route keys to scene descriptors. There is one descriptor for each child route."),Object(i.b)("h3",{id:"scene-descriptors"},"Scene Descriptors"),Object(i.b)("p",null,"A scene descriptor has the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getComponent"),", a function that returns the component for the screen"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options"),", the flattened navigationOptions for the route"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation"),", the child navigation prop, including actions and the route ",Object(i.b)("inlineCode",{parentName:"li"},"state")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"state"),", the navigation state for the child screen (a shortcut for ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.state"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key"),", the key of the route (a shortcut for ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.state.key"),")")))}l.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,g=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return n?o.a.createElement(g,c({ref:t},p,{components:n})):o.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);