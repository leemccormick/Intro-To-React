import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import myStoreApi from '../api/myStoreApi';
import errorHandler from "../utils/errorHandler";

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_products':
            return { ...state, errorMessage: '', products: action.payload.data, totalProducts: action.payload.totalProducts };
        case 'fetch_sale_info':
            return { ...state, errorMessage: '', saleInfo: action.payload };
        case 'fetch_users':
            return { ...state, errorMessage: '', users: action.payload, usersFiltersByRole: action.payload, selectedFilterUserRole: 'All' };
        case 'fetch_users_by_role':
            return { ...state, errorMessage: '', users: action.payload.users, usersFiltersByRole: action.payload.usersFiltersByRole, selectedFilterUserRole: action.payload.selectedFilterUserRole };
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const filterRoleChanged = (dispatch) => async (filterRole) => {
    try {
        if (filterRole === 'All' || filterRole === '') {
            fetchUsers(dispatch)();
        } else {
            fetchUsersByRole(dispatch)(filterRole);
        }
    } catch (error) {
        errorHandler(dispatch)(error, 'selecting filter role.');
    }
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
        errorHandler(dispatch)(error, 'fetching products from server');
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
        errorHandler(dispatch)(error, 'adding new product to store');
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
        errorHandler(dispatch)(error, 'update product');
    }
};

// http://localhost:8081/api/mystoredemo/info
const fetchSaleInfo = (dispatch) => async () => {
    console.log('-------------📖StoreContext : fetchSaleInfo-------------');
    try {
        const response = await myStoreApi.get('/info');
        dispatch({ type: 'fetch_sale_info', payload: response.data });
    } catch (error) {
        errorHandler(dispatch)(error, 'fetching sale info from server');
    }
};

// http://localhost:8081/api/mystoredemo/users
const fetchUsers = (dispatch) => async () => {
    console.log('-------------📖StoreContext : fetchUsers-------------');
    try {
        const response = await myStoreApi.get('/users');
        dispatch({ type: 'fetch_users', payload: response.data });
    } catch (error) {
        errorHandler(dispatch)(error, 'fetching users from server');
    }
};

// http://localhost:8081/api/mystoredemo/users
const fetchUsersByRole = (dispatch) => async (filterRole) => {
    console.log('-------------📖StoreContext : fetchUsersByRole-------------');
    try {
        const response = await myStoreApi.get('/users');
        const usersFiltersByRole = response.data.filter(user => user.roles.toLowerCase().includes(filterRole.toLowerCase()));
        const payload = {
            selectedFilterUserRole: filterRole,
            users: response.data,
            usersFiltersByRole: usersFiltersByRole
        }
        dispatch({ type: 'fetch_users_by_role', payload: payload });
    } catch (error) {
        errorHandler(dispatch)(error, 'fetching users with role from server');
    }
};

export const { Provider, Context } = createDataContext(
    storeReducer,
    { showProducts, addProduct, updateProduct, fetchSaleInfo, fetchUsers, filterRoleChanged },
    { products: [], totalProducts: 0, errorMessage: '', saleInfo: null, users: [], usersFiltersByRole: [], selectedFilterUserRole: 'All' }
);