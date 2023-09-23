import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { appStyles, screenWidth, SpacingView, UnderlineView } from '../components/StyleGuide';
import CustomButton from '../components/CustomButton';

const CounterScreen = () => {
    // let counter = 0; --> This won't work because it is not update screen. we need to useState to update data on screen.
    const [counter, setCounter] = useState(0);
    const handelIncrease = () => {
        setCounter(counter + 1);
        console.log('Increase ++ | counter is : ' + counter);
    };

    const handelDecrease = () => {
        setCounter(counter - 1);
        console.log('Decrease -- | counter is : ' + counter);
    };

    const customButtonsBox = (
        <View style={[appStyles.box, { width: screenWidth * 0.9 }]}>
            <Text style={appStyles.subtitleStyle}>Custom Button Demo</Text>
            <SpacingView />
            <CustomButton onPress={handelIncrease} title="Increase" />
            <SpacingView />
            <CustomButton onPress={handelDecrease} title="Decrease" />
            <SpacingView />
            <Text style={appStyles.titleStyle}>Counter is : {counter}</Text>
        </View>
    );

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Counter Screen</Text>
            <SpacingView />
            <Text style={styles.subtitleStyle}>Learn about State Management in React Components...</Text>
            <UnderlineView />
            <Button title='Increase' onPress={() => {
                // counter++; --> This won't work because it's crash the app.
                setCounter(counter + 1);
                console.log('Increase ++ | counter is : ' + counter);
            }} />

            <Button title='Decrease' onPress={() => {
                // counter--;  --> This won't work because it's crash the app.
                setCounter(counter - 1);
                console.log('Decrease -- | counter is : ' + counter);
            }} />

            <Text>Current Counter : {counter}</Text>
            <UnderlineView />
            <SpacingView />
            {customButtonsBox}
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

export default CounterScreen;