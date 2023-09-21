import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi ! there, I am a const.';
    const arrayInt = [1,2,3];
    const arrayString = ['hey', 'I', 'am', 'array'];
    const greetingWithTextOnConst = <Text>Hi ! there, I am a greeting text on const</Text>;    
    const name = 'Lee McCormick';

    return (
        <View>
            <Text style={style.textStyle}>This is the component screen </Text>
            <Text style={{ fontSize: 14 }}>This is the component screen again with fontSize inside.</Text>
            <Text>Hi ! There, I am a default text element.</Text>
            <Text>{greeting}</Text>
            <Text>{arrayInt}</Text>
            <Text>{arrayString}</Text>
            {greetingWithTextOnConst}
            <Text style={style.textStyle}>Getting Start With React Native!</Text>
            <Text style={style.subHeaderStyle }>My name is {name}.</Text>
        </View>
    );
};

const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;