import createDataContext from './createDataContext';
import myStoreApi from '../api/myStoreApi';
import errorHandler from '../utils/errorHandler';
import useCurrentUser from '../hooks/useCurrentUser';

// TODO: Work on update function to update new list here....
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
        case 'fetch_all_orders':
            return {
                errorMessage: '',
                selectedFilterStatus: 'All',
                totalOrderDescriptionToDisplay: action.payload.totalOrderDescriptionToDisplay,
                totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                orderListToDisplay: action.payload.orderListToDisplay,
                allOrders: action.payload.orderListToDisplay,
                totalAllOrders: action.payload.totalOrdersToDisplay
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
                        totalMyDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalMyCancelledOrders: state.totalCancelledOrders,
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
                        totalMyDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalMyCancelledOrders: state.totalCancelledOrders,
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
                        totalMyDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalMyCancelledOrders: state.totalCancelledOrders,
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
                        totalMyDeliveredOrders: action.payload.totalOrdersToDisplay,
                        myCancelledOrders: state.myCancelledOrders,
                        totalMyCancelledOrders: state.totalCancelledOrders,
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
                        totalMyDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: action.payload.orderListToDisplay,
                        totalMyCancelledOrders: action.payload.totalOrdersToDisplay,
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
                        totalMyDeliveredOrders: state.totalDeliveredOrders,
                        myCancelledOrders: state.myCancelledOrders,
                        totalMyCancelledOrders: state.totalCancelledOrders,
                    };
            }
        case 'fetch_all_orders_with_status':
            switch (action.payload.selectedFilterStatus) {
                case 'Pending':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Pending Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        allPendingOrders: action.payload.orderListToDisplay,
                        totalAllPendingOrders: action.payload.totalOrdersToDisplay
                    };
                case 'Processing':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Processing Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        allProcessingOrders: action.payload.orderListToDisplay,
                        totalAllProcessingOrders: action.payload.totalOrdersToDisplay
                    };
                case 'Shipped':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Shipped Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        allShippedOrders: action.payload.orderListToDisplay,
                        totalAllShippedOrders: action.payload.totalOrdersToDisplay
                    };
                case 'Delivered':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Delivered Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        allDeliveredOrders: action.payload.orderListToDisplay,
                        totalAllDeliveredOrders: action.payload.totalOrdersToDisplay,
                    };
                case 'Cancelled':
                    return {
                        errorMessage: '',
                        selectedFilterStatus: action.payload.selectedFilterStatus,
                        totalOrderDescriptionToDisplay: 'Total Cancelled Orders',
                        totalOrdersToDisplay: action.payload.totalOrdersToDisplay,
                        orderListToDisplay: action.payload.orderListToDisplay,
                        allCancelledOrders: action.payload.orderListToDisplay,
                        totalAllCancelledOrders: action.payload.totalOrdersToDisplay
                    };
                default:
                    return state;
            }

        // TODO: Work on update screen here.....
        case 'update_order_status':
            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  reducer payload', action.payload);
            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  reducer payload', action.payload.statusToUpdate);
            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  reducer payload', action.payload.orderToUpdate);
            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  reducer payload', action.payload.orderToUpdate.status);
            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  reducer payload', action.payload.orderToUpdate.id);



            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  TODO: UPDATE STATE HERE......., make sure to find the order in all list and original order list by orderToUpdate.status --> delete own data and insert new data on those 2 list.');

            // statusToUpdate: status,
            // orderToUpdate: order
            switch (action.payload.orderToUpdate.status) {
                case 'Processing':
                    switch (action.payload.statusToUpdate) {
                        // case 'Processing':
                        //     return state;
                        case 'Shipped':
                            return {
                                ...state,
                                totalOrdersToDisplay: 0,
                                orderListToDisplay: [],
                                allOrders: state.allOrders.filter(order => order.id !== orderToUpdate.id),
                                totalAllOrders: 0,
                                allShippedOrders: state.allOrders.filter(order => order.id !== orderToUpdate.id),
                                totalAllShippedOrders: 0,
                                locations: [...state.locations, action.payload]
                            };
                        case 'Delivered':
                            return state;
                        case 'Cancelled':
                            return state;
                        default:
                            return state;
                    }
                case 'Shipped':
                    return {
                        ...state,
                        totalOrdersToDisplay: 0,
                        orderListToDisplay: [],
                        allOrders: [],
                        totalAllOrders: 0,
                        locations: [...state.locations, action.payload]
                    };
                case 'Delivered':
                    return {
                        ...state,
                        totalOrdersToDisplay: 0,
                        orderListToDisplay: [],
                        allOrders: [],
                        totalAllOrders: 0,
                        locations: [...state.locations, action.payload]
                    };
                case 'Cancelled':
                    return {
                        ...state,
                        totalOrdersToDisplay: 0,
                        orderListToDisplay: [],
                        allOrders: [],
                        totalAllOrders: 0,
                        locations: [...state.locations, action.payload]
                    };
                default:
                    return state;
            }



        case 'error':
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

// const [fullName, rolesDescription, hasCustomerRole, hasSaleRole, hasAdminRole] = useCurrentUser();

const filterStatusChanged = (dispatch) => async (filterStatus, businessMode) => {
    try {
        console.log('-------------📖OrderListContext : filterStatusChanged-------------');

        console.log('📖📖📖📖📖📖📖📖businessMode, ', businessMode === true);
        console.log('📖📖📖📖📖📖📖📖businessMode, ', businessMode);
        console.log('📖📖📖📖📖📖📖📖 bfilterStatus, ', filterStatus);

        // console.log('📖📖📖📖📖📖📖📖 hasAdminRole, ', hasAdminRole);
        // console.log('📖📖📖📖📖📖📖📖 hasSaleRole, ', hasSaleRole);

        if (filterStatus === 'All' || filterStatus === '') {
            if (businessMode) {
                fetchAllOrders(dispatch)();
            } else {
                fetchMyOrders(dispatch)();
            }
        } else {
            console.log('📖📖📖📖📖📖📖📖businessMode, 📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode', businessMode);

            if (businessMode) {
                //fetchAllOrdersWithStatus(dispatch)(filterStatus);

                console.log('248📖📖📖📖📖📖📖📖businessMode, 📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode', businessMode);

                fetchAllOrdersWithStatus(dispatch)(filterStatus);


            } else {
                fetchMyOrdersWithStatus(dispatch)(filterStatus);
            }
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

//http://localhost:8081/api/mystoredemo/orders/all
const fetchAllOrders = (dispatch) => async () => {
    console.log('-------------📖OrderListContext : fetchAllOrders-------------');
    try {
        const response = await myStoreApi.get('/orders/all');
        const payload = {
            totalOrderDescriptionToDisplay: 'Total Orders',
            totalOrdersToDisplay: response.data.length,
            orderListToDisplay: response.data
        };
        dispatch({ type: 'fetch_all_orders', payload: payload });
    } catch (error) {
        errorHandler(dispatch)(error, 'fetching all orders history from server');
    }
};

// http://localhost:8081/api/mystoredemo/orders/all?status=cancelled
const fetchAllOrdersWithStatus = (dispatch) => async (status) => {
    console.log('-------------📖OrderListContext : fetchAllOrdersWithStatus-------------');
    try {
        const response = await myStoreApi.get(`/orders/all?status=${status}`);


        console.log('319📖📖📖📖📖📖📖📖businessMode, 📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode📖📖📖📖📖📖📖📖businessMode', response.data);

        const payload = {
            selectedFilterStatus: status,
            totalOrdersToDisplay: response.data.length,
            orderListToDisplay: response.data
        }
        dispatch({ type: 'fetch_all_orders_with_status', payload: payload });
    } catch (error) {
        errorHandler(dispatch)(error, 'fetching all orders with status from server');
    }
};

// TODO: Work on update screen here.....
// http://localhost:8081/api/mystoredemo/orders/updateOrderStatusToProcessing?orderId=0000
// http://localhost:8081/api/mystoredemo/orders/updateOrderStatusToShipped?orderId=29
// http://localhost:8081/api/mystoredemo/orders/updateOrderStatusToDelivered?orderId=54
// http://localhost:8081/api/mystoredemo/orders/updateOrderStatusToCancelled?orderId=58
const updateOrderWithStatus = (dispatch) => async (status, order) => {
    console.log('-------------📖OrderListContext : updateOrderWithStatus-------------');
    try {

        const { orderId } = order.id;

        console.log(' 📖📖📖📖📖📖📖📖 status', status);
        console.log(' 📖📖📖📖📖📖📖📖 order', order);
        console.log(' 📖📖📖📖📖📖📖📖 order.id', order.id);

        console.log(' 📖📖📖📖📖📖📖📖 orderId', orderId);


        let updateOrderUrl;


        switch (status) {
            case 'Processing':
                console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 status status status', { status });

                updateOrderUrl = `/orders/updateOrderStatusToProcessing?orderId=${order.id}`;
                break;
            case 'Shipped':
                updateOrderUrl = `/orders/updateOrderStatusToShipped?orderId=${order.id}`;
                break;

            case 'Delivered':
                updateOrderUrl = `/orders/updateOrderStatusToDelivered?orderId=${order.id}`;
                break;

            case 'Cancelled':
                updateOrderUrl = `/orders/updateOrderStatusToCancelled?orderId=${order.id}`;
                break;

            default:
                break;
        }

        if (updateOrderUrl) {
            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 updateOrderUrl', { updateOrderUrl });
            const response = await myStoreApi.put(updateOrderUrl);




            console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅ response.data', response.data);


            if (response.data.status === 'success' && response.data.code === 200) {
                console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  385response.data', response.data.status === 'success');

                const payload = {
                    statusToUpdate: status,
                    orderToUpdate: order
                }

                console.log(' 📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 ✅✅✅✅✅  payload', payload);

                // fetchAllOrders(dispatch)();
                // fetchAllOrdersWithStatus(dispatch)(statusToUpdate);
                // fetchAllOrdersWithStatus(dispatch)(order.status);
                // filterStatusChanged('All', );
                // filterStatusChanged(dispatch)('All', true);

                await fetchAllOrders(dispatch)();
                await fetchAllOrdersWithStatus(dispatch)(statusToUpdate);
                await fetchAllOrdersWithStatus(dispatch)(order.status);

                //    dispatch({ type: 'update_order_status', payload: payload });

            } else {
                throw new Error(`Something went wrong, ${response.data.message}`);
            }
        } else {
            console.log(' ❌❌❌❌❌📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖📖 updateOrderUrl', { updateOrderUrl });
            throw new Error('Request is invalid, please try again.');
        }

        // const response = await myStoreApi.put(`/orders/all?status=${status}`);
        //   const response = await myStoreApi.put(`/orders/updateOrderStatusToProcessing?orderId=${orderId}`);

    } catch (error) {
        errorHandler(dispatch)(error, 'updating order status');
    }
};

export const { Provider, Context } = createDataContext(
    orderListReducer,
    { filterStatusChanged, updateOrderWithStatus },
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
        totalMyDeliveredOrders: 0,
        myCancelledOrders: [],
        totalMyCancelledOrders: 0,
        allOrders: [],
        totalAllOrders: 0,
        allPendingOrders: [],
        totalAllPendingOrders: 0,
        allProcessingOrders: [],
        totalAllProcessingOrders: 0,
        allShippedOrders: [],
        totalAllShippedOrders: 0,
        allDeliveredOrders: [],
        totalAllDeliveredOrders: 0,
        allCancelledOrders: [],
        totalAllCancelledOrders: 0
    }
);