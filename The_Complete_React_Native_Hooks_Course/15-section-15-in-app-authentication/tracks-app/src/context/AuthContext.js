import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({ email, password }) => {
        try {
            // Make api reqiest to sign up with that email and password
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);

            // If we sign up, modify our state and say that we are authenticated
            // dispatch({ type: someType, payload: {} });
        } catch (err) {
            console.log(err.response.data);
            // If sign up fails, we probably need to reflect an error message somewhere.
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // Try to signin

        // Handle success by updating state

        // Handle failure by showing error message (somehow)
        // dispatch({ type: someType, payload: {} });
    };
};

const signout = (dispatch) => {
    return () => {
        // Somehow sign out !!!
        // dispatch({ type: someType, payload: {} });
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { isSignedIn: false }
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