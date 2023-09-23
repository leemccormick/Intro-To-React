import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { appStyles, screenWidth, SpacingView, UnderlineView } from '../components/StyleGuide';
import ColorCounterReducer from '../components/ColorCounterReducer';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 } --> How to change state object
    // Always return the new object....
    switch (action.colorToChange) {
        case 'red':
            // Never going to do : state.red = state.red - 15;
            // But rebuild the new object.
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

// Usually, by convention, we' ll instead use : 
// { type: 'change_red', payload: 15 }
const reducerConvention = (stateConvention, action) => {
    // Always return the new object....
    switch (action.type) {
        case 'change_red':
            return stateConvention.redConvention + action.payload > 255 || stateConvention.redConvention + action.payload < 0
                ? stateConvention
                : { ...stateConvention, redConvention: stateConvention.redConvention + action.payload };
        case 'change_green':
            return stateConvention.greenConvention + action.payload > 255 || stateConvention.greenConvention + action.payload < 0
                ? stateConvention
                : { ...stateConvention, greenConvention: stateConvention.greenConvention + action.payload };
        case 'change_blue':
            return stateConvention.blueConvention + action.payload > 255 || stateConvention.blueConvention + action.payload < 0
                ? stateConvention
                : { ...stateConvention, blueConvention: stateConvention.blueConvention + action.payload };
        default:
            return stateConvention;
    }
};

const SquareReducerScreen = () => {
    // state === object 
    // dispatch === run my reducer function
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;
    console.log('red in Square Reducer Screen is : ' + red);
    console.log('green in Square Reducer Screen is : ' + green);
    console.log('blue in Square Reducer Screen is : ' + blue);
    console.log(state);

    // Usually, by convention, we' ll instead use : 
    // { type: 'change_red', payload: 15 }
    const [stateConvention, dispatchConvention] = useReducer(reducerConvention, { redConvention: 0, greenConvention: 0, blueConvention: 0 })
    console.log('stateConvention in Square Reducer Screen is : ' + stateConvention);
    console.log(stateConvention);
    console.log(stateConvention.redConvention);
    console.log(stateConvention.greenConvention);
    console.log(stateConvention.blueConvention);

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Square Reducer Screen</Text>
            <Text style={appStyles.subtitleStyle}>Learn about State Management in React Components, this screen useReducer instead of useState...</Text>
            <UnderlineView />
            <SpacingView />
            <ColorCounterReducer
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                onIncreaseConvention={() => dispatchConvention({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecreaseConvention={() => dispatchConvention({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color="Red" />
            <SpacingView />

            <ColorCounterReducer
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                onIncreaseConvention={() => dispatchConvention({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecreaseConvention={() => dispatchConvention({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color="Green" />
            <SpacingView />

            <ColorCounterReducer
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                onIncreaseConvention={() => dispatchConvention({ type: 'change_blue', payload: COLOR_INCREMENT })}
                onDecreaseConvention={() => dispatchConvention({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
                color="Blue" />
            <SpacingView />

            <View style={appStyles.rowContainer}>
                <View style={[{
                    height: 100,
                    width: screenWidth * 0.4,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }, appStyles.centerContainer]} >
                    <Text style={appStyles.smallestSubtitleStyle}>colorToChange,</Text>
                    <Text style={appStyles.smallestSubtitleStyle}>amount</Text>
                </View>
                <SpacingView />

                <View style={[{
                    height: 100,
                    width: screenWidth * 0.4,
                    backgroundColor: `rgb(${stateConvention.redConvention}, ${stateConvention.greenConvention}, ${stateConvention.blueConvention})`
                }, appStyles.centerContainer]} >
                    <Text style={appStyles.subtitleStyle}>Covention</Text>
                    <Text style={appStyles.smallestSubtitleStyle}>type, payload</Text>
                </View>
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

export default SquareReducerScreen;