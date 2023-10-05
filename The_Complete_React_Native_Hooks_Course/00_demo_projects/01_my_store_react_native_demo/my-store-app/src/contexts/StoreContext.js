import createDataContext from './createDataContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { encode } from 'base-64';
// import { navigate } from '../navigationRef';
import myStoreApi from '../api/myStoreApi';

// TODO: Work more on this file tomorrow....
const storeReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_products':
            return { ...state, errorMessage: '', products: action.payload };
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const showProducts = (dispatch) => async () => {
    console.log('-------------StoreContext : showProducts-------------');
    // Do something with parameter1, parameter1, then call dispatch...
    try {
        console.log('🌍trying to sshowProducts');
        const response = await myStoreApi.get('/products');
        console.log('✅Sucessfully fetching products : ', response.data);
        dispatch({ type: 'fetch_products', payload: response.data });
    } catch (error) {
        console.error('❌Error fetching products...', error);
        dispatch({ type: 'error', payload: 'Something went wrong while fetching products from server!' });
    }
};

export const { Provider, Context } = createDataContext(
    storeReducer,
    { showProducts },
    { products: [], errorMessage: '' }
);