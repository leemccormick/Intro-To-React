import createDataContext from './createDataContext';
import myStoreApi from '../api/myStoreApi';
import { navigate } from "../navigationRef";

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
        case 'fetch_my_orders':
            return { errorMessage: '', myOrders: action.payload, totalMyOrders: action.payload.length };
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

// http://localhost:8081/api/mystoredemo/orders/pendingOrder
const fetchPendingOrder = (dispatch) => async () => {
    console.log('-------------📖OrderContext : fetchPendingOrder-------------');
    try {
        const response = await myStoreApi.get('/orders/pendingOrder');
        dispatch({ type: 'fetch_pending_order', payload: response.data });
    } catch (error) {
        handelEror(dispatch)(error, 'fetching pending order from server');
    }
};

// http://localhost:8081/api/mystoredemo/orders/addItemToCart?productId=33
const postAddItemToCart = (dispatch) => async (productId) => {
    console.log('-------------📖OrderContext : postAddItemToCart-------------');
    try {
        const response = await myStoreApi.post(`/orders/addItemToCart?productId=${productId}`);
        dispatch({ type: 'post_add_item_to_cart', payload: response.data });
    } catch (error) {
        handelEror(dispatch)(error, 'adding item to cart');
    }
};

// http://localhost:8081/api/mystoredemo/orders/updateItemQuantityInTheCart?orderId=48&orderItemId=190&quantity=88
const updateItemQuantityInTheCart = (dispatch) => async (orderId, orderItemId, quantity) => {
    console.log('-------------📖OrderContext : updateItemQuantityInTheCart-------------');
    try {
        const response = await myStoreApi.post(`/orders/updateItemQuantityInTheCart?orderId=${orderId}&orderItemId=${orderItemId}&quantity=${quantity}`);
        dispatch({ type: 'update_item_quantity_in_cart', payload: response.data })
    } catch (error) {
        handelEror(dispatch)(error, 'updating item quality in the cart.');
    }
};

// http://localhost:8081/api/mystoredemo/orders/deleteItemInTheCart?orderItemId=216&orderId=62
const deleteItemInTheCart = (dispatch) => async (orderId, orderItemId) => {
    console.log('-------------📖OrderContext : deleteItemInTheCart-------------');
    try {
        const response = await myStoreApi.delete(`/orders/deleteItemInTheCart?orderId=${orderId}&orderItemId=${orderItemId}`);
        dispatch({ type: 'delete_item_in_cart', payload: response.data })
    } catch (error) {
        handelEror(dispatch)(error, 'deleting item in the cart.');
    }
};

// http://localhost:8081/api/mystoredemo/orders/checkout
const checkout = (dispatch) => async (order) => {
    console.log('-------------📖OrderContext : checkout-------------');
    try {
        const response = await myStoreApi.post(`/orders/checkout`, order, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.data.response.status === 'success') {
            dispatch({ type: 'checkout', payload: response.data })
            navigate('Thankyou', { orderId: response.data.order.id, totalAmount: response.data.order.totalAmount });
        } else {
            handelEror(dispatch)(Error('Failed to check out.'), 'checking out.');
        }
    } catch (error) {
        handelEror(dispatch)(error, 'checking out.');
    }
};

export const { Provider, Context } = createDataContext(
    orderReducer,
    { fetchPendingOrder, postAddItemToCart, updateItemQuantityInTheCart, deleteItemInTheCart, checkout },
    { totalItemsInCart: 0, showCheckoutAction: false, pendingOrder: null, myOrders: [], totalMyOrders: 0, errorMessage: '' }
);