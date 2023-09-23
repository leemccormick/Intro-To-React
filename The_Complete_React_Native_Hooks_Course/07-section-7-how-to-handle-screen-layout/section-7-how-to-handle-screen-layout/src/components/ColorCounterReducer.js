import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { appStyles, screenWidth, SpacingView } from './StyleGuide';
import { ColorButton } from './CustomButton';

const ColorCounterReducer = ({ color, onIncrease, onDecrease, onIncreaseConvention, onDecreaseConvention }) => {
    const lowercaseColor = color.toLowerCase();
    console.log('color in ColorCounter is : ' + color);
    console.log('lowercaseColor in ColorCounter is : ' + lowercaseColor);

    const handelIncrease = () => {
        console.log('Increase button pressed  in ColorCounter  ! : color is : ' + color);
        onIncrease();
    };

    const handelDecrease = () => {
        console.log('Decrease  button pressed  in ColorCounter  ! : color is : ' + color);
        onDecrease();
    };

    const handelIncreasConvention = () => {
        console.log('Increase Convention button pressed  in ColorCounter  ! : color is : ' + color);
        onIncreaseConvention();
    };

    const handelDecreaseConvention = () => {
        console.log('Decrease  Convention button pressed  in ColorCounter  ! : color is : ' + color);
        onDecreaseConvention();
    };

    return (
        <View style={[appStyles.box, { width: screenWidth * 0.9, borderColor: lowercaseColor }]}>
            <View style={appStyles.rowContainer}>
                <Text style={[appStyles.titleStyle, { color: lowercaseColor }]}>{color}</Text>
                <SpacingView />
                <ColorButton onPress={handelIncrease} title={`++  ${color}`} color={lowercaseColor} />
                <SpacingView />
                <ColorButton onPress={handelDecrease} title={`--  ${color}`} color={lowercaseColor} />
                <SpacingView />
            </View>

            <SpacingView />
            <View style={appStyles.rowContainer}>
                <Text style={[appStyles.subtitleStyle, { color: lowercaseColor }]}>Convention Demo :</Text>
                <SpacingView />
                <ColorButton onPress={handelIncreasConvention} title={`++  ${color}`} color={lowercaseColor} />
                <SpacingView />
                <ColorButton onPress={handelDecreaseConvention} title={`--  ${color}`} color={lowercaseColor} />
            </View>
        </View>
    );
}

export default ColorCounterReducer;
