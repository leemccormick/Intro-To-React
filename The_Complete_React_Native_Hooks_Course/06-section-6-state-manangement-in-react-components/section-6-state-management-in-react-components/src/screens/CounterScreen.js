import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const CounterScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Counter Screen</Text>
            <Text style={styles.subtitleStyle}>Learn about State Management in React Components...</Text>
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
