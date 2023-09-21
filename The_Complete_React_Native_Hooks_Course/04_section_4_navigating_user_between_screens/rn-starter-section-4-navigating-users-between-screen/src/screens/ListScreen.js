import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', key: '1' },
        { name: 'Friend #2', key: '2' },
        { name: 'Friend #3', key: '3' },
        { name: 'Friend #4', key: '4' },
        { name: 'Friend #5', key: '5' },
        { name: 'Friend #6', key: '6' },
        { name: 'Friend #7', key: '7' },
        { name: 'Friend #8', key: '8' },
        { name: 'Friend #9', key: '9' },
    ];

    const friendsNoKey = [
        { name: 'Friend No Key #1' },
        { name: 'Friend No Key #2' },
        { name: 'Friend No Key #3' },
        { name: 'Friend No Key #4' },
        { name: 'Friend No Key #5' },
        { name: 'Friend No Key #6' },
        { name: 'Friend No Key #7' },
        { name: 'Friend No Key #8' },
        { name: 'Friend No Key #9' },
    ];

    const friendsWithAge = [
        { name: 'Friend With Age #1', age: 20 },
        { name: 'Friend With Age #2', age: 12 },
        { name: 'Friend With Age #3', age: 16 },
        { name: 'Friend With Age #4', age: 16 },
        { name: 'Friend With Age #5', age: 65 },
        { name: 'Friend With Age #6', age: 76 },
        { name: 'Friend With Age #7', age: 17 },
        { name: 'Friend With Age #8', age: 58 },
        { name: 'Friend With Age #9', age: 39 },
    ];

    return (
        <View>
            <Text style={styles.textStyle}>This is exercise using friend with age.</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}
                data={friendsWithAge}
                renderItem={({ item }) => {
                    const friendWithAge = item.name + ' - Age ' + item.age;
                    return <Text style={styles.listTextStyleSmallMargin}>{friendWithAge}</Text>;
                }}
            />

            <Text style={styles.textStyle}>This is an solution exercise using friend with age.</Text>
            <Text>Using a line to return data.</Text>
            <FlatList
                keyExtractor={(friend) => friend.name}
                data={friendsWithAge}
                renderItem={({ item }) => {
                    return <Text style={styles.listTextStyleSmallMargin}>{item.name} - Age {item.age}  </Text>;
                }}
            />

            <Text style={styles.textStyle}>This is a demo with using name for key.</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(friend) => friend.name}
                data={friendsNoKey}
                renderItem={({ item }) => {
                    // item ===  { name: 'Friend #1' } 
                    return <Text style={styles.listTextStyleHorizontal}>{item.name}</Text>;
                }}
            />

            <Text style={styles.textStyle}>This is a demo with using key.</Text>
            <FlatList
                keyExtractor={(friend) => friend.key}
                data={friends}
                renderItem={(element) => {
                    // element === { item : { name: 'Friend #1' }, index: 0 }
                    return <Text style={styles.listTextStyle}>{element.item.name}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
    },
    listTextStyleSmallMargin: {
        marginVertical: 10,
        fontSize: 15
    },
    listTextStyle: {
        marginVertical: 50,
        fontSize: 15
    },
    listTextStyleHorizontal: {
        marginHorizontal: 20,
        fontSize: 20
    },
});

export default ListScreen;