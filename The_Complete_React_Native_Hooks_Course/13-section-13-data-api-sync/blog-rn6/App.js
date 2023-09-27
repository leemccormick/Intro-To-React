
/* NOTE : Outline of Changes on App.js:

1. Replace the React Navigation imports

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

2. Add imports for TouchableOpacity and EvilIcons

import { TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";

3. Assign the createStackNavigator function to the Stack variable.

const Stack = createStackNavigator();

4. Create a Provider component to wrap all of our components and screens

This Provider should be the topmost component wrapping the Navigation Container, Stack Navigator, and Stack Screens.

    <Provider>
      ...
    </Provider>

5. Use the NavigationContainer to wrap all of our navigation.

    <Provider>
      <NavigationContainer>
        ...
      </NavigationContainer>
    <Provider>

6. Create a Navigator within the NavigationContainer:

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
        ....
      </Stack.Navigator>
    </NavigationContainer>
The headerTitle passed to the screenOptions prop will be used across all screens the navigator is wrapping. Also, a navigation prop will be automatically shared with all screens wrapped within the navigator.

7. Create four screens within the Navigator:

          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />

- The navigationOptions from IndexScreen.js and ShowScreen.js have been moved to the Screen options prop. The function passed to the options prop will receive the navigation and route props automatically.
- In the ShowScreen options, we are refactoring navigation.getParam('id') to instead extract the id with route.params.id
*/

import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Feather, EvilIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route, navigation }) => ({
              headerTitle: "Blog Info",
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} options={{ headerTitle: "Add New Blog" }} />
          <Stack.Screen name="Edit" component={EditScreen} options={{ headerTitle: "Edit Blog" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

/* NOTE : Upgrading the Blog app to use React Navigation v6
STEP 1 : Generate a brand new project:

npx create-expo-app blog-rn6

STEP 2 : Install React Navigation v6 dependencies

npm install @react-navigation/native

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/stack

npx expo install react-native-gesture-handler

STEP 3 : Install project dependencies:

npm install axios

STEP 4 : Copy the src and jsonserver directories, and the App.js from your existing Blog project to the new blog-rn6 project directory.
**********************************************************************************************
STEP 5 : on App.js --> Replace the code in your App.js with the following code (explanation of changes found below)

App.js

import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import { Feather, EvilIcons } from "@expo/vector-icons";
 
const Stack = createStackNavigator();
 
export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

***Outline of Changes:

1. Replace the React Navigation imports

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
2. Add imports for TouchableOpacity and EvilIcons

import { TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
3. Assign the createStackNavigator function to the Stack variable.

const Stack = createStackNavigator();
4. Create a Provider component to wrap all of our components and screens

This Provider should be the topmost component wrapping the Navigation Container, Stack Navigator, and Stack Screens.

    <Provider>
      ...
    </Provider>
5. Use the NavigationContainer to wrap all of our navigation.

    <Provider>
      <NavigationContainer>
        ...
      </NavigationContainer>
    <Provider>
6. Create a Navigator within the NavigationContainer:

    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Blogs" }}>
        ....
      </Stack.Navigator>
    </NavigationContainer>
The headerTitle passed to the screenOptions prop will be used across all screens the navigator is wrapping. Also, a navigation prop will be automatically shared with all screens wrapped within the navigator.

7. Create four screens within the Navigator:

          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <EvilIcons name="pencil" size={35} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />

The navigationOptions from IndexScreen.js and ShowScreen.js have been moved to the Screen options prop. The function passed to the options prop will receive the navigation and route props automatically.

In the ShowScreen options, we are refactoring navigation.getParam('id') to instead extract the id with route.params.id

https://reactnavigation.org/docs/screen-options/

**********************************************************************************************
STEP 6 : on IndexScreen.js --> Find IndexScreen.js and replace it with the following code (explanation of changes found below)

IndexScreen

import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
 
const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
 
  useEffect(() => {
    getBlogPosts();
 
    const listener = navigation.addListener("focus", () => {
      getBlogPosts();
    });
 
    return () => {
      listener.remove();
    };
  }, []);
 
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
 
export default IndexScreen;

***Outline of Changes:

1. Listen for the focus event instead of the old didFocus event

  const listener = navigation.addListener("focus", () => {
https://reactnavigation.org/docs/navigation-events/

2. Remove the entire IndexScreen.navigationOptions

All of this code has been moved to the IndexScreen Screen options in App.js.

**********************************************************************************************
STEP 7 : on ShowScreen.js --> Find ShowScreen.js and replace it with the following code (explanation of changes found below)

ShowScreen

import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../context/BlogContext";
 
const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
 
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
 
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};
 
export default ShowScreen;

***Outline of Changes:

1. Remove TouchableOpacity and EvilIcons imports

2. Instead of a navigation prop pass a route prop to the component instead:

  const ShowScreen = ({ route }) => { 
3. Instead of using the navigation.getParam method to extract id, use the route params prop:

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);
4. Remove the entire ShowScreen.navigationOptions

All of this code has been moved to the ShowScreen Screen options in App.js.

**********************************************************************************************
STEP 8 : on EditScreen.js --> Find EditScreen.js and replace it with the following code (explanation of changes found below)

EditScreen

import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
 
const EditScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const { state, editBlogPost } = useContext(Context);
 
  const blogPost = state.find((blogPost) => blogPost.id === id);
 
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};
 
export default EditScreen;

***Outline of Changes:

2. Pass both a navigation and route prop to the component:

  const EditScreen = ({ navigation, route }) => {
3. Instead of using the navigation.getParam method to extract id, use the route params prop:

  const id = route.params.id;

***A complete and working example is attached to this lecture as a zip file.
*/