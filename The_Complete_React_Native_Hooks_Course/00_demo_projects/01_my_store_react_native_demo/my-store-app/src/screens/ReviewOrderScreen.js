import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { appStyles, EndLineView, SpacingView } from '../components/StyleGuide';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckoutItemView from '../components/CheckoutItemView';
import { StatusIcon } from '../components/StatusIcon';

const ReviewOrderScreen = ({ route }) => {
    const { order } = route.params;
    const customerName = order.item.customer.firstName + ' ' + order.item.customer.lastName;

    console.log('-------------ReviewOrderScreen-------------');
    console.log('order | ', order);
    console.log('customerName | ', customerName);

    const OrderInfoSection = () => {
        return (<>
            <StatusIcon status={order.item.status} />
            <Text h5 style={[appStyles.subtitleStyle]}> Order ID : {order.item.id}</Text>
            <Text h5 style={[appStyles.subtitleStyle]}> Customer Name : {customerName}</Text>
        </>);
    };

    const TotalSection = () => {
        return (<>
            <View style={appStyles.rowCenterContainer}>
                <FontAwesome5 name="money-check-alt" size={24} color={appStyles.secondaryDarkColor.color} />
                <SpacingView />
                <Text h5 style={[appStyles.titleStyle]}> Total : ${order.item.totalAmount}</Text>
                <SpacingView />
            </View>
        </>);
    };

    return (
        <View style={appStyles.screenContainer}>
            <OrderInfoSection />
            <EndLineView />
            <TotalSection />
            <SpacingView />
            <FlatList
                data={order.item.items}
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
        </View>
    );
};

export default ReviewOrderScreen;