import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode } from 'base-64';
import { navigate } from "../navigationRef";

// TODO: Continue logout tomorrow.....
const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return { errorMessage: '', token: action.payload };

        //  return { errorMessage: '', username: action.payload.username, password: action.payload.password };
        // case 'signout':
        //     return { username: null, password: null, errorMessage: '' };
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

// const tryLocalSignin = (dispatch) => async () => {
//     console.log('-------------AuthContext : tryLocalSignin-------------');
//     // Check if user have token store in the app, so we can navigate to the mainFlow or loginFlow
//     const token = await AsyncStorage.getItem('token');
//     console.log('🌍trying to signin with local token : ', token);

//     if (token) {
//         dispatch({ type: 'signin', payload: token });
//         navigate('Home');
//     } else {
//         navigate('Singin');
//     }
// };


const signin = (dispatch) => async ({ username, password }) => {
    console.log('-------------AuthContext : signin-------------');
    // Do something with parameter1, parameter1, then call dispatch...
    try {
        console.log('🌍trying to signin with username : ', username);
        console.log('🌍trying to signin with password : ', password);

        const basicAuthToken = encode(`${username}:${password}`);
        await AsyncStorage.setItem('token', basicAuthToken); // To store token as UserDefaults in iOS
        // await AsyncStorage.setItem('username', username); // To store token as UserDefaults in iOS
        // await AsyncStorage.setItem('password', password); // To store token as UserDefaults in iOS

        console.log('✅Sucessfully signin with username and password');

        // dispatch({ type: 'signin', payload:  { username, password } });
        dispatch({ type: 'signin', payload: basicAuthToken });

        navigate('Home');
    } catch (error) {
        console.error('❌Error signin...', error);
        // console.error(error);

        dispatch({ type: 'error', payload: 'Something went wrong with sign in!' });

    }
};

// const signout = (dispatch) => async () => {
//     console.log('-------------AuthContext : signout-------------');
//     try {
//         console.log('🌍trying to signout...');
//         // Somehow sign out by removing token from AsyncStorage and navigate back to login flow !!!
//         await AsyncStorage.removeItem('username');
//         await AsyncStorage.removeItem('password');

//         dispatch({ type: 'signout' });
//         navigate('Signin');
//     } catch {
//         console.error('❌Error signing out...');
//         dispatch({ type: 'error', payload: 'Something went wrong with sign out!' });
//     }
// };

// export const { Provider, Context } = createDataContext(
//     authReducer,
//     { signin },
//     { username: null, password: null, errorMessage: '' }
// );

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin },
    { token: null, errorMessage: '' }
);