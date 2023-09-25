import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, EndLineView, UnderlineView } from '../components/StyleGuide';

const ThePositionPropertyScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.headerStyle}>The Position Property Screen</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle}</Text>
            <Text style={appStyles.subtitleStyle}>There are 2 types for position inclucing abosolute and relative.</Text>
            <Text style={appStyles.subtitleStyle}>When we use the absolute on the child, the sibling children around will ignore the abosolute child's position.</Text>
            <Text style={appStyles.subtitleStyle}>By default position is relative</Text>
            <EndLineView />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>Demo 1 | No Position on Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.subtitleStyle}>Demo 1.1 | No Position on Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 2 | Abosolute Position on 3 All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStylePositionAbsolube}>Child 1 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 2 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 3 : Text With position: 'abosolute' </Text>
                </View>
                <EndLineView />
                <Text style={appStyles.subtitleStyle}>Demo 2.1 | Abosolute Position on 3 All Children  with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStylePositionAbsolube}>Child 1 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 2 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 3 : Text With position: 'abosolute' </Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 3 | Relative Position on 3 All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStylePositionRalative}>Child 1 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 2 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 3 : Text With position: 'relative' </Text>
                </View>
                <EndLineView />
                <Text style={appStyles.subtitleStyle}>Demo 3.1 | Relative Position on 3 All Children  with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStylePositionRalative}>Child 1 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 2 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 3 : Text With position: 'relative' </Text>
                </View>
                <EndLineView />
                <Text style={appStyles.titleStyle}>Demo 4 | Abosolute Position on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 2 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>

                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStylePositionAbsolube}>Child 1 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>

                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 4.1 | Abosolute Position on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 2 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>

                <SpacingView />
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStylePositionAbsolube}>Child 1 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 5 | Abosolute Position on Some Children and alignSelf</Text>
                <View style={[styles.viewStyle, { height: 300 }]}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 4 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 6 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 8 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfCenterPositionAbsolube}>Child 9 : 'abosolute' | alightSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEndPositionAbsolube}>Child 10 : 'abosolute' | alightSelf: 'flex-end'</Text>
                    <Text style={styles.textStylePositionRalative}>Child 11 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 12 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 13 : Text With position: 'relative' </Text>
                </View>
                <SpacingView />

                <Text style={appStyles.subtitleStyle}>Demo 5.1 | Abosolute Position on Some Children and alignSel with viewStyle alight center</Text>
                <View style={[styles.viewStyleAlightItems, { height: 300 }]}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStylePositionAbsolube}>Child 4 : Text With position: 'abosolute' </Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 6 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 8 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfCenterPositionAbsolube}>Child 9 : 'abosolute' | alightSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEndPositionAbsolube}>Child 10 : 'abosolute' | alightSelf: 'flex-end'</Text>
                    <Text style={styles.textStylePositionRalative}>Child 11 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 12 : Text With position: 'relative' </Text>
                    <Text style={styles.textStylePositionRalative}>Child 13 : Text With position: 'relative' </Text>
                </View>
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <EndLineView />
            </ScrollView>
            <SpacingView />
            <SpacingView />
            <SpacingView />
            <SpacingView />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'grey'
    },
    textStylePositionRalative: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'yellow',
        position: "relative",
        fontSize: '18'
    },
    textStylePositionAbsolube: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'pink',
        position: "absolute",
        fontSize: '20'
    },
    textStyleAlignSelfCenterPositionAbsolube: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        fontSize: '18',
        alignSelf: 'center',
        position: "absolute"
    },
    textStyleAlignSelfFlexEndPositionAbsolube: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'orange',
        alignSelf: 'flex-end',
        position: "absolute"
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
        height: 100,
    },
    viewStyleAlightItems: {
        borderWidth: 1,
        borderColor: 'black',
        width: 300,
        height: 100,
        alignItems: 'center',
        backgroundColor: 'green',
    },
});

export default ThePositionPropertyScreen;