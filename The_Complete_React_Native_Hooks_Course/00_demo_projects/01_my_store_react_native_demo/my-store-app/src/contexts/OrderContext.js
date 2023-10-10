import createDataContext from './createDataContext';
import myStoreApi from '../api/myStoreApi';
import { navigate } from "../navigationRef";

// TODO: Work more on this file tomorrow....
const orderReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_pending_order':
            return { errorMessage: '', totalItemsInCart: action.payload.totalItems, showCheckoutAction: action.payload.showCheckOutAction, pendingOrder: action.payload.order };
        case 'post_add_item_to_cart':
            return { errorMessage: '', totalItemsInCart: action.payload.totalItems, showCheckoutAction: action.payload.showCheckOutAction, pendingOrder: action.payload.order };
        case 'update_item_quantity_in_cart':
            return { errorMessage: '', totalItemsInCart: action.payload.totalItems, showCheckoutAction: action.payload.showCheckOutAction, pendingOrder: action.payload.order };
        case 'delete_item_in_cart':
            return { errorMessage: '', totalItemsInCart: action.payload.totalItems, showCheckoutAction: action.payload.showCheckOutAction, pendingOrder: action.payload.order };

        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const handelEror = (dispatch) => (error, actionDescription) => {
    console.error('❌Error ! ', actionDescription, error);
    let errorMessage;
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        errorMessage = error.response.data.message;
        console.error('❌Error response from server:', error.response.data);
        console.error('❌Status code:', error.response.status);
    } else if (error.request) {
        // The request was made but no response was received
        errorMessage = error.request;
        console.error('❌No response received:', error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.error('❌Error setting up request:', error.message);
        errorMessage = error.message;
    }
    dispatch({ type: 'error', payload: `Something went wrong while ${actionDescription}. ${errorMessage}` });
};

const fetchPendingOrder = (dispatch) => async () => {
    console.log('-------------📖OrderContext : fetchPendingOrder-------------');
    try {
        console.log('🌍trying to fetchPendingOrder');
        const response = await myStoreApi.get('/orders/pendingOrder');
        console.log('✅Sucessfully fetch_pending_order: ', response.data);
        dispatch({ type: 'fetch_pending_order', payload: response.data });
    } catch (error) {
        handelEror(dispatch)(error, 'fetching pending order from server');
    }
};

// http://localhost:8081/api/mystoredemo/orders/addItemToCart?productId=33
const postAddItemToCart = (dispatch) => async (productId) => {
    console.log('-------------📖OrderContext : postAddItemToCart-------------');
    try {
        console.log('🌍trying to postAddItemToCart');
        const response = await myStoreApi.post(`/orders/addItemToCart?productId=${productId}`);
        console.log('✅Sucessfully postAddItemToCart : ', response.data);
        dispatch({ type: 'post_add_item_to_cart', payload: response.data });
    } catch (error) {
        handelEror(dispatch)(error, 'adding item to cart');
    }
};

// http://localhost:8081/api/mystoredemo/orders/updateItemQuantityInTheCart?orderId=48&orderItemId=190&quantity=88
const updateItemQuantityInTheCart = (dispatch) => async (orderId, orderItemId, quantity) => {
    console.log('-------------📖OrderContext : updateItemQuantityInTheCart-------------');
    try {
        console.log('🌍trying to updateItemQuantityInTheCart orderId:', orderId);
        console.log('🌍trying to updateItemQuantityInTheCart orderItemId:', orderItemId);
        console.log('🌍trying to updateItemQuantityInTheCart quantity:', quantity);
        const response = await myStoreApi.post(`/orders/updateItemQuantityInTheCart?orderId=${orderId}&orderItemId=${orderItemId}&quantity=${quantity}`);
        console.log('✅Sucessfully updateItemQuantityInTheCart : ', response.data);
        dispatch({ type: 'update_item_quantity_in_cart', payload: response.data })
    } catch (error) {
        handelEror(dispatch)(error, 'updating item quality in the cart.'); // Corrected invocation
    }
};

// http://localhost:8081/api/mystoredemo/orders/deleteItemInTheCart?orderItemId=216&orderId=62
const deleteItemInTheCart = (dispatch) => async (orderId, orderItemId) => {
    console.log('-------------📖OrderContext : deleteItemInTheCart-------------');
    try {
        console.log('🌍trying to deleteItemInTheCart orderId:', orderId);
        console.log('🌍trying to deleteItemInTheCart orderItemId:', orderItemId);
        const response = await myStoreApi.delete(`/orders/deleteItemInTheCart?orderId=${orderId}&orderItemId=${orderItemId}`);
        console.log('✅Sucessfully deleteItemInTheCart : ', response.data);
        dispatch({ type: 'delete_item_in_cart', payload: response.data })
    } catch (error) {
        // handelEror(dispatch)(error, 'update item quality in the cart.');
        handelEror(dispatch)(error, 'deleting item in the cart.'); // Corrected invocation
    }
};

// http://localhost:8081/api/mystoredemo/orders/checkout
const checkout = (dispatch) => async (order) => {
    console.log('-------------📖OrderContext : checkout-------------');
    try {
        console.log('🌍trying to checkout order:', order);
        const response = await myStoreApi.post(`/orders/checkout`, order, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('✅Sucessfully checkout : ', response.data);

        if (response.data.response.status === 'success') {
            dispatch({ type: 'checkout', payload: response.data })
            navigate('Thankyou', { orderId: response.data.order.id, totalAmount: response.data.order.totalAmount });
        } else {
            handelEror(dispatch)(Error('Failed to check out.'), 'checking out.');
        }
    } catch (error) {
        handelEror(dispatch)(error, 'checking out.'); // Corrected invocation
    }
};

export const { Provider, Context } = createDataContext(
    orderReducer,
    { fetchPendingOrder, postAddItemToCart, updateItemQuantityInTheCart, deleteItemInTheCart, checkout },
    { totalItemsInCart: 0, showCheckoutAction: false, pendingOrder: null, errorMessage: '' }
);