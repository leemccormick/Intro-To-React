import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { appStyles } from './StyleGuide';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusIcon } from './StatusIcon';

const OrderItemView = ({ order }) => {
    console.log('-------------OrderItemView-------------');
    console.log('order |', order);

    return (<View style={[styles.container, appStyles.boxWithShadow]}>
        <View style={styles.detailContainer}>
            <StatusIcon status={order.status} />
            <Text h5 style={appStyles.smallestSubtitleStyle}>Order ID : {order.id} </Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>Amount : ${order.totalAmount} </Text>
        </View>

        <MaterialIcons style={appStyles.centerContainer} name="navigate-next" size={30} color={appStyles.secondaryDarkColor.color} />
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
    }
});

export default OrderItemView;
