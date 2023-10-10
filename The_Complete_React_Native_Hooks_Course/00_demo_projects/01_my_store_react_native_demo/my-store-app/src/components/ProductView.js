import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { appStyles, SpacingView } from './StyleGuide';
import { Context as OrderContext } from '../contexts/OrderContext';

const ProductView = ({ product }) => {
    const { postAddItemToCart } = useContext(OrderContext);

    console.log('-------------ProductView-------------');
    console.log('product | ', product);

    return (<View>
        <SpacingView />
        <View style={[appStyles.boxWithShadow]}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => postAddItemToCart(product.id)}>
                    <MaterialCommunityIcons name="cart-plus" size={30} color="green" />
                </TouchableOpacity>
                <SpacingView />

                <View style={styles.detailContainer}>
                    <Text h4 style={appStyles.titleStyle}>{product.name}</Text>
                    <Text h5 style={appStyles.smallestSubtitleStyle}>{product.description}</Text>
                </View>

                <Text h4 style={appStyles.titleStyle}>${product.price}</Text>
            </View>

            <Image
                style={styles.imageStyle}
                source={{ uri: 'https://picsum.photos/200/300' }}
            />
            <SpacingView />
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
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    buttonsContainer: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    imageStyle: {
        width: '90%',
        aspectRatio: 1,
        borderRadius: 4,
        margin: 2,
        alignSelf: 'center'
    },
});

export default ProductView;
