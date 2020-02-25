(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{280:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),o=(n(0),n(465)),r={id:"headers",title:"Configuring the header bar",sidebar_label:"Configuring the header bar"},c={id:"version-1.x/headers",title:"Configuring the header bar",description:"By now you're probably tired of seeing a blank grey bar on the top of your screen &mdash; you're ready for some [flair](https://memegenerator.net/img/images/600x600/14303485/stan-flair-office-space.jpg). So let's jump in to configuring the header bar.",source:"@site/versioned_docs/version-1.x/headers.md",permalink:"/docs/1.x/headers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-1.x/headers.md",version:"1.x",sidebar_label:"Configuring the header bar",sidebar:"version-1.x/docs",previous:{title:"Passing parameters to routes",permalink:"/docs/1.x/params"},next:{title:"Header buttons",permalink:"/docs/1.x/header-buttons"}},s=[{value:"Setting the header title",id:"setting-the-header-title",children:[]},{value:"Using params in the title",id:"using-params-in-the-title",children:[]},{value:"Updating <code>navigationOptions</code> with <code>setParams</code>",id:"updating-navigationoptions-with-setparams",children:[]},{value:"Adjusting header styles",id:"adjusting-header-styles",children:[]},{value:"Sharing common <code>navigationOptions</code> across screens",id:"sharing-common-navigationoptions-across-screens",children:[]},{value:"Overriding shared <code>navigationOptions</code>",id:"overriding-shared-navigationoptions",children:[]},{value:"Replacing the title with a custom component",id:"replacing-the-title-with-a-custom-component",children:[]},{value:"Additional configuration",id:"additional-configuration",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"By now you're probably tired of seeing a blank grey bar on the top of your screen ","\u2014"," you're ready for some ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://memegenerator.net/img/images/600x600/14303485/stan-flair-office-space.jpg"}),"flair"),". So let's jump in to configuring the header bar."),Object(o.b)("h2",{id:"setting-the-header-title"},"Setting the header title"),Object(o.b)("p",null,"A screen component can have a static property called ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," which is either an object or a function that returns an object that contains various configuration options. The one we use for the header title is ",Object(o.b)("inlineCode",{parentName:"p"},"title"),", as demonstrated in the following example."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n  };\n\n  /* render function, etc */\n}\n\nclass DetailsScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Details',\n  };\n\n  /* render function, etc */\n}\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-title",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"StackNavigator")," uses platform conventions by default, so on iOS the title will be centered and on Android it will be left-aligned.")),Object(o.b)("h2",{id:"using-params-in-the-title"},"Using params in the title"),Object(o.b)("p",null,"In order to use params in the title, we need to make ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," a function that returns a configuration object. It might be tempting to try to use ",Object(o.b)("inlineCode",{parentName:"p"},"this.props")," inside of ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions"),", but because it is a static property of the component, ",Object(o.b)("inlineCode",{parentName:"p"},"this")," does not refer to an instance of the component and therefore no props are available. Instead, if we make ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," a function then React Navigation will call it with an object containing ",Object(o.b)("inlineCode",{parentName:"p"},"{ navigation, navigationOptions, screenProps }")," -- in this case, all we care about is ",Object(o.b)("inlineCode",{parentName:"p"},"navigation"),", which is the same object that is passed to your screen props as ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation"),". You may recall that we can get the params from ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," through ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.state.params"),", and so we do this below to extract a param and use it as a title."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation }) => {\n    const { params } = navigation.state;\n\n    return {\n      title: params ? params.otherParam : 'A Nested Details Screen',\n    }\n  };\n\n  /* render function, etc */\n}\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/using-params-in-title",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("p",null,"The argument that is passed in to the ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," function is an object with the following properties:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation")," - The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.x/navigation-prop"}),"navigation prop")," for the screen, with the screen's route at ",Object(o.b)("inlineCode",{parentName:"li"},"navigation.state"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"screenProps")," - The props passing from above the navigator component"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigationOptions")," - The default or previous options that would be used if new values are not provided")),Object(o.b)("p",null,"We only needed the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop in the above example but you may in some cases want to use ",Object(o.b)("inlineCode",{parentName:"p"},"screenProps")," or ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions"),"."),Object(o.b)("h2",{id:"updating-navigationoptions-with-setparams"},"Updating ",Object(o.b)("inlineCode",{parentName:"h2"},"navigationOptions")," with ",Object(o.b)("inlineCode",{parentName:"h2"},"setParams")),Object(o.b)("p",null,"It's often necessary to update the ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," configuration for the active screen from the mounted screen component itself. We can do this using ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation.setParams")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"  /* Inside of render() */\n  <Button\n    title=\"Update the title\"\n    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}\n  />\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/updating-navigationoptions-with-setparams",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("h2",{id:"adjusting-header-styles"},"Adjusting header styles"),Object(o.b)("p",null,"There are three key properties to use when customizing the style of your header: ",Object(o.b)("inlineCode",{parentName:"p"},"headerStyle"),", ",Object(o.b)("inlineCode",{parentName:"p"},"headerTintColor"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitleStyle"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headerStyle"),": a style object that will be applied to the ",Object(o.b)("inlineCode",{parentName:"li"},"View")," that wraps the header. If you set ",Object(o.b)("inlineCode",{parentName:"li"},"backgroundColor")," on it, that will be the color of your header."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headerTintColor"),": the back button and title both use this property as their color. In the example below, we set the tint color to white (",Object(o.b)("inlineCode",{parentName:"li"},"#fff"),") so the back button and the header title would be white."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"headerTitleStyle"),": if we want to customize the ",Object(o.b)("inlineCode",{parentName:"li"},"fontFamily"),", ",Object(o.b)("inlineCode",{parentName:"li"},"fontWeight")," and other ",Object(o.b)("inlineCode",{parentName:"li"},"Text")," style properties for the title, we can use this to do it.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    headerStyle: {\n      backgroundColor: '#f4511e',\n    },\n    headerTintColor: '#fff',\n    headerTitleStyle: {\n      fontWeight: 'bold',\n    },\n  };\n\n  /* render function, etc */\n}\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/setting-header-styles",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("p",null,"There are a couple of things to notice here:\n1. On iOS the status bar text and icons are black, and this doesn't look great over a dark colored background. We won't discuss it here, but you should be sure to configure the status bar to fit with your screen colors ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.x/status-bar"}),"as described in the status bar guide"),".\n2. The configuration we set only applies to the home screen; when we navigate to the details screen, the default styles are back. We'll look at how to share ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," between screens now."),Object(o.b)("h2",{id:"sharing-common-navigationoptions-across-screens"},"Sharing common ",Object(o.b)("inlineCode",{parentName:"h2"},"navigationOptions")," across screens"),Object(o.b)("p",null,"It is common to want to configure the header in a similar way across many screens. For example, your company brand color might be red and so you want the header background color to be red and tint color to be white. Conveniently, these are the colors we're using our running example, and you'll notice that when you navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"DetailsScreen")," the colors go back to the defaults. Wouldn't it be awful if we had to copy the ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," header style properties from ",Object(o.b)("inlineCode",{parentName:"p"},"HomeScreen")," to ",Object(o.b)("inlineCode",{parentName:"p"},"DetailsScreen"),", and for every single screen component we use in our app? Thankfully, we do not. We can instead move the configuration up to the ",Object(o.b)("inlineCode",{parentName:"p"},"StackNavigator"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Home',\n    /* No more header config here! */\n  };\n\n  /* render function, etc */\n}\n\n/* other code... */\n\nconst RootStack = StackNavigator(\n  {\n    Home: {\n      screen: HomeScreen,\n    },\n    Details: {\n      screen: DetailsScreen,\n    },\n  },\n  {\n    initialRouteName: 'Home',\n    /* The header config from HomeScreen is now here */\n    navigationOptions: {\n      headerStyle: {\n        backgroundColor: '#f4511e',\n      },\n      headerTintColor: '#fff',\n      headerTitleStyle: {\n        fontWeight: 'bold',\n      },\n    },\n  }\n);\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/sharing-header-styles",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("p",null,"Now, any screen that belongs to the ",Object(o.b)("inlineCode",{parentName:"p"},"RootStack")," will have our wonderful branded styles. Surely though, there must be a way to override these options if we need to?"),Object(o.b)("h2",{id:"overriding-shared-navigationoptions"},"Overriding shared ",Object(o.b)("inlineCode",{parentName:"h2"},"navigationOptions")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," specified on your screen component are merged together with those of its parent ",Object(o.b)("inlineCode",{parentName:"p"},"StackNavigator"),", with the options on the screen component taking precedence. Let's use this knowledge to invert the background and tint colors on the details screen."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class DetailsScreen extends React.Component {\n  static navigationOptions = ({ navigation, navigationOptions }) => {\n    const { params } = navigation.state;\n\n    return {\n      title: params ? params.otherParam : 'A Nested Details Screen',\n      /* These values are used instead of the shared configuration! */\n      headerStyle: {\n        backgroundColor: navigationOptions.headerTintColor,\n      },\n      headerTintColor: navigationOptions.headerStyle.backgroundColor,\n    };\n  };\n\n  /* render function, etc */\n}\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/overriding-shared-header-styles",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("h2",{id:"replacing-the-title-with-a-custom-component"},"Replacing the title with a custom component"),Object(o.b)("p",null,"Sometimes you need more control than just changing the text and styles of your title -- for example, you may want to render an image in place of the title, or make the title into a button. In these cases you can completely override the component used for the title and provide your own."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class LogoTitle extends React.Component {\n  render() {\n    return (\n      <Image\n        source={require('./spiro.png')}\n        style={{ width: 30, height: 30 }}\n      />\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  static navigationOptions = {\n    // headerTitle instead of title\n    headerTitle: <LogoTitle />,\n  };\n\n  /* render function, etc */\n}\n")),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/custom-header-title-component",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You might be wondering, why ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitle")," when we provide a component and not ",Object(o.b)("inlineCode",{parentName:"p"},"title"),", like before? The reason is that ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitle")," is a property that is specific to a ",Object(o.b)("inlineCode",{parentName:"p"},"StackNavigator"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitle")," defaults to a ",Object(o.b)("inlineCode",{parentName:"p"},"Text")," component that displays the ",Object(o.b)("inlineCode",{parentName:"p"},"title"),".")),Object(o.b)("h2",{id:"additional-configuration"},"Additional configuration"),Object(o.b)("p",null,"You can read the full list of available screen ",Object(o.b)("inlineCode",{parentName:"p"},"navigationOptions")," for screens inside of ",Object(o.b)("inlineCode",{parentName:"p"},"StackNavigator")," in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"stack-navigator.html#navigationoptions-used-by-stacknavigator"}),"StackNavigator reference"),"."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can customize the header inside of the ",Object(o.b)("inlineCode",{parentName:"li"},"navigationOptions")," static property on your screen components. Read the full list of options ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"stack-navigator.html#navigationoptions-used-by-stacknavigator"}),"in the API reference"),"."),Object(o.b)("li",{parentName:"ul"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"navigationOptions")," static property can be an object or a function. When it is a function, it is provided with an object with the ",Object(o.b)("inlineCode",{parentName:"li"},"navigation")," prop, ",Object(o.b)("inlineCode",{parentName:"li"},"screenProps"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"navigationOptions")," on it."),Object(o.b)("li",{parentName:"ul"},"You can also specify shared ",Object(o.b)("inlineCode",{parentName:"li"},"navigationOptions")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"StackNavigator")," configuration when you initialize it. The static property takes precedence over that configuration."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://snack.expo.io/@react-navigation/custom-header-title-component"}),"Full source of what we have built so far"),".")))}p.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,u=b["".concat(r,".").concat(h)]||b[h]||d[h]||o;return n?i.a.createElement(u,c({ref:t},l,{components:n})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);