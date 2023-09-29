import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    console.log('-------------SigninScreen-------------');
    console.log('SigninScreen | state is : ' + state);
    console.log(state);

    return (<View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />

        <AuthForm
            headerText="Sign In for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
        />

        <NavLink
            routeName="Signup"
            text="Do you have an account? Sing up instead !"
        />
    </View>);
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;

/* NOTE: NavigationEvents 
 - NavigationEvents is a component provided by the React Navigation library in the context of React Native development. It allows you to respond to navigation events in your application, such as when a screen is focused or blurred.
 - To use this events, need this line to import --> import { NavigationEvents } from 'react-navigation'; 
    <NavigationEvents
            onWillFocus={clearErrorMessage}
            onDidFocus={() => console.log('NavigationEvents : onDidFocus !!!')}
            onWillBlur={() => console.log('NavigationEvents : onWillBlur !!!')}
            onDidBlur={() => console.log('NavigationEvents : onDidBlur !!!')}
    />
*/