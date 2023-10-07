import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Context as OrderContext } from '../contexts/OrderContext';
import { appStyles, EndLineView, SpacingView, AppMediumButton, ErrorView } from '../components/StyleGuide';
import useCurrentUser from '../hooks/useCurrentUser';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckoutItemView from '../components/CheckoutItemView';



const CheckoutScreen = ({ navigation }) => {
    const { state: orderState, fetchPendingOrder } = useContext(OrderContext);
    const [fullName] = useCurrentUser();

    console.log('-------------CheckoutScreen-------------');
    console.log('orderState | ', orderState);
    console.log('orderState.pendingOrder.items | ', orderState.pendingOrder.items);


    const OrderInfoSection = () => {
        return (<>
            <Text h5 style={[appStyles.subtitleStyle]}> Order ID : {orderState.pendingOrder.id}</Text>
            <Text h5 style={[appStyles.subtitleStyle]}> Order Status : {orderState.pendingOrder.status}</Text>
            <Text h5 style={[appStyles.subtitleStyle]}> Customer Name : {fullName}</Text>
        </>);
    };

    const ConfirmAndPaySection = () => {
        return (<>
            {orderState.showCheckoutAction
                ? <View style={appStyles.rowCenterContainer}>
                    <FontAwesome5 name="money-check-alt" size={24} color={appStyles.secondaryDarkColor.color} />
                    <SpacingView />
                    <Text h5 style={[appStyles.subtitleStyle]}> Total : ${orderState.pendingOrder.totalAmount}</Text>
                    <SpacingView />
                    <AppMediumButton
                        title="Confirm Order"
                        onPress={() =>
                            //navigation.navigate('Checkout')
                            console.log("Comfirm press navigation to thank you screen")
                        }
                    />
                </View>
                : null
            }
        </>);
    };
    return (
        <View style={appStyles.screenContainer}>
            <OrderInfoSection />
            <EndLineView />
            <ConfirmAndPaySection />
            <FlatList
                data={orderState.pendingOrder.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <CheckoutItemView
                            product={item}
                        // onAddToCartPress={postAddItemToCart(item.id)}
                        />
                    );
                }}
            />

        </View>
    );
};

export default CheckoutScreen;