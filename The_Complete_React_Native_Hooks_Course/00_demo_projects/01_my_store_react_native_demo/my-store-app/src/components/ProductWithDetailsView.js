import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements'
import { appStyles, SpacingView } from './StyleGuide';
import { AntDesign } from '@expo/vector-icons';
import { navigate } from "../navigationRef";

const ProductWithDetailsView = ({ product }) => {
    console.log('-------------ProductWithDetailsView-------------');
    console.log('product | ', product);

    return (<View>
        <SpacingView />
        <View style={[appStyles.boxWithShadow]}>
            <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'https://picsum.photos/200/300' }}
                />
                <SpacingView />

                <View style={styles.detailContainer}>
                    <Text h5 style={appStyles.subtitleStyle}>{product.name}</Text>
                    <Text h5 style={appStyles.smallestSubtitleStyle}>{product.description}</Text>
                    <Text h5 style={appStyles.smallestSubtitleStyle}>Product ID : {product.id}</Text>
                    <Text h5 style={appStyles.smallestSubtitleStyle}>Price Per Unit : ${product.price}</Text>
                    {
                        (product.quantity === 0 || product.quantity < 0)
                            ? <Text h5 style={[appStyles.smallestSubtitleStyle, { color: appStyles.errorColor.color }]}>Quantity : {product.quantity}</Text>
                            : <Text h5 style={appStyles.smallestSubtitleStyle}>Quantity : {product.quantity}</Text>
                    }
                </View>

                <View style={appStyles.centerContainer}>
                    <TouchableOpacity style={appStyles.paddingStyle} onPress={() => navigate('ProductInfo', { product })}>
                        <AntDesign style={alignSelf = 'center'} name="infocirlceo" size={24} color={appStyles.secondaryDarkColor.color} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 5,
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'center'
    },
    buttonsContainer: {
        alignSelf: 'center',
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

export default ProductWithDetailsView;