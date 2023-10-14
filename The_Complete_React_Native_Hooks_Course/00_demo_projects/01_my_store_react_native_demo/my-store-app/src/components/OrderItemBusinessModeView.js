import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { EndLineView, appStyles } from './StyleGuide';
import { StatusIcon, TabIconStatus } from './StatusIcon';
import { navigateToReviewScreen } from '../navigationRef';
import { Context as OrderListContext } from '../contexts/OrderListContext';

const OrderItemBusinessModeView = ({ order, hasSaleRole, hasAdminRole }) => {
    const { updateOrderWithStatus } = useContext(OrderListContext);

    console.log('-------------OrderItemBusinessModeView-------------');
    console.log('order |', order);
    console.log('hasSaleRole |', hasSaleRole);
    console.log('hasAdminRole |', hasAdminRole);

    return (<View style={[styles.container, appStyles.boxWithShadow]}>
        <View style={styles.detailContainer}>
            <StatusIcon status={order.status} />
            <Text h5 style={appStyles.smallestSubtitleStyle}>Order ID : {order.id} </Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>Amount : ${order.totalAmount} </Text>
            <EndLineView />
            <Text h5 style={appStyles.smallestTitleStyle}>Customer Info : </Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>Name : {`${order.customer.firstName} ${order.customer.lastName}`}</Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>Email : {`${order.customer.email} ${order.customer.lastName}`}</Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>Tel : {`${order.customer.phoneNumber} ${order.customer.lastName}`}</Text>
            <EndLineView />
            <TabIconStatus
                infoOnPress={() => navigateToReviewScreen({ order })}
                infoSelected={order.status === 'All'}
                infoDisabled={false}
                pendingStatusSelected={order.status === 'Pending'}
                pendingStatusDisabled={true}
                processingStatusOnPress={() => updateOrderWithStatus('Processing', order)}
                processingStatusSelected={order.status === 'Processing'}
                processingStatusDisabled={
                    (!((hasAdminRole || hasSaleRole) && (order.status !== 'Processing')) || order.status === 'Pending' || order.status === 'Cancelled' || order.status === 'Delivered')
                }
                shippedStatusOnPress={() => updateOrderWithStatus('Shipped', order)}
                shippedStatusSelected={order.status === 'Shipped'}
                shippedStatusDisabled={
                    (!((hasAdminRole || hasSaleRole) && (order.status !== 'Shipped')) || order.status === 'Pending' || order.status === 'Cancelled' || order.status === 'Delivered')
                }
                deliveredStatusOnPress={() => updateOrderWithStatus('Delivered', order)}
                deliveredStatusSelected={order.status === 'Delivered'}
                deliveredStatusDisabled={
                    (!((hasAdminRole || hasSaleRole) && (order.status !== 'Delivered')) || (order.status === 'Pending') || order.status === 'Cancelled')
                }
                cancelledStatusOnPress={() => updateOrderWithStatus('Cancelled', order)}
                cancelledStatusSelected={order.status === 'Cancelled'}
                cancelledStatusDisabled={
                    (!(hasAdminRole && (order.status !== 'Cancelled')) || (order.status === 'Pending') || (order.status === 'Delivered'))
                }
            />
        </View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 5,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
});

export default OrderItemBusinessModeView;
