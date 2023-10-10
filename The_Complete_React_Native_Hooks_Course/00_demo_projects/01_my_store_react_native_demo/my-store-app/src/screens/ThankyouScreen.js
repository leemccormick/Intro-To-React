import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import AppHeader from '../components/AppHeader';
import { appStyles, EndLineView, HomeButton } from '../components/StyleGuide';

const ThankyouScreen = ({ route, navigation }) => {
    const { orderId, totalAmount } = route.params;

    console.log('-------------ThankyouScreen-------------');
    console.log('orderId | ', orderId);
    console.log('totalAmount | ', totalAmount);

    return (
        <View style={styles.container}>
            <AppHeader title="Thank you" />
            <View style={appStyles.box}>
                <Text h5 style={[appStyles.subtitleStyle]}> Thank you for ordering at MyStore, we will process your order soon.</Text>
            </View>
            <EndLineView />
            <Text h5 style={[appStyles.subtitleStyle]}> Order ID : {orderId}</Text>
            <Text h5 style={[appStyles.subtitleStyle]}> Total : ${totalAmount}</Text>
            <EndLineView />
            <HomeButton title="Continue Shopping" onPress={() => navigation.navigate("Home")} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
        flex: 1,
        marginHorizontal: 15,
        backgroundColor: '#F1F6F9'
    }
});

ThankyouScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default ThankyouScreen;