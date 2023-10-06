import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../contexts/AuthContext';
import { appStyles, SpacingView } from '../components/StyleGuide';
import { FontAwesome5 } from '@expo/vector-icons';

const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);

    console.log('-------------SigninScreen-------------');
    console.log('state | ', state);

    return (
        <View style={appStyles.primaryLightBackgroundColor}>
            <View style={[styles.container, appStyles.paddingStyle]}>
                <View style={appStyles.rowContainer}>
                    <FontAwesome5 style={appStyles.paddingStyle} name="store-alt" size={30} color={appStyles.secondaryDarkColor.color} />
                    <Text h1 style={[appStyles.paddingStyle, appStyles.headerStyle]}>MY STORE</Text>
                    <SpacingView />
                </View>

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