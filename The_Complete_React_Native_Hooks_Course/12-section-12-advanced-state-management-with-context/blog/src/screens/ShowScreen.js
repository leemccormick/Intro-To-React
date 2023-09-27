import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BoxContext';

// TODO: Continue working on here.....
const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find(
        (blogPost) => blogPost.id === navigation.getParam('id')
    );

    console.log(navigation.getParam('id'));
    console.log(blogPost);

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;