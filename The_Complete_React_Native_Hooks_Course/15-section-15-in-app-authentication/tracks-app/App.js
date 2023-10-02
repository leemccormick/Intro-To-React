import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from './src/screens/AccountScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import { FontAwesome } from '@expo/vector-icons';

const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackListFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="list-alt" size={20} color="white" />
};

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator(
    {
      trackListFlow: trackListFlow,
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
    },
    {
      initialRouteName: 'TrackCreate', // Set your initial route here if needed
      barStyle: {
        backgroundColor: 'darkblue', // Set your desired background color
        height: 80, // Adjust the height here
      },
      labeled: true, // Set to true if you want to display labels on tabs
      shifting: false, // Set to true if you want the icons to shift when selected
    }
  )
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}

/* NOTE : How to set up track-app
1) create the app with this command --> npx create-expo-app tracks-app
2) Make sure you have track-server project to run mock up api
3) React Navigation v4 Installation
note: You cannot mix Yarn and npm in the same project as it will break your dependencies. You must consistently use the same package manager. If you have yarn installed on your computer it will be used by default to generate the project. In this case, you must use Yarn to install your dependencies.

3.1. Install React Navigation

npm install react-navigation@4.4.4 --legacy-peer-deps

or

yarn add react-navigation

3.2. Install Dependencies

npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps

3.3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps

or

yarn add react-navigation-stack @react-native-community/masked-view

3.4. Install React Navigation Material Bottom Tabs Library:

npm install react-navigation-material-bottom-tabs react-native-paper@4 --legacy-peer-deps

or

yarn add react-navigation-material-bottom-tabs react-native-paper@4

IMPORTANT - We cannot use react-navigation-tabs anymore as it is no longer compatible with React Native. The library mentioned above in step #4 is a direct drop-in replacement for react-navigation-tabs.

3.5. Find the babel.config.js file and add the following line to the return:

    plugins: ["react-native-reanimated/plugin"],

Updated babel.config.js:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

4) Update Imports
Our imports in the upcoming lecture "Navigator Hookup" will now look like this:

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

***Errors***
- If you are still struggling with the React Navigation installation then there are likely some major dependency conflicts in your environment. In this case, we've made a boilerplate available so that you can continue with the course. Download the zip file attached to this lecture to somewhere in your C:\Users directory (Windows) or /Users directory (macOS)
- Then, run npm install --legacy-peer-deps and then npm start.
*/

/* NOTE : Libraries for this track-app
1) navigation v4 libraries ---> npm install react-navigation@4.4.4 --legacy-peer-deps
  - Install Dependencies --> npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps
  - Install React Navigation Stack --> npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps
  - Install React Navigation Material Bottom Tabs Library --> npm install react-navigation-material-bottom-tabs react-native-paper@4 --legacy-peer-deps

2) react-native-elements | This is a popular open-source UI toolkit for building mobile applications using React Native. It provides a set of pre-designed and customizable UI components that can be easily integrated into your React Native projects.
  - npm install react-native-elements --force | This is a command that force install library after getting conflic erros.
  - npm install react-native-elements | This is a command to install this library.
  - https://reactnativeelements.com/docs | This is a link for documentation

3) axios --> This is a popular JavaScript library that is used for making HTTP requests from a web browser or Node.js. It provides an easy-to-use interface for sending HTTP requests and handling responses. Axios supports various features like interceptors, the ability to cancel requests, and automatic conversion of JSON data.
  - npm install axios

4) Ngrok --> This a tool that allows you to expose a local server to the internet. It creates a secure tunnel from a public endpoint to a locally running web service. This can be incredibly useful during development and testing phases, especially when you want to share a web application hosted on your local machine with others for testing purposes.
  - Ngrok provides a temporary public URL for your locally hosted application, which can be accessed by anyone with the link. This is helpful for testing webhooks, demonstrating work-in-progress to clients or colleagues, or conducting remote debugging.
  - Keep in mind that while Ngrok is very convenient, you should be cautious when using it in a production environment, as it's primarily designed for development and testing purposes. Additionally, always make sure to handle sensitive information and authentication properly when using Ngrok to expose services over the internet.
  - ngrok --> Use this command to see if we have ngrok install, it will show detail description and help messageses.
  - npm install -g ngrok --> Use this command to install ngrok, if you do not see help messageses, you should use this command to install the framework
  - To use track-server with ngrok, follow this steps : 
  - step 1 : make sure the track-server is running on terminal with localhost. --> You will see 'Listening on port 3000' on terminal
  - step 2 : make sure react-native bundler is also runing on the second terminal, basiclly on tracks app is running with npm start
  - step 3 : open the third terminal to run ngrok on tracks-app directory : ngrok http 3000 --> use this command to connect to ngrok and get baseUrl 

5) Async storage --> This is a programming concept used in asynchronous programming paradigms, particularly in JavaScript. It provides a way to store data persistently on a device, like a web browser or a mobile app, without blocking the main execution thread.
  - To resolve this, we need to install the following library: npm install @react-native-async-storage/async-storage --legacy-peer-deps
  - Then, update the import in AuthContext to this: import AsyncStorage from '@react-native-async-storage/async-storage';

6) React Native Maps --> This is a popular library that allows you to integrate maps into your React Native applications. It provides a convenient way to display interactive and customizable maps on both Android and iOS platforms.
  - npx expo install react-native-maps -- --legacy-peer-deps | This is a command to install it.

7) expo-location --> This is a module provided by Expo, a popular platform for building and deploying cross-platform mobile applications with JavaScript and React Native. This module offers a set of APIs that allow you to access the device's location services, including GPS and network-based positioning.
  - npx expo install expo-location-- --legacy-peer-deps | This is a command to install it, but it might get errors back, so use the next command below.
  - npx expo install expo-location | This is a command to install it, if this not work, please try next command.
  - npx expo install expo-location -- --force  | This is a command to install it.
*/