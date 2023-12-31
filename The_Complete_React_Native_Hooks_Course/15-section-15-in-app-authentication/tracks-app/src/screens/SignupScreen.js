import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    console.log('-------------SignupScreen-------------');
    console.log('SignupScreen | state is : ' + state);
    console.log(state);

    return (<View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />

        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
        />

        <NavLink
            routeName="Signin"
            text="Already have an account? Sing in instead !"
        />
    </View>);
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;

/* NOTE : This is the code before using AuthForm and NavLink
const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log('-------------SignupScreen-------------');
    console.log('SignupScreen | state is : ' + state);
    console.log(state);
    console.log('SignupScreen | email is : ' + email);
    console.log('SignupScreen | password is : ' + password);

    return (<View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
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

        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}

        <Spacer>
            <Button
                title='Sign up'
                onPress={() => signup({ email, password })}
            />
        </Spacer>

        <TouchableOpacity onPress={() => navigation.navigate('Signin')} >
            <Spacer>
                <Text style={styles.link}>Already have an account? Sing in instead !</Text>
            </Spacer>
        </TouchableOpacity>
    </View>);
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage: {
        color: 'red',
        margin: 15
    },
    link: {
        color: 'blue'
    }
});

export default SignupScreen;
*/