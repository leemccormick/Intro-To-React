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
        <View style={styles.center}>
            <MaterialIcons style={styles.center} name="navigate-next" size={30} color={appStyles.secondaryDarkColor.color} />
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

export default OrderItemView;
