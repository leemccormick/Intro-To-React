import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { appStyles, SpacingView, UnderlineView, ErrorView } from '../components/StyleGuide';

const TextScreen = () => {
    let myPassword = "Test123!";
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showError, setShowError] = useState(false);

    const handelPasswordInputChange = (newValue) => {
        setPassword(newValue);

        if (newValue.length < 4) {
            setShowError(true);
            setErrorMessage('Password must be at least 5 characters.')
        } else {
            if (newValue === myPassword) {
                setShowError(false);
                setErrorMessage('')
            } else {
                setShowError(true);
                setErrorMessage('Input Password does not match your password in database.')
            }
        }
    };

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Text Screen</Text>
            <Text style={styles.subtitleStyle}>Learn about State Management in React Components...</Text>
            <UnderlineView />

            <TextInput
                style={appStyles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={appStyles.titleStyle}>My name is {name} </Text>
            <SpacingView />
            <UnderlineView />

            <SpacingView />
            <Text style={appStyles.smallestSubtitleStyle}> This is an excercise to validate the iser's input, show a message if it doesn't meet some criteria.</Text>
            <SpacingView />
            <Text style={appStyles.subtitleStyle}>Enter Password : </Text>

            <TextInput
                style={appStyles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => handelPasswordInputChange(newValue)}
            />
            <Text style={appStyles.smallestSubtitleStyle}>My password is {myPassword} </Text>
            <Text style={appStyles.smallestSubtitleStyle}>Input Password is {password} </Text>
            <SpacingView />
            {
                showError
                    ? <ErrorView errorMessage={errorMessage}></ErrorView>
                    : <UnderlineView />
            }

            <SpacingView />
            <Text style={appStyles.smallestSubtitleStyle}> This is an solution for the excercise to validate the iser's input, show a message if it doesn't meet some criteria.</Text>
            <Text style={appStyles.subtitleStyle}>The solution does not need any more variable just use ternary and this logic |  password.length {'<'} 4.</Text>
            {
                password.length < 4
                    ? <ErrorView errorMessage='The password must be longer than 5 characters.'></ErrorView>
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00008B'
    },
    subtitleStyle: {
        fontSize: 20,
        textAlign: 'left',
        color: 'gray'
    }
});

export default TextScreen;