import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base-64';
import { navigate } from "../navigationRef";
import errorHandler from "../utils/errorHandler";
import { baseUrl } from "../api/myStoreApi";

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

        const response = await fetch(`${baseUrl}/authentication`, {
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
        errorHandler(dispatch)(error, 'authenticate user');
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
        errorHandler(dispatch)(error, 'sign in');
    }
};

const signout = (dispatch) => async () => {
    console.log('-------------📖AuthContext : signout-------------');
    try {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('Signin');
    } catch {
        errorHandler(dispatch)(error, 'sign out');
    }
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { tryLocalSignin, signin, signout },
    { token: null, currentUserDetails: null, errorMessage: '' }
);