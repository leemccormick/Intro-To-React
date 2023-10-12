import createDataContext from './createDataContext';
import myStoreApi from '../api/myStoreApi';
import errorHandler from '../utils/errorHandler';

const orderListReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_my_orders':
            return {
                errorMessage: '',
                selectedFilterStatus: 'All',
                totalOrderDescriptionToDisplay: action.payload.totalOrderDescriptionToDisplay,
                totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                orderListToDisplay: action.payload.orderListToDisplay,
                myOrders: action.payload.myOrders,
                totalMyOrders: action.payload.totalMyOrders,
                myPendingOrders: state.myPendingOrders,
                totalMyPendingOrders: state.totalMyPendingOrders,
                myProcessingOrders: state.myProcessingOrders,
                totalMyProcessingOrders: state.totalMyProcessingOrders,
                myShippedOrders: state.myShippedOrders,
                totalMyShippedOrders: state.totalMyShippedOrders,
                myDeliveredOrders: state.myDeliveredOrders,
                totalDeliveredOrders: state.totalDeliveredOrders,
                myCancelledOrders: state.myCancelledOrders,
                totalCancelledOrders: state.totalCancelledOrders,
            };
        case 'fetch_my_orders_with_status':
            switch (action.payload.selectedFilterStatus) {
                case 'Pending':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Pending Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        myOrders: state.myOrders,
                        totalMyOrders: state.totalMyOrders,
                        myPendingOrders: action.payload.orderListToDisplay,
                        totalMyPendingOrders: action.payload.totalOrdersToDisplay,
                        myProcessingOrders: state.myProcessingOrders,
                        totalMyProcessingOrders: state.totalMyProcessingOrders,
                        myShippedOrders: state.myShippedOrders,
                        totalMyShippedOrders: state.totalMyShippedOrders,
                        myDeliveredOrders: state.myDeliveredOrders,
                        totalDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalCancelledOrders: state.totalCancelledOrders,
                    };
                case 'Processing':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Processing Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        myOrders: state.myOrders,
                        totalMyOrders: state.totalMyOrders,
                        myPendingOrders: state.myPendingOrders,
                        totalMyPendingOrders: state.totalMyPendingOrders,
                        myProcessingOrders: action.payload.orderListToDisplay,
                        totalMyProcessingOrders: action.payload.totalOrdersToDisplay,
                        myShippedOrders: state.myShippedOrders,
                        totalMyShippedOrders: state.totalMyShippedOrders,
                        myDeliveredOrders: state.myDeliveredOrders,
                        totalDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalCancelledOrders: state.totalCancelledOrders,
                    };
                case 'Shipped':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Shipped Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        myOrders: state.myOrders,
                        totalMyOrders: state.totalMyOrders,
                        myPendingOrders: state.myPendingOrders,
                        totalMyPendingOrders: state.totalMyPendingOrders,
                        myProcessingOrders: state.myProcessingOrders,
                        totalMyProcessingOrders: state.totalMyProcessingOrders,
                        myShippedOrders: action.payload.orderListToDisplay,
                        totalMyShippedOrders: action.payload.totalOrdersToDisplay,
                        myDeliveredOrders: state.myDeliveredOrders,
                        totalDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalCancelledOrders: state.totalCancelledOrders,
                    };
                case 'Delivered':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Delivered Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        myOrders: state.myOrders,
                        totalMyOrders: state.totalMyOrders,
                        myPendingOrders: state.myPendingOrders,
                        totalMyPendingOrders: state.totalMyPendingOrders,
                        myProcessingOrders: state.myProcessingOrders,
                        totalMyProcessingOrders: state.totalMyProcessingOrders,
                        myShippedOrders: state.myShippedOrders,
                        totalMyShippedOrders: state.totalMyShippedOrders,
                        myDeliveredOrders: action.payload.orderListToDisplay,
                        totalDeliveredOrders: action.payload.totalOrdersToDisplay,
                        myCancelledOrders: state.myCancelledOrders,
                        totalCancelledOrders: state.totalCancelledOrders,
                    };
                case 'Cancelled':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Cancelled Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        myOrders: state.myOrders,
                        totalMyOrders: state.totalMyOrders,
                        myPendingOrders: state.myPendingOrders,
                        totalMyPendingOrders: state.totalMyPendingOrders,
                        myProcessingOrders: state.myProcessingOrders,
                        totalMyProcessingOrders: state.totalMyProcessingOrders,
                        myShippedOrders: state.myShippedOrders,
                        totalMyShippedOrders: state.totalMyShippedOrders,
                        myDeliveredOrders: state.myDeliveredOrders,
                        totalDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: action.payload.orderListToDisplay,
                        totalCancelledOrders: action.payload.totalOrdersToDisplay,
                    };
                default:
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: state.totalOrderDescriptionToDisplay,
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        myOrders: state.myOrders,
                        totalMyOrders: state.totalMyOrders,
                        myPendingOrders: state.myPendingOrders,
                        totalMyPendingOrders: state.totalMyPendingOrders,
                        myProcessingOrders: state.myProcessingOrders,
                        totalMyProcessingOrders: state.totalMyProcessingOrders,
                        myShippedOrders: state.myShippedOrders,
                        totalMyShippedOrders: state.totalMyShippedOrders,
                        myDeliveredOrders: state.myDeliveredOrders,
                        totalDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalCancelledOrders: state.totalCancelledOrders,
                    };
            }
        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

const filterStatusChanged = (dispatch) => async (filterStatus) => {
    try {
        console.log('-------------📖OrderListContext : filterStatusChanged-------------');
        if (filterStatus === 'All' || filterStatus === '') {
            fetchMyOrders(dispatch)();
        } else {
            fetchMyOrdersWithStatus(dispatch)(filterStatus);
        }
    } catch (error) {
        errorHandler(dispatch)(error, 'selecting filter status.');
    }
};

//http://localhost:8081/api/mystoredemo/orders/myOrders
const fetchMyOrders = (dispatch) => async () => {
    console.log('-------------📖OrderListContext : fetchMyOrders-------------');
    try {
        const response = await myStoreApi.get('/orders/myOrders');
        const payload = {
            totalOrderDescriptionToDisplay: 'Total Orders',
            totalOrdersToDisplay: response.data.length,
            orderListToDisplay: response.data,
            myOrders: response.data,
            totalMyOrders: response.data.length,
        };
        dispatch({ type: 'fetch_my_orders', payload: payload });
    } catch (error) {
        errorHandler(dispatch)(error, 'fetching my order history from server');
    }
};

// http://localhost:8081/api/mystoredemo/orders/myOrders?status=Shipped
const fetchMyOrdersWithStatus = (dispatch) => async (status) => {
    console.log('-------------📖OrderListContext : fetchMyOrdersWithStatus-------------');
    try {
        const response = await myStoreApi.get(`/orders/myOrders?status=${status}`);
        const payload = {
            selectedFilterStatus: status,
            totalOrdersToDisplay: response.data.length,
            orderListToDisplay: response.data
        }
        dispatch({ type: 'fetch_my_orders_with_status', payload: payload });
    } catch (error) {
        errorHandler(dispatch)(error, 'fetching my orders with status from server');
    }
};

export const { Provider, Context } = createDataContext(
    orderListReducer,
    { filterStatusChanged },
    {
        errorMessage: '',
        selectedFilterStatus: '',
        totalOrderDescriptionToDisplay: 'Total Orders',
        totalOrdersToDisplay: 0,
        orderListToDisplay: [],
        myOrders: [],
        totalMyOrders: 0,
        myPendingOrders: [],
        totalMyPendingOrders: 0,
        myProcessingOrders: [],
        totalMyProcessingOrders: 0,
        myShippedOrders: [],
        totalMyShippedOrders: 0,
        myDeliveredOrders: [],
        totalDeliveredOrders: 0,
        myCancelledOrders: [],
        totalCancelledOrders: 0,
    }
);