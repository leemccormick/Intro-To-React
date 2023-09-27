import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BoxContext'; // import BoxContext from '../context/BoxContext'; --> This line before using createDataContext.js
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    // const blogPosts = useContext(BoxContext); --> This line before using createDataContext.js
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    console.log("----ON IndexScreen----");
    console.log("navigation is : " + navigation);
    console.log(navigation);
    console.log("state is : " + state);
    console.log(state);
    console.log("deleteBlogPost is : " + deleteBlogPost);
    console.log(deleteBlogPost);

    useEffect(() => {
        getBlogPosts();

        // When navigate from any screen and we can call getBlogPosts() again
        const listener = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });

        // Clean up if needed, prevent memory leak
        return () => {
            listener.remove();
        }
    }, []); // [] Run once time only when screen created.

    return (
        <View>
            <Text>Index with API Screen</Text>

            {/* <Button
                title='Add Post'
                onPress={addBlogPost}
            /> */}

            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        ),
    };
};

export default IndexScreen;