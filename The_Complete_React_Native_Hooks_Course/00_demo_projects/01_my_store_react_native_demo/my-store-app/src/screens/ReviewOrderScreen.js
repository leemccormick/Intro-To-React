import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { appStyles, EndLineView, SpacingView } from '../components/StyleGuide';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckoutItemView from '../components/CheckoutItemView';
import { StatusIcon, TabIconStatus, InfoIcon, StatusInfoDetails } from '../components/StatusIcon';
import useCurrentUser from '../hooks/useCurrentUser';

//TODO: Add functionality to update order status api for admin and sale on this screen.
const ReviewOrderScreen = ({ route }) => {
    const { order, businnessFlow = false } = route.params;
    const theOrder = businnessFlow ? order.order : order.item;
    const [fullName, rolesDescription, hasCustomerRole, hasSaleRole, hasAdminRole] = useCurrentUser();
    const [showStatusInfoDetails, setShowStatusInfoDetails] = useState(false);

    console.log('-------------ReviewOrderScreen-------------');
    console.log('order | ', order);
    console.log('businnessFlow | ', businnessFlow);

    const OrderInfoSection = () => {
        const orderId = theOrder.id;
        const customerName = `${theOrder.customer.firstName} ${theOrder.customer.lastName}`;

        return (<>
            <StatusIcon status={theOrder.status} />
            <Text h5 style={[appStyles.subtitleStyle]}> Order ID : {orderId}</Text>
            <Text h5 style={[appStyles.subtitleStyle]}> Customer Name : {customerName}</Text>
        </>);
    };

    const TotalSection = () => {
        return (<>
            <View style={appStyles.rowCenterContainer}>
                <FontAwesome5 name="money-check-alt" size={24} color={appStyles.secondaryDarkColor.color} />
                <SpacingView />
                <Text h5 style={[appStyles.titleStyle]}> Total : ${theOrder.totalAmount}</Text>
                <SpacingView />
            </View>
        </>);
    };

    const ManageStatusSection = () => {
        if (businnessFlow) {
            return (<>
                <View style={appStyles.rowFlexStartContainer}>
                    <Text h5 style={[appStyles.smallTitleStyle]}> Manage Order Status </Text>
                    <InfoIcon
                        description='Status Info'
                        onPress={() => {
                            console.log('info pressed');
                            setShowStatusInfoDetails(!showStatusInfoDetails);
                        }}
                        isSelected={!showStatusInfoDetails}
                        showDescription={false}
                        disabled={false}
                    />
                </View>
                <SpacingView />

                <TabIconStatus
                    showInfo={false}
                    pendingStatusOnPress={() => { console.log('all pressed') }}
                    pendingStatusSelected={theOrder.status === 'Pending'}
                    pendingStatusDisabled={() => disabledIcon('Pending')}
                    processingStatusOnPress={() => { console.log('proccessing pressed') }}
                    processingStatusSelected={theOrder.status === 'Processing'}
                    processingStatusDisabled={
                        (!((hasAdminRole || hasSaleRole) && (order.status !== 'Processing')) || theOrder.status === 'Pending' || theOrder.status === 'Cancelled' || order.status === 'Delivered')
                    }
                    shippedStatusOnPress={() => { console.log('Shipped pressed') }}
                    shippedStatusSelected={theOrder.status === 'Shipped'}
                    shippedStatusDisabled={
                        (!((hasAdminRole || hasSaleRole) && (order.status !== 'Shipped')) || theOrder.status === 'Pending' || theOrder.status === 'Cancelled' || order.status === 'Delivered')
                    }
                    deliveredStatusOnPress={() => { console.log('Delivered pressed') }}
                    deliveredStatusSelected={theOrder.status === 'Delivered'}
                    deliveredStatusDisabled={
                        (!((hasAdminRole || hasSaleRole) && (order.status !== 'Delivered')) || (theOrder.status === 'Pending') || theOrder.status === 'Cancelled')
                    }
                    cancelledStatusOnPress={() => { console.log('cancel pressed') }}
                    cancelledStatusSelected={theOrder.status === 'Cancelled'}
                    cancelledStatusDisabled={
                        (!(hasAdminRole && (theOrder.status !== 'Cancelled')) || (theOrder.status === 'Pending') || (theOrder.status === 'Delivered'))
                    }
                />

                {showStatusInfoDetails
                    ? <>
                        <SpacingView />
                        <StatusInfoDetails />
                    </>
                    : null
                }
                <EndLineView />
            </>);
        } else {
            return null
        }
    };

    const OrderFlatListSection = () => {
        return (<>
            <FlatList
                data={theOrder.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <CheckoutItemView
                            productItem={item}
                            showAddButton={false}
                            showSubtractButton={false}
                            showDeleteButton={false}
                        />
                    );
                }}
            />
        </>);
    };

    return (
        <ScrollView style={appStyles.screenContainer} showsVerticalScrollIndicator={false}>
            <OrderInfoSection />
            <EndLineView />
            <ManageStatusSection />
            <TotalSection />
            <SpacingView />
            <OrderFlatListSection />
        </ScrollView>
    );
};

export default ReviewOrderScreen;