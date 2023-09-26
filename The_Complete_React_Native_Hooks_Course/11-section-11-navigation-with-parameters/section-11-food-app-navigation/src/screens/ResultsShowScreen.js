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
