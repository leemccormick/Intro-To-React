/* NOTE : Outline of Changes on ShowScreen.js :

1. Remove TouchableOpacity and EvilIcons imports

2. Instead of a navigation prop pass a route prop to the component instead:
  const ShowScreen = ({ route }) => { }

3. Instead of using the navigation.getParam method to extract id, use the route params prop:
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

4. Remove the entire ShowScreen.navigationOptions
All of this code has been moved to the ShowScreen Screen options in App.js.
*/

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    return (
        <View>
            <Text style={styles.title}>Bolg Info</Text>
            <Text style={styles.subTitle}>Tile : {blogPost.title}</Text>
            <Text style={styles.subTitle}>Content : {blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
        alignSelf: 'center'
    },
    subTitle: {
        fontSize: 20,
        margin: 20,
    }
});

export default ShowScreen;

/* NOTE : This is the code before using Navigation v6
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BoxContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    console.log("----ON ShowScreen----");
    console.log("(navigation.getParam('id') is : ");
    console.log(navigation.getParam('id'));
    console.log("blogPost is : ");
    console.log(blogPost);

    return (
        <View>
            <Text style={styles.title}>Bolg Info</Text>
            <Text style={styles.subTitle}>Tile : {blogPost.title}</Text>
            <Text style={styles.subTitle}>Content : {blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
        alignSelf: 'center'
    },
    subTitle: {
        fontSize: 20,
        margin: 20,
    }
});

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
                }
            >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

export default ShowScreen;
*/