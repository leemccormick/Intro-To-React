import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { appStyles } from './StyleGuide';
import { Context as OrderContext } from '../contexts/OrderContext';

//TODO: Continue here...
const CheckoutItemView = ({ product }) => {
    const { postAddItemToCart } = useContext(OrderContext);

    console.log('-------------CheckoutItemView-------------');
    console.log('product |', product);

    
    return (<View style={[styles.container, appStyles.secondaryBackgroundLightColor]}>
        <View>
            <Text h4>{product.product.name}</Text>
            {/* <Text h5>{product.description}</Text> */}
            <Text h4>${product.product.price}</Text>

            <View style={appStyles.rowCenterContainer}>
            <Text h5 style={appStyles.smallestSubtitleStyle}>Product ID  : {product.product.id} | </Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>order item ID  : {product.id}</Text>
            </View>
        </View>

        <View style={styles.buttonsContainer}>
            {/* <TouchableOpacity onPress={() => console.log('Add to cart !')}> */}
                     {/* <TouchableOpacity onPress={() => postAddItemToCart(product.id) }>  */}
                     <TouchableOpacity onPress={() => postAddItemToCart(product.id)}>

                <MaterialCommunityIcons name="cart-plus" size={30} color="green" />
            </TouchableOpacity>
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
        // marginHorizontal: 10,
        // backgroundColor: 'lightgray',
        borderColor: '#212A3E',  // Border color
        borderRadius: 8, // Border radius
        elevation: 5, // Add elevation for shadow on Android
        shadowColor: '#212A3E', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.3, // Shadow opacity for iOS
        shadowRadius: 2, // Shadow radius for iOS,
    },
    buttonsContainer: {
        alignSelf: 'center',
        flexDirection: 'row'
    }
});

export default CheckoutItemView;
