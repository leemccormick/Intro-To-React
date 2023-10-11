import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import OrderItemView from '../components/OrderItemView';
import { appStyles, EndLineView, ErrorView } from '../components/StyleGuide';
import { Context as AuthContext } from '../contexts/AuthContext';
import { Context as OrderContext } from '../contexts/OrderContext';
import { Context as OrderListContext } from '../contexts/OrderListContext';
import useCurrentUser from '../hooks/useCurrentUser';
import { PendingStatusIcon, ProcessingStatusIcon, ShippedStatusIcon, DeliveredStatusIcon, CancelledStatusIcon, AllStatusIcon } from '../components/StatusIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HistoryScreen = ({ navigation }) => {
    const { state: authState } = useContext(AuthContext);
    const { state: orderState } = useContext(OrderContext);
    const { state: orderListState, filterStatusChanged } = useContext(OrderListContext);
    const [fullName, rolesDescription] = useCurrentUser();

    console.log('-------------HistoryScreen-------------');
    console.log('authState | ', authState);
    console.log('orderState | ', orderState);
    console.log('orderListState | ', orderListState);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            filterStatusChanged('All');
        });

        return unsubscribe;
    }, [navigation]);

    const OrderInfoSection = () => {
        return (<>
            <Text h5 style={[appStyles.subtitleStyle]}> Customer Name : {fullName}</Text>
            <Text h5 style={[appStyles.subtitleStyle]}> Roles : {rolesDescription}</Text>
            <Text h5 style={[appStyles.subtitleStyle]}> {orderListState.totalOrderDescriptionToDisplay} : {orderListState.totalOrdersToDisplay}</Text>
            <EndLineView />
        </>);
    };

    const TabFilterSection = () => {
        return (<View style={styles.tabContainer}>
            <AllStatusIcon
                onPress={() => filterStatusChanged('All')}
                isSelected={orderListState.selectedFilterStatus === 'All'}
            />
            <PendingStatusIcon
                onPress={() => filterStatusChanged('Pending')}
                isSelected={orderListState.selectedFilterStatus === 'Pending'}
            />
            <ProcessingStatusIcon
                onPress={() => filterStatusChanged('Processing')}
                isSelected={orderListState.selectedFilterStatus === 'Processing'}
            />
            <ShippedStatusIcon
                onPress={() => filterStatusChanged('Shipped')}
                isSelected={orderListState.selectedFilterStatus === 'Shipped'}
            />
            <DeliveredStatusIcon
                onPress={() => filterStatusChanged('Delivered')}
                isSelected={orderListState.selectedFilterStatus === 'Delivered'}
            />
            <CancelledStatusIcon
                onPress={() => filterStatusChanged('Cancelled')}
                isSelected={orderListState.selectedFilterStatus === 'Cancelled'}
            />
        </View>);
    };

    const OrderListSection = () => {
        return (<>
            <FlatList
                data={orderListState.orderListToDisplay}
                keyExtractor={(order) => order.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                if (authState.currentUserDetails.user.id === item.customer.id && item.status === 'Pending' && item.id === orderState.pendingOrder.id) {
                                    navigation.navigate('Checkout')
                                } else {
                                    navigation.navigate('ReviewOrder', { order: { item } })
                                }
                            }}>
                            <OrderItemView order={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </>);
    };

    const ErrorSection = () => {
        return (<>
            {orderListState.errorMessage ? <ErrorView errorMessage={orderListState.errorMessage} /> : null}
        </>);
    };

    return (
        <>
            <TabFilterSection />
            <View style={appStyles.screenContainer}>
                <OrderInfoSection />
                <OrderListSection />
                <ErrorSection />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    },
    tabContainer: {
        backgroundColor: appStyles.secondaryBackgroundLightBlueColor.backgroundColor,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});

export default HistoryScreen;