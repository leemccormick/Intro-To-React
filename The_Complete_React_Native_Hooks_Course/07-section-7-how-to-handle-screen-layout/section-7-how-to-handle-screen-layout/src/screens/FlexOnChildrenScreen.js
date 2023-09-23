import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, UnderlineView, EndLineView } from '../components/StyleGuide';

const FlexOnChildrenScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.headerStyle}>Flex on Children Screen</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle}</Text>
            <Text style={appStyles.subtitleStyle}>We can use flex and alightSelf on Child as example below.</Text>
            <EndLineView />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>Demo 1 | No Flex on Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No Flex</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No Flex</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No Flex</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 2 | flex: 1 on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithFlex1}>Child 1 : flex: 1</Text>
                    <Text style={styles.textStyleWithFlex1}>Child 2 : flex: 1</Text>
                    <Text style={styles.textStyleWithFlex1}>Child 3 : flex: 1</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 3 | flex: 1 on some child</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithFlex1}>Child 1 : flex: 1</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No Flex</Text>
                    <Text style={styles.textStyleWithFlex1}>Child 3 : flex: 1</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithFlex1}>Child 1 : flex: 1</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No Flex</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No Flex</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithFlex1}>Child 1 : flex: 1</Text>
                    <Text style={styles.textStyleWithFlex1}>Child 2 : flex: 1</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No Flex</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 4 | flex can be any number.</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithFlex4}>Child 1 : flex: 4 | it takes 40 %</Text>
                    <Text style={styles.textStyleWithFlex2}>Child 2 : flex: 2 | it takes 20 %</Text>
                    <Text style={styles.textStyleWithFlex4}>Child 3 : flex: 4 | it takes 40 %</Text>
                </View>
                <SpacingView />

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithFlex4}>Child 1 : flex: 4 | it takes 45 %</Text>
                    <Text style={styles.textStyleWithFlex1}>Child 2 : flex: 1 | it takes 10 %</Text>
                    <Text style={styles.textStyleWithFlex4}>Child 3 : flex: 4 | it takes 45 %</Text>
                </View>
                <SpacingView />

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithFlex2}>Child 1 : flex: 2</Text>
                    <Text style={styles.textStyleWithFlex4}>Child 2 : flex: 4</Text>
                    <Text style={styles.textStyleWithFlex1}>Child 3 : flex: 1</Text>
                    <Text style={styles.textStyleWithFlex4}>Child 4 : flex: 4</Text>
                </View>
                <EndLineView />

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
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow'
    },
    textStyleWithFlex1: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow',
        flex: 1
    },
    textStyleWithFlex2: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'orange',
        flex: 2
    },
    textStyleWithFlex4: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'pink',
        flex: 4
    },
    subtitleStyle: {
        fontSize: 20,
        textAlign: 'left',
        color: 'gray'
    },
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        height: 150,
    },
});

export default FlexOnChildrenScreen;
