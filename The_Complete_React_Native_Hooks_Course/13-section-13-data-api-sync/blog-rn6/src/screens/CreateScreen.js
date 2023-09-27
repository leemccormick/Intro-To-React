import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    console.log("----ON CreateScreen----");
    console.log("navigation is : " + navigation);
    console.log(navigation);
    console.log("addBlogPost is : " + addBlogPost);
    console.log(addBlogPost);

    return (
        <View>
            <Text style={styles.title}>Create Post</Text>
            <BlogPostForm
                onSubmit={(title, content) => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
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

export default CreateScreen;

/* NOTE : This is an Create Screen before using BlogPostForm
const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    console.log("----ON CreateScreen----");
    console.log("navigation is : " + navigation);
    console.log(navigation);
    console.log("title is : " + title);
    console.log("content is : " + content);
    console.log("addBlogPost is : " + addBlogPost);
    console.log(addBlogPost);

    return (
        <View>
            <Text style={styles.label}>Enter Title : </Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content : </Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)} />
            <Button
                title='Add Blog Post'
                onPress={() => {
                    // Not good in case of using API, it should not navigate immediately. So we should use call back
                    // addBlogPost(title, content);
                    // navigation.navigate('Index'); 
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default CreateScreen;
*/