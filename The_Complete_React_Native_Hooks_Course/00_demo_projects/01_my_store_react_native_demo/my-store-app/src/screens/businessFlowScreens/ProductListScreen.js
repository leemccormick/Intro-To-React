import React, { useContext, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements'
import { Context as StoreContext } from '../../contexts/StoreContext';
import { Context as OrderContext } from '../../contexts/OrderContext';
import { appStyles, EndLineView, SpacingView, AppMediumButton, ErrorView } from '../../components/StyleGuide';
import ProductWithDetailsView from '../../components/ProductWithDetailsView';
import useCurrentUser from '../../hooks/useCurrentUser';

const ProductListScreen = ({ navigation }) => {
    const { state: storeState, showProducts } = useContext(StoreContext);
    const [fullName, rolesDescription] = useCurrentUser();

    console.log('-------------ProductListScreen-------------');
    console.log('storeState | ', storeState);
    console.log('showProducts | ', showProducts);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            showProducts();
        });

        return unsubscribe;
    }, [navigation]);

    const UserInfoSection = () => {
        return (<>
            <View style={appStyles.rowFlexEndContainer}>
                <Text h5 style={[appStyles.titleStyle]}> Hi ! {fullName}</Text>
            </View>
            <View style={appStyles.rowFlexEndContainer}>
                <Text h5 style={[appStyles.subtitleStyle]}> Roles : {rolesDescription}</Text>
            </View>
        </>);
    };

    const AddNewProductSection = () => {
        return (
            <View style={appStyles.rowCenterContainer}>
                <Text h5 style={[appStyles.subtitleStyle]}>
                    <Text h5 style={[appStyles.titleStyle]}> {storeState.totalProducts} </Text> Products in the store.</Text>
                <SpacingView />
                <AppMediumButton
                    title="Add New Product"
                    onPress={() => navigation.navigate('ProductInfo')}
                />
            </View>
        );
    };

    const ErrorSection = () => {
        return (<>
            {storeState.errorMessage ? <ErrorView errorMessage={storeState.errorMessage} /> : null}
        </>);
    };

    return (<View style={appStyles.screenContainer}>
        <UserInfoSection />
        <EndLineView />
        <AddNewProductSection />
        <SpacingView />
        <FlatList
            data={storeState.products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => {
                return (
                    <ProductWithDetailsView
                        product={item}
                    />
                );
            }}
        />
        <ErrorSection />
    </View>);
};

export default ProductListScreen;