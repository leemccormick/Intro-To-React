import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements'
import { appStyles, SpacingView } from '../components/StyleGuide';
import { FontAwesome5 } from '@expo/vector-icons';

const AppHeader = ({ title }) => {
    return (
        <View style={appStyles.rowContainer}>
            <FontAwesome5 style={appStyles.paddingStyle} name="store-alt" size={30} color={appStyles.secondaryDarkColor.color} />
            <Text h1 style={[appStyles.paddingStyle, appStyles.headerStyle]}>{title}</Text>
            <SpacingView />
        </View>
    );
};

export default AppHeader;