import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { appStyles, screenWidth, SpacingView } from '../components/StyleGuide';
import { ColorButton } from '../components/CustomButton';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
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
    
    return (
        <View style={[appStyles.box, { width: screenWidth * 0.9, borderColor: lowercaseColor }]}>
            <View style={appStyles.rowContainer}>
                <Text style={[appStyles.titleStyle, { color: lowercaseColor }]}>{color}</Text>
                <SpacingView />
                <ColorButton onPress={handelIncrease} title={`++  ${color}`} color={lowercaseColor} />
                <SpacingView />
                <ColorButton onPress={handelDecrease} title={`--  ${color}`} color={lowercaseColor} />
            </View>
        </View>
    );
}

export default ColorCounter;
