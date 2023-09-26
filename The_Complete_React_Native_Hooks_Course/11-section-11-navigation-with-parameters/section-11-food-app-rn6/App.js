import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Navigation v6 Search" }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* NOTE : Outline of Changes on App.js:

1. Replace the imports:

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

2. Assign the createStackNavigator function to the Stack variable.

const Stack = createStackNavigator();

3. Use the NavigationContainer to wrap all of our navigation.

    <NavigationContainer>
        ...
    </NavigationContainer>

4. Create a Navigator within the NavigationContainer:

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
          ....
      </Stack.Navigator>
    </NavigationContainer>
The headerTitle passed to the screenOptions prop will be used across all screens the navigator is wrapping. Also, a navigation prop will be automatically shared with all screens wrapped within the navigator.

5. Create two screens within the Navigator:

        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
https://reactnavigation.org/docs/hello-react-navigation#creating-a-native-stack-navigator
*/

/* NOTE : Upgrading the Restaurant app to use React Navigation v6
**Generate a brand new project:

npx create-expo-app food-rn6

**Install React Navigation v6 dependencies

npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/stack

npx expo install react-native-gesture-handler

Install project dependencies:

npm install axios

**Copy your entire src directory and the App.js from your existing Restaurant project to the new food-rn6 project directory.

**Replace the code in your App.js with the following code (explanation of changes found below)

*************************************************************************************************
**App.js

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

*************************************************************************************************
**Outline of Changes:

1. Replace the imports:

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
2. Assign the createStackNavigator function to the Stack variable.

const Stack = createStackNavigator();
3. Use the NavigationContainer to wrap all of our navigation.

    <NavigationContainer>
        ...
    </NavigationContainer>
4. Create a Navigator within the NavigationContainer:

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
          ....
      </Stack.Navigator>
    </NavigationContainer>
The headerTitle passed to the screenOptions prop will be used across all screens the navigator is wrapping. Also, a navigation prop will be automatically shared with all screens wrapped within the navigator.

5. Create two screens within the Navigator:

        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
https://reactnavigation.org/docs/hello-react-navigation#creating-a-native-stack-navigator


*************************************************************************************************
**Find the ResultsShowScreen.js and replace it with the following code (explanation of changes found below)
**ResultsShowScreen

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
 
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
 
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
 
  if (!result) {
    return null;
  }
 
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
 
export default ResultsShowScreen;

*************************************************************************************************
**Outline of Changes:

1. Instead of a navigation prop pass a route prop to the component instead:

const ResultsShowScreen = ({ route }) => { 
A navigation prop is no longer needed, as it is communicated automatically to all screens.

https://reactnavigation.org/docs/navigation-prop

2. Instead of using the navigation.getParam method to extract id, use the route params prop:

  const id = route.params.id;
https://reactnavigation.org/docs/route-prop


*************************************************************************************************
**Find the ResultsList.js component and replace it with the following code (explanation of changes found below)
**ResultsList.js

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultsDetail";
 
const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
 
export default ResultsList;

*************************************************************************************************
**Outline of Changes

1. Instead of the withNavigation method, import useNavigation:

import { useNavigation } from "@react-navigation/native";
2. We no longer need to pass a navigation prop to the component:

const ResultsList = ({ title, results }) => {
3. Make use of the useNavigation hook to access the navigation prop instead

  const navigation = useNavigation();
https://reactnavigation.org/docs/use-navigation

**A complete and working example is attached to this lecture as a zip file (though you may need to generate your own Yelp API key).
*/