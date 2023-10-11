import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { appStyles, SpacingView } from './StyleGuide';
import { Context as OrderContext } from '../contexts/OrderContext';
import { FontAwesome } from '@expo/vector-icons';

const CheckoutItemView = ({ productItem, showAddButton, showSubtractButton, showDeleteButton }) => {
    const { updateItemQuantityInTheCart, deleteItemInTheCart } = useContext(OrderContext);

    console.log('-------------CheckoutItemView-------------');
    console.log('productItem |', productItem);

    return (<View style={[styles.container, appStyles.boxWithShadow]}>
        <Image
            style={styles.imageStyle}
            source={{ uri: 'https://picsum.photos/200/300' }}
        />

        <View style={styles.detailContainer}>
            <Text h4 style={appStyles.smallTitleStyle}>{productItem.product.name}  <Text h5 style={appStyles.subtitleStyle}>${productItem.product.price}</Text> </Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>{productItem.product.description}</Text>
            <Text h5 style={appStyles.smallestSubtitleStyle}>Sub Total : ${productItem.subtotal}</Text>

            <View style={styles.buttonsContainer}>
                {showAddButton === true
                    ? <>
                        <TouchableOpacity onPress={() => updateItemQuantityInTheCart(productItem.orderId, productItem.id, productItem.quantity + 1)}>
                            <FontAwesome name="plus-square" size={24} color="green" />
                        </TouchableOpacity>
                        <SpacingView />
                    </>
                    : null
                }

                <Text h5 style={appStyles.mediumSubtitleStyle}>Quality : {productItem.quantity}  </Text>
                <SpacingView />

                {showSubtractButton === true
                    ? <>
                        <TouchableOpacity onPress={() => updateItemQuantityInTheCart(productItem.orderId, productItem.id, productItem.quantity - 1)}>
                            <FontAwesome name="minus-square" size={24} color="green" />
                        </TouchableOpacity>
                        <SpacingView />
                    </>
                    : null
                }
            </View>
        </View>

        {showDeleteButton === true
            ? <>
                <TouchableOpacity onPress={() => deleteItemInTheCart(productItem.orderId, productItem.id)}>
                    <MaterialCommunityIcons name="delete-forever" size={28} color="red" />
                </TouchableOpacity>
            </>
            : null
        }
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
    buttonsContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 2,
        alignSelf: 'center'
    },
});

export default CheckoutItemView;
