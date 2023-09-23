import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { appStyles, screenWidth, SpacingView, UnderlineView } from '../components/StyleGuide';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    console.log('red in Square Screen is : ' + red);
    console.log('blue in Square Screen is : ' + blue);
    console.log('green in Square Screen is : ' + green);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            default:
                return;
        }
    };

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Square Screen</Text>
            <Text style={styles.subtitleStyle}>Learn about State Management in React Components...</Text>
            <UnderlineView />
            <SpacingView />
            <ColorCounter
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red" />
            <SpacingView />
            <ColorCounter
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="Blue" />
            <SpacingView />
            <ColorCounter
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green" />
            <SpacingView />
            <View style={{
                height: 150,
                width: screenWidth * 0.9,
                backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00008B'
    },
    subtitleStyle: {
        fontSize: 20,
        textAlign: 'left',
        color: 'gray'
    }
});

export default SquareScreen;