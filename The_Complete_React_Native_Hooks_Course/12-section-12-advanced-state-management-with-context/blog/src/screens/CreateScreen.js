import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BoxContext';

// TODO: Continue working on here.....
const CreateScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    return (
        <View>
            <Text>Create Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;