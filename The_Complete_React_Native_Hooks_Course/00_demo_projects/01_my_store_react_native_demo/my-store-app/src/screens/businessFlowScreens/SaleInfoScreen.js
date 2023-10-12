import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { appStyles } from '../../components/StyleGuide';

const SaleInfoScreen = () => {
    return (
        <View style={appStyles.screenContainer}>
            <Text style={appStyles.headerStyle}>SaleInfoScreen : Hello Sale People </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default SaleInfoScreen;