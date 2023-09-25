/* This is a default value when create an app
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

// To create navigation on the app from scrash after install the library
/*
1. import createAppContainer and createStackNavigator
2. create const navigator 
3. create src and screens folders
4. create a screen ex. Search Screen
5. import the screen 
6. use the screen const navigator 
7. add initailRouteName and defaultNavigationOptions to const navigator 
8. export navigator with this line --> export default createAppContainer(navigator);

NOTE: I am still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. 
In this case, I am going to use a boilerplate available so that I can continue with the course.
*/

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({ 
  Search: SearchScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
}
);

export default createAppContainer(navigator);
/* NOTE : 
To create react application (replace app name on 'food') : npx create-expo-app food 
To add navigation library : npm install react-navigation
*/

/*
*** NOTE : React Navigation v4 Installation *** 
note: You cannot mix Yarn and npm in the same project as it will break your dependencies. You must consistently use the same package manager. If you have yarn installed on your computer it will be used by default to generate the project. In this case, you must use Yarn to install your dependencies.

1. Install React Navigation

npm install react-navigation --legacy-peer-deps

or

yarn add react-navigation

2. Install Dependencies

npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps

3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

or

yarn add react-navigation-stack @react-native-community/masked-view

4. Find the babel.config.js file and add the following line to the return:

    plugins: ["react-native-reanimated/plugin"],

Updated babel.config.js:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
 */