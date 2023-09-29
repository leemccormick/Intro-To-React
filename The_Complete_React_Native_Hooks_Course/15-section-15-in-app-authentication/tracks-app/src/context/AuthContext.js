import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    console.log('-------------AuthContext : tryLocalSignin-------------');
    // Check if user have token store in the app, so we can navigate to the mainFlow or loginFlow
    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('Singup');
    }
};

const clearErrorMessage = (dispatch) => () => {
    console.log('-------------AuthContext : clearErrorMessage-------------');
    dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ email, password }) => {
    console.log('-------------AuthContext : signup-------------');
    try {
        // Make api reqiest to sign up with that email and password
        const response = await trackerApi.post('/signup', { email, password });
        console.log('✅Sucessfully with response data : ');
        console.log(response.data);

        await AsyncStorage.setItem('token', response.data.token); // To store token as UserDefaults in iOS
        dispatch({ type: 'signin', payload: response.data.token }); // If we sign up, modify our state and say that we are authenticated
        navigate('TrackList'); // To use navigationRef.js to navigate to main flow, in App.js, we need to pass ref to App() Element
    } catch (err) {
        console.log('❌Error with response data : ');
        console.log(err.response.data);

        // If sign up fails, we probably need to reflect an error message somewhere.
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up!' });
    }
};

const signin = (dispatch) => async ({ email, password }) => {
    console.log('-------------AuthContext : signin-------------');
    try {
        // Try to signin with api
        const response = await trackerApi.post('/signin', { email, password });
        console.log('✅Sucessfully with response data : ');
        console.log(response.data);

        // Handle success by updating state, only use the same dispatch type as sign up because doing the same thing.
        await AsyncStorage.setItem('token', response.data.token); // To store token as UserDefaults in iOS
        dispatch({ type: 'signin', payload: response.data.token }); // If we sign up, modify our state and say that we are authenticated
        navigate('TrackList'); // To use navigationRef.js to navigate to main flow, in App.js, we need to pass ref to App() Element
    } catch (err) {
        console.log('❌Error with response data : ');
        console.log(err.response.data);

        // Handle failure by showing error message (somehow)
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in!' });
    }
};

const signout = (dispatch) => async () => {
    console.log('-------------AuthContext : signout-------------');
    // Somehow sign out by removing token from AsyncStorage and navigate back to login flow !!!
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);

/* NOTE : Demo Code to create context
import createDataContext from "./createDataContext";

const demoReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const someMethod = (dispatch) => {
    return ({parameter1, parameter2}) => {
        // Do something with parameter1, parameter1, then call dispatch...
        dispatch({type: someType, payload: {}});
    };
};

export const { Provider, Context } = createDataContext(
    demoReducer,
    {someMethod},
    { isSignedIn: false }
);
*/