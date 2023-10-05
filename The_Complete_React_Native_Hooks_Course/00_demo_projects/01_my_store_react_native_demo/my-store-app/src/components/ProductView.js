import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProductView = ({ product }) => {
    console.log('-------------ProductView-------------');
    return (<View style={styles.container}>
        <View>
            <Text h4>{product.name}</Text>
            <Text h5>{product.description}</Text>
            <Text h4>${product.price}</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => console.log('Add to cart !')}>
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
        marginHorizontal: 10,
        backgroundColor: 'lightgray',
        borderColor: 'gray',  // Border color
        borderRadius: 8, // Border radius
        elevation: 5, // Add elevation for shadow on Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.3, // Shadow opacity for iOS
        shadowRadius: 2, // Shadow radius for iOS,
    },
    buttonsContainer: {
        alignSelf: 'center',
        flexDirection: 'row'
    }
});

export default ProductView;
