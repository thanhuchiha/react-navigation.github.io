(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{419:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),i=a(9),o=(a(0),a(465)),r={id:"navigation-prop",title:"Navigation prop reference",sidebar_label:"Navigation prop"},c={id:"version-4.x/navigation-prop",title:"Navigation prop reference",description:"Each `screen` component in your app is provided with the `navigation` prop automatically. The prop contains various convenience functions that dispatch navigation actions on the route's router. It looks like this:",source:"@site/versioned_docs/version-4.x/navigation-prop.md",permalink:"/docs/4.x/navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/navigation-prop.md",version:"4.x",sidebar_label:"Navigation prop",sidebar:"version-4.x-docs",previous:{title:"Upgrading from 3.x",permalink:"/docs/4.x/upgrading-from-3.x"},next:{title:"NavigationContext",permalink:"/docs/4.x/navigation-context"}},l=[{value:"Navigator-dependent functions",id:"navigator-dependent-functions",children:[]},{value:"Common API reference",id:"common-api-reference",children:[{value:"<code>navigate</code> - Link to other screens",id:"navigate---link-to-other-screens",children:[]},{value:"<code>goBack</code> - Close the active screen and move back",id:"goback---close-the-active-screen-and-move-back",children:[]},{value:"Going back from a specific screen with <code>goBack</code>",id:"going-back-from-a-specific-screen-with-goback",children:[]},{value:"<code>addListener</code> - Subscribe to updates to navigation lifecycle",id:"addlistener---subscribe-to-updates-to-navigation-lifecycle",children:[]},{value:"<code>isFocused</code> - Query the focused state of the screen",id:"isfocused---query-the-focused-state-of-the-screen",children:[]},{value:"<code>state</code> - The screen&#39;s current state/route",id:"state---the-screens-current-stateroute",children:[]},{value:"<code>setParams</code> - Make changes to route params",id:"setparams---make-changes-to-route-params",children:[]},{value:"<code>getParam</code> - Get a specific param value with a fallback",id:"getparam---get-a-specific-param-value-with-a-fallback",children:[]}]},{value:"Stack Actions",id:"stack-actions",children:[{value:"Push",id:"push",children:[]},{value:"Pop",id:"pop",children:[]},{value:"PopToTop",id:"poptotop",children:[]},{value:"Replace",id:"replace",children:[]},{value:"Reset",id:"reset",children:[]},{value:"Dismiss",id:"dismiss",children:[]}]},{value:"Advanced API Reference",id:"advanced-api-reference",children:[{value:"<code>dispatch</code> - Send an action to the router",id:"dispatch---send-an-action-to-the-router",children:[]},{value:"<code>dangerouslyGetParent</code> - get parent navigator",id:"dangerouslygetparent---get-parent-navigator",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each ",Object(o.b)("inlineCode",{parentName:"p"},"screen")," component in your app is provided with the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop automatically. The prop contains various convenience functions that dispatch navigation actions on the route's router. It looks like this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"this.props.navigation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigate")," - go to another screen, figures out the action it needs to take to do it"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"goBack")," - close active screen and move back in the stack"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"addListener")," - subscribe to updates to navigation lifecycle"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"isFocused")," - function that returns ",Object(o.b)("inlineCode",{parentName:"li"},"true")," if the screen is focused and ",Object(o.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"state")," - current state/routes"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"setParams")," - make changes to route's params"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"getParam")," - get a specific param with fallback"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dispatch")," - send an action to router"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dangerouslyGetParent")," - function that returns the parent navigator, if any")))),Object(o.b)("p",null,"It's important to highlight the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop is ",Object(o.b)("em",{parentName:"p"},"not")," passed in to ",Object(o.b)("em",{parentName:"p"},"all")," components; only ",Object(o.b)("inlineCode",{parentName:"p"},"screen")," components receive this prop automatically! React Navigation doesn't do anything magic here. For example, if you were to define a ",Object(o.b)("inlineCode",{parentName:"p"},"MyBackButton")," component and render it as a child of a screen component, you would not be able to access the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop on it. If, however, you wish to access the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop in any of your components, you may use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/with-navigation"}),Object(o.b)("inlineCode",{parentName:"a"},"withNavigation"))," HOC."),Object(o.b)("h3",{id:"navigator-dependent-functions"},"Navigator-dependent functions"),Object(o.b)("p",null,"There are several additional functions present on ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation")," based on the kind of the current navigator."),Object(o.b)("p",null,"If the navigator is a stack navigator, several alternatives to ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"goBack")," are provided and you can use whichever you prefer. The functions are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"this.props.navigation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"push")," - push a new route onto the stack"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pop")," - go back in the stack"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"popToTop")," - go to the top of the stack"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"replace")," - replace the current route with a new one"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"reset")," - wipe the navigator state and replace it with the result of several actions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dismiss")," - dismiss the current stack")))),Object(o.b)("p",null,"If the navigator is a drawer navigator, the following are also available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"this.props.navigation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"openDrawer")," - open the drawer"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"closeDrawer")," - close the drawer"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"toggleDrawer")," - toggle the state, ie. switch from closed to open and vice versa")))),Object(o.b)("h2",{id:"common-api-reference"},"Common API reference"),Object(o.b)("p",null,"The vast majority of your interactions with the ",Object(o.b)("inlineCode",{parentName:"p"},"navigation")," prop will involve ",Object(o.b)("inlineCode",{parentName:"p"},"navigate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"goBack"),", ",Object(o.b)("inlineCode",{parentName:"p"},"state"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"setParams")," / ",Object(o.b)("inlineCode",{parentName:"p"},"getParam"),"."),Object(o.b)("h3",{id:"navigate---link-to-other-screens"},Object(o.b)("inlineCode",{parentName:"h3"},"navigate")," - Link to other screens"),Object(o.b)("p",null,"Call this to link to another screen in your app. Takes the following arguments:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate({ routeName, params, action, key })")),Object(o.b)("p",null,"OR"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"navigation.navigate(routeName, params, action)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"routeName")," - A destination routeName that has been registered somewhere in the app's router"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - Params to merge into the destination route"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"action")," - (advanced) The sub-action to run in the child router, if the screen is a navigator. See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/4.x/navigation-actions"}),"Actions Doc")," for a full list of supported actions."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key")," - Optional identifier of what route to navigate to. Navigate ",Object(o.b)("strong",{parentName:"li"},"back")," to this route, if it already exists")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class HomeScreen extends React.Component {\n  render() {\n    const { navigate } = this.props.navigation;\n\n    return (\n      <View>\n        <Text>This is the home screen of the app</Text>\n        <Button\n          onPress={() => navigate('Profile', { name: 'Brent' })}\n          title=\"Go to Brent's profile\"\n        />\n      </View>\n    );\n  }\n}\n")),Object(o.b)("h3",{id:"goback---close-the-active-screen-and-move-back"},Object(o.b)("inlineCode",{parentName:"h3"},"goBack")," - Close the active screen and move back"),Object(o.b)("p",null,"Optionally provide a key, which specifies the route to go back from. By default, ",Object(o.b)("inlineCode",{parentName:"p"},"goBack")," will close the route that it is called from. If the goal is to go back ",Object(o.b)("em",{parentName:"p"},"anywhere"),", without specifying what is getting closed, call ",Object(o.b)("inlineCode",{parentName:"p"},".goBack(null);")," Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"null")," parameter is useful in the case of nested ",Object(o.b)("inlineCode",{parentName:"p"},"StackNavigators")," to go back on a parent navigator when the child navigator already has only one item in the stack. Don't be concerned if this is confusing, this API needs some work."),Object(o.b)("p",null,"Note -- a key is not the name of the route but the unique identifier you provided when navigating to the route. See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/navigation-key"}),"navigation key"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'class HomeScreen extends React.Component {\n  render() {\n    const { goBack } = this.props.navigation;\n    return (\n      <View>\n        <Button onPress={() => goBack()} title="Go back from this HomeScreen" />\n        <Button onPress={() => goBack(null)} title="Go back anywhere" />\n        <Button\n          onPress={() => goBack(\'key-123\')}\n          title="Go back from key-123"\n        />\n      </View>\n    );\n  }\n}\n')),Object(o.b)("h3",{id:"going-back-from-a-specific-screen-with-goback"},"Going back from a specific screen with ",Object(o.b)("inlineCode",{parentName:"h3"},"goBack")),Object(o.b)("p",null,"Consider the following navigation stack history:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"navigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_A });\nnavigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_B });\nnavigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_C });\nnavigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_D });\n")),Object(o.b)("p",null,"Now you are on ",Object(o.b)("em",{parentName:"p"},"screen D")," and want to go back to ",Object(o.b)("em",{parentName:"p"},"screen A")," (popping D, C, and B).\nThen you need to supply a key to goBack ",Object(o.b)("em",{parentName:"p"},"FROM"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"navigation.goBack(SCREEN_KEY_B) // will go to screen A FROM screen B\n")),Object(o.b)("p",null,"Alternatively, as ",Object(o.b)("em",{parentName:"p"},"screen A")," is the top of the stack, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"navigation.popToTop()"),"."),Object(o.b)("h3",{id:"addlistener---subscribe-to-updates-to-navigation-lifecycle"},Object(o.b)("inlineCode",{parentName:"h3"},"addListener")," - Subscribe to updates to navigation lifecycle"),Object(o.b)("p",null,"React Navigation emits events to screen components that subscribe to them:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"willFocus")," - the screen will focus"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"didFocus")," - the screen focused (if there was a transition, the transition completed)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"willBlur")," - the screen will be unfocused"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"didBlur")," - the screen unfocused (if there was a transition, the transition completed)")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const didBlurSubscription = this.props.navigation.addListener(\n  'didBlur',\n  payload => {\n    console.debug('didBlur', payload);\n  }\n);\n\n// Remove the listener when you are done\ndidBlurSubscription.remove();\n")),Object(o.b)("p",null,"The JSON payload:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n  action: { type: 'Navigation/COMPLETE_TRANSITION', key: 'StackRouterRoot' },\n  context: 'id-1518521010538-2:Navigation/COMPLETE_TRANSITION_Root',\n  lastState: undefined,\n  state: undefined,\n  type: 'didBlur',\n};\n")),Object(o.b)("p",null,"You can also subscribe to navigation events declaratively with the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/navigation-events"}),Object(o.b)("inlineCode",{parentName:"a"},"<NavigationEvents/>"))," component."),Object(o.b)("h3",{id:"isfocused---query-the-focused-state-of-the-screen"},Object(o.b)("inlineCode",{parentName:"h3"},"isFocused")," - Query the focused state of the screen"),Object(o.b)("p",null,"Returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if the screen is focused and ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let isFocused = this.props.navigation.isFocused();\n")),Object(o.b)("p",null,"You probably want to use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/with-navigation-focus"}),"withNavigationFocus")," instead of using this directly, it will pass in an ",Object(o.b)("inlineCode",{parentName:"p"},"isFocused")," boolean a prop to your component."),Object(o.b)("h3",{id:"state---the-screens-current-stateroute"},Object(o.b)("inlineCode",{parentName:"h3"},"state")," - The screen's current state/route"),Object(o.b)("p",null,"A screen has access to its route via ",Object(o.b)("inlineCode",{parentName:"p"},"this.props.navigation.state"),". Each will return an object with the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n  // the name of the route config in the router\n  routeName: 'profile',\n  //a unique identifier used to sort routes\n  key: 'main0',\n  //an optional object of string options for this screen\n  params: { hello: 'world' }\n}\n")),Object(o.b)("p",null,"This is most commonly used to access the ",Object(o.b)("inlineCode",{parentName:"p"},"params")," for the screen, passed in through ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," or ",Object(o.b)("inlineCode",{parentName:"p"},"setParams"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class ProfileScreen extends React.Component {\n  render() {\n    return <Text>Name: {this.props.navigation.state.params.name}</Text>;\n  }\n}\n")),Object(o.b)("h3",{id:"setparams---make-changes-to-route-params"},Object(o.b)("inlineCode",{parentName:"h3"},"setParams")," - Make changes to route params"),Object(o.b)("p",null,"Firing the ",Object(o.b)("inlineCode",{parentName:"p"},"setParams")," action allows a screen to change the params in the route, which is useful for updating the header buttons and title. ",Object(o.b)("inlineCode",{parentName:"p"},"setParams")," works like React's ",Object(o.b)("inlineCode",{parentName:"p"},"setState")," - it merges the provided params object with the current params."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class ProfileScreen extends React.Component {\n  render() {\n    return (\n      <Button\n        onPress={() => this.props.navigation.setParams({ name: 'Lucy' })}\n        title=\"Set title name to 'Lucy'\"\n      />\n    );\n  }\n}\n")),Object(o.b)("h3",{id:"getparam---get-a-specific-param-value-with-a-fallback"},Object(o.b)("inlineCode",{parentName:"h3"},"getParam")," - Get a specific param value with a fallback"),Object(o.b)("p",null,"In the past, you may have encountered the frightful scenario of accessing a ",Object(o.b)("inlineCode",{parentName:"p"},"param")," when ",Object(o.b)("inlineCode",{parentName:"p"},"params")," is undefined. Instead of accessing the param directly, you can call ",Object(o.b)("inlineCode",{parentName:"p"},"getParam")," instead."),Object(o.b)("p",null,"Before:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { name } = this.props.navigation.state.params;\n")),Object(o.b)("p",null,"if ",Object(o.b)("inlineCode",{parentName:"p"},"params")," is ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),", this fails"),Object(o.b)("p",null,"After:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const name = this.props.navigation.getParam('name', 'Peter');\n")),Object(o.b)("p",null,"if ",Object(o.b)("inlineCode",{parentName:"p"},"name")," or ",Object(o.b)("inlineCode",{parentName:"p"},"params")," are undefined, set the fallback to ",Object(o.b)("inlineCode",{parentName:"p"},"Peter"),"."),Object(o.b)("h2",{id:"stack-actions"},"Stack Actions"),Object(o.b)("p",null,"The following actions will work within any stack navigator:"),Object(o.b)("h3",{id:"push"},"Push"),Object(o.b)("p",null,"Similar to navigate, push will move you forward to a new route in the stack. This differs from ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," in that ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," will pop back to earlier in the stack if a route of the given name is already present there. ",Object(o.b)("inlineCode",{parentName:"p"},"push")," will always add on top, so a route can be present multiple times."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.push(routeName, params, action);\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"routeName")," - A destination routeName that has been registered somewhere in the app's router."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - Params to merge into the destination route."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"action")," - (advanced) The sub-action to run in the child router, if the screen is a navigator. See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/4.x/navigation-actions"}),"Actions Doc")," for a full list of supported actions.")),Object(o.b)("h3",{id:"pop"},"Pop"),Object(o.b)("p",null,"Take you to the previous screen in the stack. If you provide a number, ",Object(o.b)("inlineCode",{parentName:"p"},"n"),", it will specify how many screens to take you back within the stack."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.pop(n);\n")),Object(o.b)("h3",{id:"poptotop"},"PopToTop"),Object(o.b)("p",null,"Call this to jump back to the top route in the stack, dismissing all other screens."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.popToTop();\n")),Object(o.b)("h3",{id:"replace"},"Replace"),Object(o.b)("p",null,"Call this to replace the current screen with the given route, with params and sub-action."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.replace(routeName, params, action);\n")),Object(o.b)("h3",{id:"reset"},"Reset"),Object(o.b)("p",null,"Wipe the navigator state and replace it with the result of several actions."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.reset([NavigationActions.navigate({ routeName: 'Profile' })], 0);\n")),Object(o.b)("h3",{id:"dismiss"},"Dismiss"),Object(o.b)("p",null,"Call this if you're in a nested (child) stack and want to dismiss the entire stack, returning to the parent stack."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"navigation.dismiss();\n")),Object(o.b)("h2",{id:"advanced-api-reference"},"Advanced API Reference"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"dispatch")," function is much less commonly used, but a good escape hatch if you can't do what you need with ",Object(o.b)("inlineCode",{parentName:"p"},"navigate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"goBack"),"."),Object(o.b)("h3",{id:"dispatch---send-an-action-to-the-router"},Object(o.b)("inlineCode",{parentName:"h3"},"dispatch")," - Send an action to the router"),Object(o.b)("p",null,"Use dispatch to send any navigation action to the router. The other navigation functions use dispatch behind the scenes."),Object(o.b)("p",null,"Note that if you want to dispatch react-navigation actions you should use the action creators provided in this library."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.x/navigation-actions"}),"Navigation Actions Docs")," for a full list of available actions."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { NavigationActions } from 'react-navigation';\n\nconst navigateAction = NavigationActions.navigate({\n  routeName: 'Profile',\n  params: {},\n\n  // navigate can have a nested navigate action that will be run inside the child router\n  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),\n});\nthis.props.navigation.dispatch(navigateAction);\n")),Object(o.b)("h3",{id:"dangerouslygetparent---get-parent-navigator"},Object(o.b)("inlineCode",{parentName:"h3"},"dangerouslyGetParent")," - get parent navigator"),Object(o.b)("p",null,"If, for example, you have a screen component that can be presented within multiple navigators, you may use this to influence its behavior based on what navigator it is in."),Object(o.b)("p",null,"Another good use case for this is to find the index of the active route in the parent's route list. So in the case of a stack if you are at index 0 then you may not want to render a back button, but if you're somewhere else in the list then you would render a back button."),Object(o.b)("p",null,"Be sure to always check that the call returns a valid value."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"class UserCreateScreen extends Component {\n  static navigationOptions = ({ navigation }) => {\n    const parent = navigation.dangerouslyGetParent();\n    const gesturesEnabled =\n      parent &&\n      parent.state &&\n      parent.state.routeName === 'StackWithEnabledGestures';\n\n    return {\n      title: 'New User',\n      gesturesEnabled,\n    };\n  };\n}\n")))}p.isMDXComponent=!0},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return a?i.a.createElement(m,c({ref:t},s,{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);