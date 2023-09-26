import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

/*
NOTE : To direct import navigation to this file
Step 1 : import { withNavigation } from 'react-navigation'; 
Step 2 : export default withNavigation(ResultsList);
*/
const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })} >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);

/* NOTE :
- This is an example of passing navigation to ResultsList

const ResultsList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>Results : {results.length}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    // return <Text>{item.name}</Text>
                    return (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('ResultsShow')}
                        >
                    <ResultsDetail result={item} />
                    </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

export default ResultsList;
*/

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