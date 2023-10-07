import React, { useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { Context as StoreContext } from '../contexts/StoreContext';
import { Context as OrderContext } from '../contexts/OrderContext';
import { appStyles, EndLineView, SpacingView, AppMediumButton, ErrorView } from '../components/StyleGuide';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductView from '../components/ProductView';
import useCurrentUser from '../hooks/useCurrentUser';

const HomeScreen = ({ navigation }) => {
    const { state: storeState, showProducts } = useContext(StoreContext);
    const { state: orderState, fetchPendingOrder } = useContext(OrderContext);
    const [fullName, rolesDescription] = useCurrentUser();

    console.log('-------------HomeScreen-------------');
    console.log('storeState | ', storeState);
    console.log('orderState | ', orderState);
    console.log('showProducts | ', showProducts);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            showProducts();
            fetchPendingOrder();
        });

        return unsubscribe;
    }, [navigation]); // The empty dependency array means this effect will run once on component mount

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

    const CheckOutSection = () => {
        return (<>
            {orderState.showCheckoutAction
                ? <View style={appStyles.rowCenterContainer}>
                    <MaterialCommunityIcons name="cart-check" size={24} color={appStyles.secondaryDarkColor.color} />
                    <SpacingView />
                    <Text h5 style={[appStyles.subtitleStyle]}> {orderState.totalItemsInCart} Items in the cart.</Text>
                    <SpacingView />
                    <AppMediumButton
                        title="Check out"
                        onPress={() => navigation.navigate('Checkout')}
                    />
                </View>
                : null
            }
        </>);
    };

    const ErrorSection = () => {
        const errorMessages = orderState.errorMessage + storeState.errorMessage;
        return (<>
            {errorMessages ? <ErrorView errorMessage={errorMessages} /> : null}
        </>);
    };
    return (<View style={appStyles.screenContainer}>
        <UserInfoSection />
        <EndLineView />
        <CheckOutSection />

        <FlatList
            data={storeState.products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => {
                return (
                    <ProductView
                        product={item}
                    // onAddToCartPress={postAddItemToCart(item.id)}
                    />
                );
            }}
        />

        <ErrorSection />
    </View>);
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default HomeScreen;



/*
// TODO : Continue on here...., debug why sign out is failed 
const HomeScreen = ({ navigation }) => {
    const { state: storeState, showProducts } = useContext(StoreContext);
    const { state: authState } = useContext(AuthContext);

    console.log('-------------HomeScreen-------------');
    console.log('storeState | ', storeState);
    console.log('authState | ', authState);
    console.log('showProducts | ', showProducts);

    const userFullName = () => {
        return (authState.currentUserDetails != null) 
        ? authState.currentUserDetails.user.firstName + ' ' + authState.currentUserDetails.user.lastName
        : '';
    };

    useEffect(() => {
        if (authState.currentUserDetails != null) {
            showProducts();
        }
    }, []); // The empty dependency array means this effect will run once on component mount

    return (<View style={appStyles.screenContainer}>
 
        <View style={appStyles.rowFlexEndContainer}>
            {userFullName ?
                <Text h5 style={[appStyles.titleStyle]}> HI ! {userFullName}</Text>
                : null
            } 
        </View>

        <View style={appStyles.rowFlexEndContainer}>
        <Text h5 style={[appStyles.subtitleStyle]}> Roles : {authState.currentUserDetails.roles}</Text>

        </View>
        <EndLineView />

        <View style={appStyles.rowCenterContainer}>
            <MaterialCommunityIcons name="cart-check" size={24} color="black" />
            <SpacingView />

            <Text h5 style={[appStyles.subtitleStyle]}> 5 Items in the cart.</Text>
            <SpacingView />
            <AppMediumButton title="Check out" />
        </View>

        <FlatList
            data={storeState.products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => {
                return (
                    <ProductView product={item} />
                );
            }}
        />
    </View>);
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default HomeScreen;


*/








/* NOTE: Snipped Code to create new component
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'

const HomeScreen = ({ navigation }) => {
    console.log('-------------HomeScreen-------------');
    return (<View style={styles.container}>
        <Text h3>HomeScreen</Text>
        <Button
            title="Go to sing in"
            onPress={() => navigation.navigate("Signin")}
        />
    </View>);
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default HomeScreen;
*/