import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({ initialValues, isCreateMode, onSubmit }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    const lableForTitleText = isCreateMode ? 'Enter Title : ' : 'Enter New Title : '
    const lableForContentText = isCreateMode ? 'Enter Content : ' : 'Enter New Content : '
    const titleForSubmitButton = isCreateMode ? 'Add New Blog Post' : 'Edit Blog Post'

    console.log("----ON BlogPostForm----");
    console.log("title is : " + title);
    console.log("content is : " + content);
    console.log("isCreateMode is : " + isCreateMode);
    console.log("lableForTitleText is : " + lableForTitleText);
    console.log("lableForContentText is : " + lableForContentText);
    console.log("titleForSubmitButton is : " + titleForSubmitButton);
    console.log("onSubmit is : " + onSubmit);
    console.log(onSubmit);

    return (
        <View>
            <Text style={styles.label}>{lableForTitleText}</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>{lableForContentText}</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)} />
            <Button
                title={titleForSubmitButton}
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    },
    isCreateMode: true
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

export default BlogPostForm;