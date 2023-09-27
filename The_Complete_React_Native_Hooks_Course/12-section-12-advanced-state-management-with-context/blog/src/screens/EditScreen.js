import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BoxContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find(
        (blogPost) => blogPost.id === id
    );
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    console.log("----ON EditScreen----");
    console.log("(navigation.getParam('id') is : " + navigation.getParam('id'));
    console.log(navigation.getParam('id'));
    console.log("blogPost is : " + blogPost);
    console.log(blogPost);
    console.log("title is : " + title);
    console.log("content is : " + content);

    return (
        <View>
            <Text style={styles.title}>Edit Post</Text>
            <BlogPostForm
                initailValues={{ title: blogPost.title, content: blogPost.content }}
                isCreateMode={false}
                onSubmit={(title, content) => {
                    console.log('ON EditScreen : Edit Button OnPress ! ' + title + ' | ' + content);
                    editBlogPost(id, title, content, () => {
                        navigation.pop();
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20,
        alignSelf: 'center'
    }
});

export default EditScreen;