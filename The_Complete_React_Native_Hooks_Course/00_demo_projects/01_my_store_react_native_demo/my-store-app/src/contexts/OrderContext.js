import createDataContext from './createDataContext';
import myStoreApi from '../api/myStoreApi';

// TODO: Work more on this file tomorrow....
const orderReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_pending_order':
            return { errorMessage: '', totalItemsInCart: action.payload.totalItems, showCheckoutAction: action.payload.showCheckOutAction, pendingOrder: action.payload.order };
        case 'post_add_item_to_cart':
            return { errorMessage: '', totalItemsInCart: action.payload.totalItems, showCheckoutAction: action.payload.showCheckOutAction, pendingOrder: action.payload.order };
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const fetchPendingOrder = (dispatch) => async () => {
    console.log('-------------📖OrderContext : fetchPendingOrder-------------');
    try {
        console.log('🌍trying to fetchPendingOrder');
        const response = await myStoreApi.get('/orders/pendingOrder');
        console.log('✅Sucessfully fetch_pending_order: ', response.data);
        dispatch({ type: 'fetch_pending_order', payload: response.data });
    } catch (error) {
        console.error('❌Error fetching pending order...', error);
        dispatch({ type: 'error', payload: 'Something went wrong while fetching pending order from server!' });
    }
};

const postAddItemToCart = (dispatch) => async (productId) => {
    console.log('-------------📖OrderContext : postAddItemToCart-------------');
    try {
        console.log('🌍trying to postAddItemToCart');
        // const response = await myStoreApi.post('/orders/addItemToCart', {
        //     productId: productId
        // });
        const response = await myStoreApi.post(`/orders/addItemToCart?productId=${productId}`);
        console.log('✅Sucessfully postAddItemToCart : ', response.data);
        dispatch({ type: 'post_add_item_to_cart', payload: response.data });
    } catch (error) {
        console.error('❌Error postAddItemToCart...', error);
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
        dispatch({ type: 'error', payload: `Something went wrong while adding item to cart. ${errorMessage}` });
        // dispatch({ type: 'error', payload: 'Something went wrong while adding item to cart.' });
    }
};

export const { Provider, Context } = createDataContext(
    orderReducer,
    { fetchPendingOrder, postAddItemToCart },
    { totalItemsInCart: 0, showCheckoutAction: false, pendingOrder: null, errorMessage: '' }
);