import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base-64';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { errorMessage: '', token: action.payload.token, currentUserDetails: action.payload.currentUserDetails };
        case 'signout':
            return { token: null, currentUserDetails: null, errorMessage: '' };
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const authenticate = (dispatch) => async ({ token }) => {
    try {
        const basicAuth = 'Basic ' + token;
        const response = await fetch('http://localhost:8081/api/mystoredemo/authentication', {
            method: 'GET',
            headers: {
                'Authorization': basicAuth
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        await AsyncStorage.setItem('token', token);
        dispatch({ type: 'signin', payload: { token: token, currentUserDetails: data } });

        if (data.hasSaleRole === true || data.hasAdminRole === true) {
            navigate('MainBusinessFlow');
        } else {
            navigate('Home');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        dispatch({ type: 'error', payload: `Something went wrong while authenticate user ! ${error}` });
    }
};

const tryLocalSignin = (dispatch) => async () => {
    console.log('-------------📖AuthContext : tryLocalSignin-------------');
    const token = await AsyncStorage.getItem('token');

    if (token) {
        await authenticate(dispatch)({ token });
    } else {
        navigate('Signin');
    }
};

const signin = (dispatch) => async ({ username, password }) => {
    console.log('-------------📖AuthContext : signin-------------');
    try {
        if (username !== '' && password !== '') {
            const token = encode(`${username}:${password}`);
            await authenticate(dispatch)({ token });
        } else {
            throw new Error('Username and Password are required for  sign in!');
        }
    } catch (error) {
        dispatch({ type: 'error', payload: `Something went wrong with sign in! ${error}` });
    }
};

const signout = (dispatch) => async () => {
    console.log('-------------📖AuthContext : signout-------------');
    try {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('Signin');
    } catch {
        dispatch({ type: 'error', payload: 'Something went wrong with sign out!' });
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { tryLocalSignin, signin, signout },
    { token: null, currentUserDetails: null, errorMessage: '' }
);