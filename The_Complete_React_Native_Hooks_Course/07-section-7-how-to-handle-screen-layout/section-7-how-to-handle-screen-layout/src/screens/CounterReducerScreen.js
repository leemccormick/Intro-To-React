import React, { useReducer } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { appStyles, screenWidth, SpacingView, UnderlineView } from '../components/StyleGuide';
import { ColorButton } from '../components/CustomButton';

const NUMBER_ONE_INCREMENT = 1;
const NUMBER_TWO_INCREMENT = 2;

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_increase':
            return { ...state, count: state.count + action.payload };
        case 'change_decrease':
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
};

const CounterReducerScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 20, 50, 100];

    const handelIncrease = () => {
        dispatch({ type: 'change_increase', payload: NUMBER_ONE_INCREMENT })
        console.log('Increase reducer ++ | counter is : ' + state.count);
    };

    const handelDecrease = () => {
        dispatch({ type: 'change_decrease', payload: NUMBER_ONE_INCREMENT })
        console.log('Decrease reducer -- | counter is : ' + state.count);
    };

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Counter Reducer Screen</Text>
            <SpacingView />
            <Text style={appStyles.smallestSubtitleStyle}>Learn about State Management in React Components, useReducer instead of useState. It is better to useState in this case but we are using Reducer in this screen for practising.</Text>
            <UnderlineView />
            <SpacingView />

            <View style={[appStyles.box, { width: screenWidth * 0.9 }]}>
                <View style={appStyles.rowContainer}>
                    <Text style={appStyles.subtitleStyle}>Reducer Demo | </Text>
                    <SpacingView />
                    <Text style={appStyles.titleStyle}>Counter is : {state.count}</Text>
                </View>
                <SpacingView />

                <View style={appStyles.rowContainer}>
                    <ColorButton onPress={handelIncrease} title="++ Increase 1" color="darkblue" />
                    <SpacingView />
                    <ColorButton onPress={handelDecrease} title="-- Decrease 1" color="darkred" />
                </View>
                <SpacingView />

                <View style={appStyles.rowContainer}>
                    <ColorButton
                        onPress={() => dispatch({ type: 'change_increase', payload: NUMBER_TWO_INCREMENT })}
                        title="++ Increase 2"
                        color="darkblue" />
                    <SpacingView />
                    <ColorButton
                        onPress={() => dispatch({ type: 'change_decrease', payload: NUMBER_TWO_INCREMENT })}
                        title="-- Decrease 2"
                        color="darkred" />
                </View>

                <FlatList
                    keyExtractor={(number) => number.key}
                    data={numbers}
                    renderItem={(element) => {
                        return (
                            <View>
                                <SpacingView />
                                <View style={appStyles.rowContainer}>
                                    <ColorButton
                                        onPress={() => dispatch({ type: 'change_increase', payload: element.item })}
                                        title={`++ Increase  ${element.item}`}
                                        color="darkblue" />
                                    <SpacingView />
                                    <ColorButton
                                        onPress={() => dispatch({ type: 'change_decrease', payload: element.item })}
                                        title={`-- Decrease  ${element.item}`}
                                        color="darkred" />
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
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

export default CounterReducerScreen;