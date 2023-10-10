import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Context as OrderContext } from '../contexts/OrderContext';
import { Context as AuthContext } from '../contexts/AuthContext';
import { appStyles, EndLineView, SpacingView, AppMediumButton, ErrorView, HomeButton } from '../components/StyleGuide';
import useCurrentUser from '../hooks/useCurrentUser';
import { FontAwesome5 } from '@expo/vector-icons';
import CheckoutItemView from '../components/CheckoutItemView';

const CheckoutScreen = ({ navigation }) => {
    const { state: authState } = useContext(AuthContext);
    const { state: orderState, checkout } = useContext(OrderContext);
    const [fullName] = useCurrentUser();

    console.log('-------------CheckoutScreen-------------');
    console.log('orderState | ', orderState);
    console.log('authState | ', authState);

    const isMyOrder = () => {
        return authState.currentUserDetails.user.id === orderState.pendingOrder.customerId;
    };

    const isPendingOrder = () => {
        return orderState.pendingOrder.status === 'Pending';
    };

    const showAddButton = (item) => {
        return isMyOrder && isPendingOrder && item.quantity !== item.product.quantity
    };

    const showSubtractButton = (item) => {
        return isMyOrder && isPendingOrder && item.quantity !== 0
    };

    const showDeleteButton = () => {
        return isMyOrder() && isPendingOrder()
    };

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
                    <Text h5 style={[appStyles.titleStyle]}> Total : ${orderState.pendingOrder.totalAmount}</Text>
                    <SpacingView />
                    <AppMediumButton
                        title="Confirm Order"
                        onPress={() => checkout(orderState.pendingOrder)}
                    />
                </View>
                : <View style={appStyles.box}>
                    <Text h5 style={[appStyles.titleStyle]}> No items in the cart.</Text>
                    <SpacingView />
                    <HomeButton title="Continue Shopping" onPress={() => navigation.navigate("Home")} />
                </View>
            }
        </>);
    };

    const ErrorSection = () => {
        return (<>
            {orderState.errorMessage ? <ErrorView errorMessage={orderState.errorMessage} /> : null}
        </>);
    };

    return (
        <View style={appStyles.screenContainer}>
            <OrderInfoSection />
            <EndLineView />
            <ConfirmAndPaySection />
            <SpacingView />
            <FlatList
                data={orderState.pendingOrder.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <CheckoutItemView
                            productItem={item}
                            showAddButton={showAddButton(item)}
                            showSubtractButton={showSubtractButton(item)}
                            showDeleteButton={showDeleteButton()}
                        />
                    );
                }}
            />
            <ErrorSection />
        </View>
    );
};

export default CheckoutScreen;