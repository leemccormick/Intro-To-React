import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import myStoreApi from '../api/myStoreApi';

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_products':
            return { ...state, errorMessage: '', products: action.payload.data, totalProducts: action.payload.totalProducts };
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const handelEror = (dispatch) => (error, actionDescription) => {
    let errorMessage;
    if (error.response) {
        errorMessage = error.response.data.message;
    } else if (error.request) {
        errorMessage = error.request;
    } else {
        errorMessage = error.message;
    }
    console.error('❌ Error ! ', actionDescription, error, errorMessage);
    dispatch({ type: 'error', payload: `Something went wrong while ${actionDescription}. ${errorMessage}` });
};

// http://localhost:8081/api/mystoredemo/products
const showProducts = (dispatch) => async () => {
    console.log('-------------📖StoreContext : showProducts-------------');
    try {
        const response = await myStoreApi.get('/products');
        const payload = {
            data: response.data,
            totalProducts: response.data.length,
        }
        dispatch({ type: 'fetch_products', payload: payload });
    } catch (error) {
        handelEror(dispatch)(error, 'fetching products from server');
    }
};

// http://localhost:8081/api/mystoredemo/products
const addProduct = (dispatch) => async ({ name, description, price, quantity }) => {
    console.log('-------------📖StoreContext : addProduct-------------');
    try {
        const product = { name, description, price, quantity };
        const response = await myStoreApi.post(`/products`, product, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const { status, code, message } = response.data;
        if (status.includes('success') && (code === 200)) {
            navigate('MainBusinessFlow');
        } else {
            handelEror(dispatch)(Error(`Failed to add product. ${message}`), 'adding new product to store');
        }
    } catch (error) {
        handelEror(dispatch)(error, 'adding new product to store');
    }
};

// http://localhost:8081/api/mystoredemo/products
const updateProduct = (dispatch) => async ({ product, name, description, price, quantity }) => {
    console.log('-------------📖StoreContext : updateProduct-------------');
    try {
        const existingProduct = { product };
        const requestData = {
            id: existingProduct.product.id
        };

        if (name !== existingProduct.product.name) {
            requestData.name = name;
        }

        if (description !== existingProduct.product.description) {
            requestData.description = description;
        }

        if (parseFloat(price) !== parseFloat(existingProduct.product.price)) {
            requestData.price = parseFloat(price);
        }

        if (parseInt(quantity) !== parseInt(existingProduct.product.quantity)) {
            requestData.quantity = parseInt(quantity);
        }

        const response = await myStoreApi.put(`/products`, requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const { status, code, message } = response.data;
        if (status.includes('success') && (code === 200)) {
            navigate('MainBusinessFlow');
        } else {
            console.log('Product addition failed:', response.data);
            handelEror(dispatch)(Error(`Failed to update product. ${message}`), 'update product');
        }
    } catch (error) {
        handelEror(dispatch)(error, 'update product');
    }
};

export const { Provider, Context } = createDataContext(
    storeReducer,
    { showProducts, addProduct, updateProduct },
    { products: [], totalProducts: 0, errorMessage: '' }
);