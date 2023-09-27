import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BoxContext'; // import { BoxProvider } from './src/context/BoxContext'; --> This line before using createDataContext.js
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: {
    screen: ShowScreen,
    navigationOptions: {
      title: 'Blog Details',
    },
  },
  Create: {
    screen: CreateScreen,
    navigationOptions: {
      title: 'Create New Blog',
    },
  },
  Edit: {
    screen: EditScreen,
    navigationOptions: {
      title: 'Edit Blog',
    },
  },
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs',
  },
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

/* NOTE : This is a default screen when the app got generated.
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

/* NOTE : To set up or create the blog app.
1) Create the application using this command --> npx create-expo-app blog
2) Open VS code with the created project and run those command for naviagtion library --> npm install react-navigation
3) Run the project with --> npm start
4) Required React Navigation Installation Update
**4.1) React Navigation v4 Installation
4.1.1)  Install React Navigation

npm install react-navigation --legacy-peer-deps

or

yarn add react-navigation

4.1.2) Install Dependencies

npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps

4.1.3) Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

or

yarn add react-navigation-stack @react-native-community/masked-view

4.1.4)  Find the babel.config.js file and add the following line to the return:

    plugins: ["react-native-reanimated/plugin"],

Updated babel.config.js:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

**4.2) Update Imports
Our imports in the upcoming lecture will now look like this:

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
Errors?
If you are still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. In this case, we've made a boilerplate available so that you can continue with the course. Download the zip file attached to this lecture to somewhere in your C:\Users directory (Windows) or /Users directory (macOS)

Then, run npm install --legacy-peer-deps and then npm start.
*/

/* NOTE : Code for creating new component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Demo = () => {
    return (
        <View>
            <Text>Demo</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default Demo;
 */