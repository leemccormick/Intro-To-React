import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { appStyles, screenWidth, SpacingView, UnderlineView } from '../components/StyleGuide';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);
    console.log('red in Square Screen is : ' + red);
    console.log('blue in Square Screen is : ' + blue);
    console.log('green in Square Screen is : ' + green);

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Square Screen</Text>
            <Text style={styles.subtitleStyle}>Learn about State Management in React Components...</Text>
            <UnderlineView />
            <SpacingView />
            <ColorCounter
                onIncrease={() => setRed(red + 1)}
                onDecrease={() => setRed(red - 1)}
                color="Red" />
            <SpacingView />
            <ColorCounter
                onIncrease={() => setBlue(blue + 1)}
                onDecrease={() => setBlue(blue - 1)}
                color="Blue" />
            <SpacingView />
            <ColorCounter
                onIncrease={() => setGreen(green + 1)}
                onDecrease={() => setGreen(green - 1)}
                color="Green" />
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
