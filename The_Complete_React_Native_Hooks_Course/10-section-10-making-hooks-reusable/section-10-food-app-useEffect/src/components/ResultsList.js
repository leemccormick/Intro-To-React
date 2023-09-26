import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Results : {results.length}</Text> */}
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;

/* NOTE : Code for creating new component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = () => {
    return (
        <View>
            <Text>ResultsList</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ResultsList;
 */