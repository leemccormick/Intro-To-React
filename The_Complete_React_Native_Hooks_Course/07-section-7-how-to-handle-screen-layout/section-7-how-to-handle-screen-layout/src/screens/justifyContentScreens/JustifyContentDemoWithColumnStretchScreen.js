import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, EndLineView } from '../../components/StyleGuide';

const JustifyContentDemoWithColumnStretchScreen = () => {
    let subtitle = 'Learn how to handle screen layout with justify content';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.titleStyle}>Column Stretch With Justify Content</Text>
            <Text style={styles.subtitleStyle}>{subtitle}</Text>
            <EndLineView />

            <ScrollView>
                <View style={appStyles.box}>
                    <Text style={appStyles.subtitleStyle}>Demo 1 : justifyContent is flex-start </Text>
                    <View style={styles.viewStyleWithColumnJustifyFlexStart}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 2  : justifyContent is center </Text>
                    <View style={styles.viewStyleWithColumnJustifyCenter}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 3 : justifyContent  is flex-end </Text>
                    <View style={styles.viewStyleWithColumnJustifyFlexEnd}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 4 : justifyContent is space-between </Text>
                    <View style={styles.viewStyleWithColumnJustifySpaceBetween}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 5 : justifyContent  is space-around </Text>
                    <View style={styles.viewStyleWithColumnJustifySpaceAround}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 6 : justifyContent  is space-evenly </Text>
                    <View style={styles.viewStyleWithColumnJustifySpaceEvenly}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />
                </View>
                <SpacingView />
            </ScrollView>
            <SpacingView />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyleGreen: {
        borderWidth: 1,
        borderColor: 'darkgreen',
        backgroundColor: 'green',
        color: 'black'
    },
    viewStyleWithColumnJustifyFlexStart: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch",
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "flex-start"

    },
    viewStyleWithColumnJustifyCenter: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch",
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "center"
    },
    viewStyleWithColumnJustifyFlexEnd: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch",
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "flex-end"
    },
    viewStyleWithColumnJustifySpaceAround: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch",
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "space-around"
    },
    viewStyleWithColumnJustifySpaceBetween: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch",
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "space-between"
    },
    viewStyleWithColumnJustifySpaceEvenly: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch",
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "space-evenly"
    },
});

export default JustifyContentDemoWithColumnStretchScreen;