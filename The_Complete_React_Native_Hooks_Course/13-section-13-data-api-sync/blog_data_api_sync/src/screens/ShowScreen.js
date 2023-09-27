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