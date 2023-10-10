import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../contexts/AuthContext';
import { appStyles } from '../components/StyleGuide';
import AppHeader from '../components/AppHeader';

const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);

    console.log('-------------SigninScreen-------------');
    console.log('state | ', state);

    return (
        <View style={appStyles.primaryLightBackgroundColor}>
            <View style={[styles.container, appStyles.paddingStyle]}>
                <AppHeader title="MY STORE" />
                <AuthForm
                    headerText="Sign In"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign In"
                    onSubmit={signin}
                />
            </View>
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
        marginBottom: 200,
    }
});

export default SigninScreen;