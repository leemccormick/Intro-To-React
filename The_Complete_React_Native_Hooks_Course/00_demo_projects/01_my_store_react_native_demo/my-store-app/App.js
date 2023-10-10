import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LunchScreen from "./src/screens/LunchScreen";
import SigninScreen from "./src/screens/SigninScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import ThankyouScreen from "./src/screens/ThankyouScreen";
import { Provider as AuthProvider, Context as AuthContext } from "./src/contexts/AuthContext";
import { Provider as StoreProvider } from "./src/contexts/StoreContext";
import { Provider as OrderProvider } from "./src/contexts/OrderContext";
import { setNavigator, navigationRef } from "./src/navigationRef";
import { appStyles } from "./src/components/StyleGuide";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Stack = createStackNavigator();

const App = () => {
  const { signout } = useContext(AuthContext);

  return (
    <NavigationContainer
      style={appStyles.screenContainer}
      ref={ref => {
        setNavigator(ref);
        navigationRef.current = ref;
      }}>

      <Stack.Navigator screenOptions={{ headerTitle: "My Store" }}>
        <Stack.Screen
          name="Lunch"
          component={LunchScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log('back not here ??')}>
                <Fontisto style={[appStyles.leftPaddingStyle, appStyles.secondaryDarkColor]} name="preview" size={24} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={signout}>
                <AntDesign style={[appStyles.rightPaddingStyle, appStyles.secondaryDarkColor]} name="logout" size={24} />
              </TouchableOpacity>
            ),
          })}
        />

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="Thankyou"
          component={ThankyouScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AuthProvider>
      <StoreProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </StoreProvider>
    </AuthProvider>
  );
};

/* NOTE : How to set up track-app
1) create the app with this command --> npx create-expo-app my-store-app
2) open the app in VS code and run this command to start the app --> npm start | Then press i or a to run in iOS or Android stimulator
3) install React Navigation v6 dependencies with this following commands :
  - npm install @react-navigation/native
  - npx expo install react-native-screens react-native-safe-area-context
  - npm install @react-navigation/stack
  - npx expo install react-native-gesture-handler
4) install react-native-elements dependencies
5) set up mock up navigations between Signin and Home Screen by deleting boiler plate code on App.js
6) start working on the project, connect to mock up server mystore demo.
*/

/* NOTE : Libraries for this track-app
1) React Navigation v6 dependencies | This is a package in the React Navigation library for React Native. React Navigation is a popular library used for handling navigation and routing in React Native applications.
- https://github.com/wix/react-native-navigation | This is a recomandation from react native community
- https://reactnavigation.org/docs/getting-started | Documentation for navigation
- This project using  Navigation v6 dependencies, using this command to install 
- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/stack
- npx expo install react-native-gesture-handler
2) react-native-elements | This is a popular open-source UI toolkit for building mobile applications using React Native. It provides a set of pre-designed and customizable UI components that can be easily integrated into your React Native projects.
  - npm install react-native-elements --force | This is a command that force install library after getting conflic erros.
  - npm install react-native-elements | This is a command to install this library.
  - https://reactnativeelements.com/docs | This is a link for documentation
3) base-64 | This is a library to encode your credentials.
  - npm install base-64 --save | This is a command to install base-64 library
4) Async storage --> This is a programming concept used in asynchronous programming paradigms, particularly in JavaScript. It provides a way to store data persistently on a device, like a web browser or a mobile app, without blocking the main execution thread.
  - To resolve this, we need to install the following library: npm install @react-native-async-storage/async-storage --legacy-peer-deps
  - Then, update the import in AuthContext to this: import AsyncStorage from '@react-native-async-storage/async-storage';
5) axios --> This is a popular JavaScript library that is used for making HTTP requests from a web browser or Node.js. It provides an easy-to-use interface for sending HTTP requests and handling responses. Axios supports various features like interceptors, the ability to cancel requests, and automatic conversion of JSON data.
  - npm install axios
*/

/* Links Info :
- https://reactnative.dev/docs/navigation
*/