import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { encode } from 'base-64';
import { Context as AuthContext } from '../contexts/AuthContext';

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext);
    
    console.log('-------------SigninScreen-------------');
    console.log('state | ', state);
 
    return (<View style={styles.container}>
        <AuthForm
            headerText="Sign In for My Store"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
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
