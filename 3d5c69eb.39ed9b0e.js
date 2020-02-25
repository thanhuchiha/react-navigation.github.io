(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),o=n(9),i=(n(0),n(465)),r={id:"hello-react-navigation",title:"Hello React Navigation",sidebar_label:"Hello React Navigation"},c={id:"version-5.x/hello-react-navigation",title:"Hello React Navigation",description:"In a web browser, you can link to different pages using an anchor (`<a>`) tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.",source:"@site/versioned_docs/version-5.x/hello-react-navigation.md",permalink:"/docs/hello-react-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/hello-react-navigation.md",version:"5.x",sidebar_label:"Hello React Navigation",sidebar:"version-5.x/docs",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Moving between screens",permalink:"/docs/navigating"}},s=[{value:"Installing the stack navigator library",id:"installing-the-stack-navigator-library",children:[{value:"Creating a stack navigator",id:"creating-a-stack-navigator",children:[]},{value:"Configuring the navigator",id:"configuring-the-navigator",children:[]},{value:"Specifying options",id:"specifying-options",children:[]},{value:"Passing additional props",id:"passing-additional-props",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]},{value:"Summary",id:"summary",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In a web browser, you can link to different pages using an anchor (",Object(i.b)("inlineCode",{parentName:"p"},"<a>"),") tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story."),Object(i.b)("p",null,"React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack."),Object(i.b)("p",null,"Lets start by demonstrating the most common navigator, ",Object(i.b)("inlineCode",{parentName:"p"},"createStackNavigator"),"."),Object(i.b)("h2",{id:"installing-the-stack-navigator-library"},"Installing the stack navigator library"),Object(i.b)("p",null,"The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the stack navigator, we need to install ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-navigation/react-navigation/tree/master/packages/stack"}),Object(i.b)("inlineCode",{parentName:"a"},"@react-navigation/stack"))," :"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install @react-navigation/stack\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\ud83d\udca1 ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/stack")," depends on ",Object(i.b)("inlineCode",{parentName:"p"},"@react-native-community/masked-view")," and the other libraries that we installed in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started"}),"Getting started"),". If you haven't installed those yet, head over to that page and follow the installation instructions.")),Object(i.b)("h3",{id:"creating-a-stack-navigator"},"Creating a stack navigator"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"createStackNavigator")," is a function that returns an object containing 2 properties: ",Object(i.b)("inlineCode",{parentName:"p"},"Screen")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Navigator"),". Both of them are React components used for configuring the navigator. The ",Object(i.b)("inlineCode",{parentName:"p"},"Navigator")," should contain ",Object(i.b)("inlineCode",{parentName:"p"},"Screen")," elements as its children to define the configuration for routes."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NavigationContainer")," is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from ",Object(i.b)("inlineCode",{parentName:"p"},"App.js"),"."),Object(i.b)("samp",{id:"hello-react-navigation"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// In App.js in a new project\n\nimport * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Home Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nexport default App;\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/navigators/stack/basic_stack_nav.png",alt:"Basic app using stack navigator"}))),Object(i.b)("p",null,"If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your ",Object(i.b)("inlineCode",{parentName:"p"},"HomeScreen")," component (shown above). The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The casing of the route name doesn't matter -- you can use lowercase ",Object(i.b)("inlineCode",{parentName:"p"},"home")," or capitalized ",Object(i.b)("inlineCode",{parentName:"p"},"Home"),", it's up to you. We prefer capitalizing our route names.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The only required configuration for a screen is the ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"component")," props. You can read more about the other options available in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/stack-navigator"}),"stack navigator reference"),".")),Object(i.b)("h3",{id:"configuring-the-navigator"},"Configuring the navigator"),Object(i.b)("p",null,"All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration."),Object(i.b)("p",null,"Let's add a second screen to our stack navigator and configure the ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," screen to render first:"),Object(i.b)("samp",{id:"hello-react-navigation-full"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function DetailsScreen() {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text>Details Screen</Text>\n    </View>\n  );\n}\n\nconst Stack = createStackNavigator();\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName="Home">\n        <Stack.Screen name="Home" component={HomeScreen} />\n        <Stack.Screen name="Details" component={DetailsScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),Object(i.b)("p",null,"Now our stack has two ",Object(i.b)("em",{parentName:"p"},"routes"),", a ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," route and a ",Object(i.b)("inlineCode",{parentName:"p"},"Details")," route. A route can be specified by using the ",Object(i.b)("inlineCode",{parentName:"p"},"Screen")," component. The ",Object(i.b)("inlineCode",{parentName:"p"},"Screen")," component accepts a ",Object(i.b)("inlineCode",{parentName:"p"},"name")," prop which corresponds to the name of the route we will use to navigate, and a ",Object(i.b)("inlineCode",{parentName:"p"},"component")," prop which corresponds to the component it'll render."),Object(i.b)("p",null,"Here, the ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," route corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"HomeScreen")," component, and the ",Object(i.b)("inlineCode",{parentName:"p"},"Details")," route corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"DetailsScreen")," component. The initial route for the stack is the ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," route. Try changing it to ",Object(i.b)("inlineCode",{parentName:"p"},"Details")," and reload the app (React Native's Fast Refresh won't update changes from ",Object(i.b)("inlineCode",{parentName:"p"},"initialRouteName"),", as you might expect), notice that you will now see the ",Object(i.b)("inlineCode",{parentName:"p"},"Details")," screen. Then change it back to ",Object(i.b)("inlineCode",{parentName:"p"},"Home")," and reload once more."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: The ",Object(i.b)("inlineCode",{parentName:"p"},"component")," prop accepts component, not a render function. Don't pass a inline function (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"component={() => <HomeScreen />}"),"), or your component will unmount and remount losing all state when the parent component re-renders. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#passing-additional-props"}),"Passing additional props")," for alternatives.")),Object(i.b)("h3",{id:"specifying-options"},"Specifying options"),Object(i.b)("p",null,"Each screen in the navigator can specify some options for the navigator, such as the title to render in the header. These options can be passed in the ",Object(i.b)("inlineCode",{parentName:"p"},"options")," prop for each screen component:"),Object(i.b)("samp",{id:"hello-react-navigation-with-options"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<Stack.Screen\n  name=\"Home\"\n  component={HomeScreen}\n  options={{ title: 'Overview' }}\n/>\n")),Object(i.b)("p",null,"Sometimes we will want to specify the same options for all of the screens in the navigator. For that, we can pass a ",Object(i.b)("inlineCode",{parentName:"p"},"screenOptions")," prop to the navigator."),Object(i.b)("h3",{id:"passing-additional-props"},"Passing additional props"),Object(i.b)("p",null,"Sometimes we might want to pass additional props to a screen. We can do that with 2 approaches:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),"React context")," and wrap the navigator with a context provider to pass data to the screens (recommended).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use a render callback for the screen instead of specifying a ",Object(i.b)("inlineCode",{parentName:"p"},"component")," prop:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'<Stack.Screen name="Home">\n  {props => <HomeScreen {...props} extraData={someData} />}\n</Stack.Screen>\n')))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactmemo"}),Object(i.b)("inlineCode",{parentName:"a"},"React.memo"))," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"}),Object(i.b)("inlineCode",{parentName:"a"},"React.PureComponent"))," for your screen components to avoid performance issues.")),Object(i.b)("h2",{id:"whats-next"},"What's next?"),Object(i.b)("p",null,'The natural question at this point is: "how do I go from the ',Object(i.b)("inlineCode",{parentName:"p"},"Home")," route to the ",Object(i.b)("inlineCode",{parentName:"p"},"Details"),' route?". That is covered in the ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/navigating"}),"next section"),"."),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Stack.Navigator")," is a component that takes route configuration as it's children with additional props for configuration and renders our content."),Object(i.b)("li",{parentName:"ul"},"Each ",Object(i.b)("inlineCode",{parentName:"li"},"Stack.Screen")," component take a ",Object(i.b)("inlineCode",{parentName:"li"},"name")," prop which refers to the name of the route and ",Object(i.b)("inlineCode",{parentName:"li"},"component")," prop which specifies the component to render for the route. These are the 2 required props."),Object(i.b)("li",{parentName:"ul"},"To specify what the initial route in a stack is, provide an ",Object(i.b)("inlineCode",{parentName:"li"},"initialRouteName")," as the prop for the navigator."),Object(i.b)("li",{parentName:"ul"},"To specify screen-specific options, we can pass an ",Object(i.b)("inlineCode",{parentName:"li"},"options")," prop to ",Object(i.b)("inlineCode",{parentName:"li"},"Stack.Screen"),", and for common options, we can pass ",Object(i.b)("inlineCode",{parentName:"li"},"screenOptions")," to ",Object(i.b)("inlineCode",{parentName:"li"},"Stack.Navigator"))))}l.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return n?o.a.createElement(d,c({ref:t},p,{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);