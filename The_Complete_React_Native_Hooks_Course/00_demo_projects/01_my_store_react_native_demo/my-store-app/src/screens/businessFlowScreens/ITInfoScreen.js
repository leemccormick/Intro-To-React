import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { appStyles } from '../../components/StyleGuide';

const ITInfoScreen = () => {
    return (
        <View style={appStyles.screenContainer}>
            <Text style={appStyles.headerStyle}>ITInfoScreen Hi ! IT peopeo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default ITInfoScreen;