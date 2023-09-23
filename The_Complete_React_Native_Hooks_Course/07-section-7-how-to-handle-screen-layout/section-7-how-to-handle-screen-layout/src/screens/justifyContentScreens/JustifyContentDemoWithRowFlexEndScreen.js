import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, EndLineView } from '../../components/StyleGuide';

const JustifyContentDemoWithRowFlexEndScreen = () => {
    let subtitle = 'Learn how to handle screen layout with justify content';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.titleStyle}>Row Flex-End With Justify Content</Text>
            <Text style={styles.subtitleStyle}>{subtitle}</Text>
            <EndLineView />

            <ScrollView>
                <View style={appStyles.box}>
                    <Text style={appStyles.subtitleStyle}>Demo 1 : justifyContent is flex-start </Text>
                    <View style={styles.viewStyleWithRowJustifyFlexStart}>
                        <Text style={styles.textStyleBlue}> 1 </Text>
                        <Text style={styles.textStyleBlue}> 2 </Text>
                        <Text style={styles.textStyleBlue}> 3 </Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 2  : justifyContent is center </Text>
                    <View style={styles.viewStyleWithRowJustifyCenter}>
                        <Text style={styles.textStyleBlue}> 1 </Text>
                        <Text style={styles.textStyleBlue}> 2 </Text>
                        <Text style={styles.textStyleBlue}> 3 </Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 3 : justifyContent  is flex-end </Text>
                    <View style={styles.viewStyleWithRowJustifyFlexEnd}>
                        <Text style={styles.textStyleBlue}> 1 </Text>
                        <Text style={styles.textStyleBlue}> 2 </Text>
                        <Text style={styles.textStyleBlue}> 3 </Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 4 : justifyContent is space-between </Text>
                    <View style={styles.viewStyleWithRowJustifySpaceBetween}>
                        <Text style={styles.textStyleBlue}> 1 </Text>
                        <Text style={styles.textStyleBlue}> 2 </Text>
                        <Text style={styles.textStyleBlue}> 3 </Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 5 : justifyContent  is space-around </Text>
                    <View style={styles.viewStyleWithRowJustifySpaceAround}>
                        <Text style={styles.textStyleBlue}> 1 </Text>
                        <Text style={styles.textStyleBlue}> 2 </Text>
                        <Text style={styles.textStyleBlue}> 3 </Text>
                    </View>
                    <EndLineView />

                    <Text style={appStyles.subtitleStyle}>Demo 6 : justifyContent  is space-evenly </Text>
                    <View style={styles.viewStyleWithRowJustifySpaceEvenly}>
                        <Text style={styles.textStyleBlue}> 1 </Text>
                        <Text style={styles.textStyleBlue}> 2 </Text>
                        <Text style={styles.textStyleBlue}> 3 </Text>
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
    textStyleBlue: {
        borderWidth: 1,
        borderColor: 'darkblue',
        backgroundColor: 'lightblue',
        color: 'black'
    },
    viewStyleWithRowJustifyFlexStart: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "flex-end",
        flexDirection: "row",
        width: 200,
        height: 200,
        justifyContent: "flex-start"

    },
    viewStyleWithRowJustifyCenter: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "flex-end",
        flexDirection: "row",
        width: 200,
        height: 200,
        justifyContent: "center"
    },
    viewStyleWithRowJustifyFlexEnd: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "flex-end",
        flexDirection: "row",
        width: 200,
        height: 200,
        justifyContent: "flex-end"
    },
    viewStyleWithRowJustifySpaceAround: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "flex-end",
        flexDirection: "row",
        width: 200,
        height: 200,
        justifyContent: "space-around"
    },
    viewStyleWithRowJustifySpaceBetween: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "flex-end",
        flexDirection: "row",
        width: 200,
        height: 200,
        justifyContent: "space-between"
    },
    viewStyleWithRowJustifySpaceEvenly: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "flex-end",
        flexDirection: "row",
        width: 200,
        height: 200,
        justifyContent: "space-evenly"
    },
});

export default JustifyContentDemoWithRowFlexEndScreen;