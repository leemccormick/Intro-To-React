import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log('-------------AuthForm-------------');
    console.log('AuthForm | email is : ' + email);
    console.log('AuthForm | password is : ' + password);
    console.log('AuthForm | headerText is : ' + headerText);
    console.log('AuthForm | errorMessage is : ' + errorMessage);
    console.log('AuthForm | onSubmit is : ' + onSubmit);
    console.log('AuthForm | submitButtonText is : ' + submitButtonText);

    return (<>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>

        <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        <Spacer />
        <Input
            secureTextEntry={true}
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
        />

        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

        <Spacer>
            <Button
                title={submitButtonText}
                onPress={() => onSubmit({ email, password })}
            />
        </Spacer>
    </>);
};

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        margin: 15,
        fontSize: 16
    }
});

export default AuthForm;