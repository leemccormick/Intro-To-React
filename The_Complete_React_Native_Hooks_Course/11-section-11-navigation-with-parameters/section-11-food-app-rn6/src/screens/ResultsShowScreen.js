/* NOTE : Outline of Changes:

1. Instead of a navigation prop pass a route prop to the component instead:

const ResultsShowScreen = ({ route }) => { 
A navigation prop is no longer needed, as it is communicated automatically to all screens.

https://reactnavigation.org/docs/navigation-prop

2. Instead of using the navigation.getParam method to extract id, use the route params prop:

  const id = route.params.id;
https://reactnavigation.org/docs/route-prop
*/

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 4,
        margin: 10
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultsShowScreen;

/* NOTE: This code below before using Navigation v6
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        console.log('id on getResult() is : ' + id);
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    console.log('id on ResultsShowScreen is : ' + id);
    console.log('result on ResultsShowScreen is : ' + result);
    console.log(result);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image
                        style={styles.imageStyle}
                        source={{ uri: item }}
                    />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 4,
        margin: 10
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultsShowScreen;
*/