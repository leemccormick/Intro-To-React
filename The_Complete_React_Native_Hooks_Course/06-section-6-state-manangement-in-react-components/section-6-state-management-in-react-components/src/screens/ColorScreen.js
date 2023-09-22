import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { appStyles, SpacingView, UnderlineView } from '../components/StyleGuide';
import CustomButton from '../components/CustomButton';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    const [colorsVertical, setColorsVertical] = useState([]);
    const colorsCount = colors.length;
    const colorsVerticalCount = colorsVertical.length;

    console.log('colors in ColorScreen is : ' + colors);
    console.log('colorsVertical in ColorScreen is : ' + colorsVertical);

    const handelAddColor = () => {
        setColors([...colors, randomRgb()]); // Take a copy of colors array and add a color to the array
        console.log('Add A Color Button Pressed ! | colors is : ' + colors);
    };

    const handelAddColorVertical = () => {
        setColorsVertical([...colorsVertical, randomRgb()]); // Take a copy of colors array and add a color to the array
        console.log('Add A Color Vertical Button Pressed ! | colorsVertical is : ' + colorsVertical);
    };

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Color Screen</Text>
            <Text style={styles.subtitleStyle}>Learn about State Management in React Components...</Text>
            <UnderlineView />

            <Button title='Add A Color to horizontal list' onPress={handelAddColor} />
            <SpacingView />

            <View style={[{ height: 100, width: 100, backgroundColor: randomRgb() }, appStyles.centerContainer]}>
                <Text style={appStyles.smallestSubtitleStyle}>Colors : {colorsCount}</Text>
            </View>

            <FlatList
                horizontal
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />

            <SpacingView />
            <CustomButton title="Add A Color to vertical list" onPress={handelAddColorVertical} />
            <SpacingView />
            <Text style={appStyles.smallestSubtitleStyle}>Total Colors in Vertical List is  : {colorsVerticalCount}</Text>

            <FlatList
                keyExtractor={(item) => item}
                data={colorsVertical}
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }} />
                }}
            />
        </View>
    );
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
};

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

export default ColorScreen;
