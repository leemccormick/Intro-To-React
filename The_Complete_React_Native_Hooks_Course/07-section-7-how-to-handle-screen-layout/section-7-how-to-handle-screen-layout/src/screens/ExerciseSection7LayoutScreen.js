import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, EndLineView, SpacingView } from '../components/StyleGuide';

const ExerciseSection7LayoutScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';
    let transparentColor = 'rgba(0, 0, 0, 0.0)';
    const BoxWithColor = ({ borderColor, backgroundColor }) => {
        return (
            <View style={[styles.boxStyle, { borderColor: borderColor }, { backgroundColor: backgroundColor }]}></View>
        );
    };

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={styles.textStyle}>Layout Exercise Screen</Text>
            <Text style={styles.subtitleStyle}>{section7subtitle}</Text>
            <Text style={appStyles.smallestSubtitleStyle}>Show 3 different view element with the givent layout</Text>
            <EndLineView />

            <ScrollView>
                <Text style={appStyles.titleStyle}>This is a solution by Lee McCormick.</Text>
                <EndLineView />
                <View style={styles.mainViewStyle}>
                    <View style={styles.appTitleContainer}>
                        <Text style={styles.appTitleStyle}>App</Text>
                    </View>

                    <View style={styles.rowContainerStyle}>
                        <BoxWithColor borderColor={'red'} backgroundColor={'pink'} />
                        <BoxWithColor borderColor={transparentColor} backgroundColor={transparentColor} />
                        <BoxWithColor borderColor={'darkblue'} backgroundColor={'lightblue'} />
                    </View>

                    <View style={styles.rowContainerStyle}>
                        <BoxWithColor borderColor={transparentColor} backgroundColor={transparentColor} />
                        <BoxWithColor borderColor={'darkgreen'} backgroundColor={'lightgreen'} />
                        <BoxWithColor borderColor={transparentColor} backgroundColor={transparentColor} />
                    </View>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Solution 1 : Use marginTop</Text>
                <Text style={appStyles.smallestSubtitleStyle}> by Stephen Grider</Text>
                <EndLineView />
                <View style={solutionStyles.parentStyle}>
                    <View style={solutionStyles.viewOneStyle} />
                    <View style={solutionStyles.viewTwoStyle} />
                    <View style={solutionStyles.viewThreeStyle} />
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Solution 2 : Use alignSelf : flex-end</Text>
                <Text style={appStyles.smallestSubtitleStyle}> by Stephen Grider</Text>
                <EndLineView />
                <View style={solutionStyles.parentStyleSolution2}>
                    <View style={solutionStyles.viewOneStyle} />
                    <View style={solutionStyles.viewTwoStyleSolution2} />
                    <View style={solutionStyles.viewThreeStyle} />
                </View>
                <EndLineView />


                <Text style={appStyles.titleStyle}>Solution 3 : Use top: 50</Text>
                <Text style={appStyles.smallestSubtitleStyle}> by Stephen Grider</Text>
                <EndLineView />
                <View style={solutionStyles.parentStyle}>
                    <View style={solutionStyles.viewOneStyle} />
                    <View style={solutionStyles.viewTwoStyleSolution3} />
                    <View style={solutionStyles.viewThreeStyle} />
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Solution 4 : Wrap view 2 on parent</Text>
                <Text style={appStyles.smallestSubtitleStyle}> by Stephen Grider</Text>
                <EndLineView />
                <View style={solutionStyles.parentStyle}>
                    <View style={solutionStyles.viewOneStyle} />
                    <View style={solutionStyles.viewTwoParentSolution4} >
                        <View style={solutionStyles.viewTwoStyleSolution4} />
                    </View>
                    <View style={solutionStyles.viewThreeStyle} />
                </View>
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
            </ScrollView>
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
    },
    mainViewStyle: {
        borderWidth: 1,
        borderColor: 'lightgray',
        height: 200,
        alignItems: "stretch"
    },
    appTitleContainer: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch",
        flex: 1,
        justifyContent: "center",
        fontSize: 36,
    },
    appTitleStyle: {
        alignSelf: "center",
        fontSize: 36,
    },
    rowContainerStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between"
    },
    boxStyle: {
        borderWidth: 1,
        alignSelf: "center",
        width: 80,
        height: '100%'
    },
});

const solutionStyles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        marginTop: 50
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    },
    parentStyleSolution2: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTwoStyleSolution2: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewTwoStyleSolution3: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        top: 50
    },
    viewTwoParentSolution4: {
        height: 100,
        justifyContent: "flex-end"
    },
    viewTwoStyleSolution4: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
    },
});

export default ExerciseSection7LayoutScreen;