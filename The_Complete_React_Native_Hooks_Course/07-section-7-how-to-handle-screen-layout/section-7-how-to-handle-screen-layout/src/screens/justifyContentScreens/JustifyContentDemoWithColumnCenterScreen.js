import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, UnderlineVie, EndLineView } from '../../components/StyleGuide';

const JustifyContentDemoWithColumnCenterScreen = () => {
    let subtitle = 'Learn how to handle screen layout with justify content';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.titleStyle}>Column Center With Justify Content</Text>
            <Text style={styles.subtitleStyle}>{subtitle}</Text>
            <EndLineView />

            <ScrollView>
                <View style={appStyles.box}>
                    <Text style={appStyles.subtitleStyle}>Demo 1 : justifyContent is flex-start </Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumnJustifyFlexStart}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 2  : justifyContent is center </Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumnJustifyCenter}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 3 : justifyContent  is flex-end </Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumnJustifyFlexEnd}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 4 : justifyContent is space-between </Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumnJustifySpaceBetween}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 5 : justifyContent  is space-around </Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumnJustifySpaceAround}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 6 : justifyContent  is space-evenly </Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumnJustifySpaceEvenly}>
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
    viewStyleWithAlignItemsCenterFlexDirectionColumnJustifyFlexStart: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "flex-start"

    },
    viewStyleWithAlignItemsCenterFlexDirectionColumnJustifyCenter: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "center"
    },
    viewStyleWithAlignItemsCenterFlexDirectionColumnJustifyFlexEnd: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "flex-end"
    },
    viewStyleWithAlignItemsCenterFlexDirectionColumnJustifySpaceAround: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "space-around"
    },
    viewStyleWithAlignItemsCenterFlexDirectionColumnJustifySpaceBetween: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "space-between"
    },
    viewStyleWithAlignItemsCenterFlexDirectionColumnJustifySpaceEvenly: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: "column",
        width: 200,
        height: 200,
        justifyContent: "space-evenly"
    },
});

export default JustifyContentDemoWithColumnCenterScreen;