import React, { useState } from 'react';
import { Text, Input } from 'react-native-elements'
import Spacer from './Spacer';
import { appStyles, AppButton, ErrorView } from './StyleGuide';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log('-------------AuthForm-------------');
    console.log('AuthForm | username is : ' + username);
    console.log('AuthForm | password is : ' + password);
    console.log('AuthForm | headerText is : ' + headerText);
    console.log('AuthForm | errorMessage is : ' + errorMessage);
    console.log('AuthForm | onSubmit is : ' + onSubmit);
    console.log('AuthForm | submitButtonText is : ' + submitButtonText);

    return (<>
        <Spacer>
            <Text h3 style={appStyles.titleStyle}>{headerText}</Text>
        </Spacer>

        <Input
            label="Username"
            value={username}
            onChangeText={setUsername}
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

        {errorMessage ? <ErrorView errorMessage={errorMessage} /> : null}

        <Spacer>
            <AppButton
                title={submitButtonText}
                onPress={() => onSubmit({ username, password })}
            />
        </Spacer>
    </>);
};

export default AuthForm;