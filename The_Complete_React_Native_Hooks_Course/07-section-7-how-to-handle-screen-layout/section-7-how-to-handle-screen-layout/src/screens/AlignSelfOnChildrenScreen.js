import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, EndLineView } from '../components/StyleGuide';

const AlignSelfOnChildrenScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.headerStyle}>Align Self on Children Screen</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle}</Text>
            <Text style={appStyles.subtitleStyle}>We can use flex and alightSelf on Child as example below.</Text>
            <Text style={appStyles.subtitleStyle}>We can use alightSelf on Child to override the alignItems on Parent.</Text>
            <EndLineView />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>Main Demo | No AlignSelf on Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Main Demo | All AlignSelf Type on Children</Text>
                <View style={[styles.viewStyle, { height: 150 }]}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 2 : alignSelf: 'stretch'</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 3 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 4 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 5 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 6 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 7 : alignSelf: 'baseline'</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Main Demo | All AlignSelf Type on Children But AlignItems: 'center'</Text>
                <View style={[styles.viewStyleAlightItems, { height: 150 }]}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 2 : alignSelf: 'stretch'</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 3 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 4 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 5 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 6 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 7 : alignSelf: 'baseline'</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 1 | stretch : it is a default.</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 1 : alignSelf:  'stretch'</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 2 : alignSelf:  'stretch'</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 3 : alignSelf:  'stretch'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 2 : alignSelf:  'stretch'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.smallestSubtitleStyle}> stretch inside Parent with alignItems: 'center'</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 1 : alignSelf:  'stretch'</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 2 : alignSelf:  'stretch'</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 3 : alignSelf:  'stretch'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfStretch}>Child 2 : alignSelf:  'stretch'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 2 | flex-start</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 1 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 2 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 3 : alignSelf: 'flex-start'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 2 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.smallestSubtitleStyle}> flex-start inside Parent with alignItems: 'center'</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 1 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 2 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 3 : alignSelf: 'flex-start'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfFlexStar}>Child 2 : alignSelf: 'flex-start'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 3 | center</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 1 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 2 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 3 : alignSelf: 'center'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 2 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.smallestSubtitleStyle}> center inside Parent with alignItems: 'center'</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 1 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 2 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 3 : alignSelf: 'center'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfCenter}>Child 2 : alignSelf: 'center'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 4 | flex-end</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 1 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 2 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 3 : alignSelf: 'flex-end'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 2 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.smallestSubtitleStyle}> flex-end inside Parent with alignItems: 'center'</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 1 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 2 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 3 : alignSelf: 'flex-end'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfFlexEnd}>Child 2 : alignSelf: 'flex-end'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 5 | auto</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 1 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 2 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 3 : alignSelf: 'auto'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 2 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.smallestSubtitleStyle}> auto inside Parent with alignItems: 'center'</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 1 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 2 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 3 : alignSelf: 'auto'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfAuto}>Child 2 : alignSelf: 'auto'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 6 | baseline</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 1 : alignSelf: 'baseline'</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 2 : alignSelf: 'baseline'</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 3 : alignSelf: 'baseline'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 2 : alignSelf: 'baseline'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.smallestSubtitleStyle}> baseline inside Parent with alignItems: 'center'</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 1 : alignSelf: 'baseline'</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 2 : alignSelf: 'baseline'</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 3 : alignSelf: 'baseline'</Text>
                </View>
                <SpacingView />
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyleAlignSelfBaseline}>Child 2 : alignSelf: 'baseline'</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text With No AlignSelf</Text>
                </View>
                <SpacingView />
                <EndLineView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
                <SpacingView />
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
    textStyleAlignSelfCenter: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow',
        alignSelf: 'center'
    },
    textStyleAlignSelfFlexEnd: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow',
        alignSelf: 'flex-end'
    },
    textStyleAlignSelfFlexStar: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow',
        alignSelf: 'flex-start'
    },
    textStyleAlignSelfStretch: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow',
        alignSelf: 'stretch'
    },
    textStyleAlignSelfBaseline: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow',
        alignSelf: 'baseline'
    },
    textStyleAlignSelfAuto: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow',
        alignSelf: 'auto'
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

export default AlignSelfOnChildrenScreen;