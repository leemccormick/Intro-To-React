import React, { useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements'
import { Context as StoreContext } from '../contexts/StoreContext';
import ProductView from '../components/ProductView';

const HomeScreen = ({ navigation }) => {
    const { state, showProducts } = useContext(StoreContext);
    console.log('-------------HomeScreen-------------');
    console.log('state | ', state);
    console.log('showProducts | ', showProducts);

    useEffect(() => {
        showProducts();
    }, []); // The empty dependency array means this effect will run once on component mount

    return (<View style={styles.container}>
        <Text h3>HomeScreen</Text>
        <Button
            title="Go to sing in"
            onPress={() => navigation.navigate("Signin")}
        />

        <FlatList
            data={state.products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => {
                return (
                    <ProductView product={item} />
                    // <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                    // {/* <ListItem>
                    //     <ListItem.Content>
                    //         <ListItem.Title>{item.name}</ListItem.Title>
                    //     </ListItem.Content>
                    //     <ListItem.Chevron />
                    // </ListItem> */}
                    //</TouchableOpacity> */}
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