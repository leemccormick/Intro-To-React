import React, { useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { Context as StoreContext } from '../contexts/StoreContext';
import { Context as AuthContext } from '../contexts/AuthContext';
import { appStyles, EndLineView, SpacingView, AppMediumButton } from '../components/StyleGuide';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductView from '../components/ProductView';

// TODO : Continue on here...., debug why sign out is failed 
const HomeScreen = ({ navigation }) => {
    const { state: storeState, showProducts } = useContext(StoreContext);
    const { state: authState } = useContext(AuthContext);

    console.log('-------------HomeScreen-------------');
    console.log('storeState | ', storeState);
    console.log('authState | ', authState);
    console.log('showProducts | ', showProducts);

    const userFullName = authState.currentUserDetails.user.firstName + ' ' + authState.currentUserDetails.user.lastName;

    useEffect(() => {
        showProducts();
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