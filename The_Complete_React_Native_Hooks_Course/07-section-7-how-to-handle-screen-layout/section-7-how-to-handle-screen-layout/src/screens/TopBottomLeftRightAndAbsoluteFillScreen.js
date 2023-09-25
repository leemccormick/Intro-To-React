import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, EndLineView } from '../components/StyleGuide';

const TopBottomLeftRightAndAbsoluteFillScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.headerStyle}>Top Bottom Left Right And Absolute Fill Objects</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle}</Text>
            <Text style={appStyles.subtitleStyle}>We can use top. bottom, left, right to reposition layout as example below</Text>
            <Text style={appStyles.subtitleStyle}>Absolute Fill Objects by using ...StyleSheet.abosoluteFillObject, or set 0 to top, bottom, left and right. This will let the child fill on parent.</Text>
            <EndLineView />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>Main Demo 1| No Position on Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Main Demo 1.1 | No Position on Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Main Demo 2 | Top Bottom Left Right Position on Children</Text>
                <View style={[styles.viewStyle, { height: 400 }]}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text</Text>
                    <Text style={styles.textStyleTop}>Child 3 : Text With top: 5</Text>
                    <Text style={styles.textStyle}>Child 4 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                    <Text style={styles.textStyleBottom}>Child 6 : Text With bottom: 5</Text>
                    <Text style={styles.textStyle}>Child 7 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 8 : Normal Text</Text>
                    <Text style={styles.textStyleLeft}>Child 9 : Text With left: 10</Text>
                    <Text style={styles.textStyle}>Child 10 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 11 : Normal Text</Text>
                    <Text style={styles.textStyleRight}>Child 12 : Text With right: 10</Text>
                    <Text style={styles.textStyle}>Child 13 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 14 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute}>Child 15 : position: "absolute" with top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyle}>Child 16 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 17 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 18 :   position: "absolute" with ...StyleSheet.absoluteFill </Text>
                    <Text style={styles.textStyle}>Child 19 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 20 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 21 :   position: "absolute" with ...StyleSheet.absoluteFillObject </Text>
                    <Text style={styles.textStyle}>Child 22 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 23 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 24 : position: "absolute" with top: 20, left: 20, bottom: 20 and right: 20</Text>
                </View>
                <SpacingView />
                <View style={[styles.viewStyle]}>
                    <Text style={styles.textStyleTop}>Child 1 : Text With top: 5</Text>
                    <Text style={styles.textStyleBottom}>Child 2 : Text With bottom: 5</Text>
                    <Text style={styles.textStyleLeft}>Child 3 : Text With left: 10</Text>
                    <Text style={styles.textStyleRight}>Child 4 : Text With right: 10</Text>
                </View>
                <SpacingView />
                <View style={[styles.viewStyle]}>
                    <Text style={styles.textStyleAbosolute}>Child 1 : position: "absolute" with top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 2 :   position: "absolute" with ...StyleSheet.absoluteFill </Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 3 :   position: "absolute" with ...StyleSheet.absoluteFillObject </Text>
                    <Text style={styles.textStyleAbosolute20}>Child 4 : position: "absolute" with top: 20, left: 20, bottom: 20 and right: 20</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Main Demo 2.1 | Top Bottom Left Right Position on Children with viewStyle alight center</Text>
                <View style={[styles.viewStyleAlightItems, { height: 400 }]}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text With No AlignSelf</Text>
                    <Text style={styles.textStyle}>Child 2 : Normal Text</Text>
                    <Text style={styles.textStyleTop}>Child 3 : Text With top: 5</Text>
                    <Text style={styles.textStyle}>Child 4 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                    <Text style={styles.textStyleBottom}>Child 6 : Text With bottom: 5</Text>
                    <Text style={styles.textStyle}>Child 7 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 8 : Normal Text</Text>
                    <Text style={styles.textStyleLeft}>Child 9 : Text With left: 10</Text>
                    <Text style={styles.textStyle}>Child 10 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 11 : Normal Text</Text>
                    <Text style={styles.textStyleRight}>Child 12 : Text With right: 10</Text>
                    <Text style={styles.textStyle}>Child 13 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 14 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute}>Child 15 : position: "absolute" with top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyle}>Child 16 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 17 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 18 :   position: "absolute" with ...StyleSheet.absoluteFill </Text>
                    <Text style={styles.textStyle}>Child 19 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 20 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 21 :   position: "absolute" with ...StyleSheet.absoluteFillObject </Text>
                    <Text style={styles.textStyle}>Child 22 : Normal Text</Text>
                    <Text style={styles.textStyle}>Child 23 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 24 : position: "absolute" with top: 20, left: 20, bottom: 20 and right: 20</Text>
                </View>
                <SpacingView />
                <View style={[styles.viewStyleAlightItems]}>
                    <Text style={styles.textStyleTop}>Child 1 : Text With top: 5</Text>
                    <Text style={styles.textStyleBottom}>Child 2 : Text With bottom: 5</Text>
                    <Text style={styles.textStyleLeft}>Child 3 : Text With left: 10</Text>
                    <Text style={styles.textStyleRight}>Child 4 : Text With right: 10 </Text>
                </View>
                <SpacingView />
                <View style={[styles.viewStyleAlightItems]}>
                    <Text style={styles.textStyleAbosolute}>Child 1 : position: "absolute" with top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 2 :   position: "absolute" with ...StyleSheet.absoluteFill </Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 3 :   position: "absolute" with ...StyleSheet.absoluteFillObject </Text>
                    <Text style={styles.textStyleAbosolute20}>Child 4 : position: "absolute" with top: 20, left: 20, bottom: 20 and right: 20</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 1 | Position is Top</Text>
                <Text style={appStyles.subtitleStyle}>Demo 1.1 | Position is Top on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleTop}>Child 1 : Text With top: 5</Text>
                    <Text style={styles.textStyleTop}>Child 2 : Text With top: 5</Text>
                    <Text style={styles.textStyleTop}>Child 3 : Text With top: 5</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 1.2 | Position is Top on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleTop}>Child 2 : Text With top: 5</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleTop}>Child 4 : Text With top: 5</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 1.3 | Position is Top on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleTop}>Child 1 : Text With top: 5</Text>
                    <Text style={styles.textStyleTop}>Child 2 : Text With top: 5</Text>
                    <Text style={styles.textStyleTop}>Child 3 : Text With top: 5</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 1.4 | Position is Top on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleTop}>Child 2 : Text With top: 5</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleTop}>Child 4 : Text With top: 5</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 2 | Position is Bottom</Text>
                <Text style={appStyles.subtitleStyle}>Demo 2.1 | Position is Bottom on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleBottom}>Child 1 : Text With bottom: 5</Text>
                    <Text style={styles.textStyleBottom}>Child 2 : Text With bottom: 5</Text>
                    <Text style={styles.textStyleBottom}>Child 3 : Text With bottom: 5</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 2.2 | Position is Bottom on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleBottom}>Child 2 : Text With bottom: 5</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleBottom}>Child 4 : Text With bottom: 5</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 2.3 | Position is Bottom on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleBottom}>Child 1 : Text With bottom: 5</Text>
                    <Text style={styles.textStyleBottom}>Child 2 : Text With bottom: 5</Text>
                    <Text style={styles.textStyleBottom}>Child 3 : Text With bottom: 5</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 2.4 | Position is Bottom on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleBottom}>Child 2 : Text With bottom: 5</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleBottom}>Child 4 : Text With bottom: 5</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 3 | Position is Left</Text>
                <Text style={appStyles.subtitleStyle}>Demo 3.1 | Position is Left on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleLeft}>Child 1 : Text With left: 10</Text>
                    <Text style={styles.textStyleLeft}>Child 2 : Text With left: 10</Text>
                    <Text style={styles.textStyleLeft}>Child 3 : Text With left: 10</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 3.2 | Position is Left on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleLeft}>Child 2 : Text With left: 10</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleLeft}>Child 4 : Text With left: 10</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 3.3 | Position is Left on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleLeft}>Child 1 : Text With left: 10</Text>
                    <Text style={styles.textStyleLeft}>Child 2 : Text With left: 10</Text>
                    <Text style={styles.textStyleLeft}>Child 3 : Text With left: 10</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 3.4 | Position is Left on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleLeft}>Child 2 : Text With left: 10</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleLeft}>Child 4 : Text With left: 10</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 4 | Position is Right</Text>
                <Text style={appStyles.subtitleStyle}>Demo 4.1 | Position is Right on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleRight}>Child 1 : Text With right: 10</Text>
                    <Text style={styles.textStyleRight}>Child 2 : Text With right: 10</Text>
                    <Text style={styles.textStyleRight}>Child 3 : Text With right: 10</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 4.2 | Position is Right on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleRight}>Child 2 : Text With right: 10</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleRight}>Child 4 : Text With right: 10</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 4.3 | Position is Right on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleRight}>Child 1 : Text With right: 10</Text>
                    <Text style={styles.textStyleRight}>Child 2 : Text With right: 10</Text>
                    <Text style={styles.textStyleRight}>Child 3 : Text With right: 10</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 4.4 | Position is Right on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleRight}>Child 2 : Text With right: 10</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleRight}>Child 4 : Text With right: 10</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 5 | Position is "absolute" with top: 0, left: 0, bottom: 0 and right: 0</Text>
                <Text style={appStyles.subtitleStyle}>Demo 5.1 | 0 on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAbosolute}>Child 1 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyleAbosolute}>Child 2 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyleAbosolute}>Child 3 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 5.2 |  0 on on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute}>Child 2 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute}>Child 4 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 5.3 |  0 ont on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAbosolute}>Child 1 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyleAbosolute}>Child 2 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyleAbosolute}>Child 3 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 5.4 | 0 on on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute}>Child 2 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute}>Child 4 : top: 0, left: 0, bottom: 0 and right: 0</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 6 | Position is "absolute" with top: 20, left: 20, bottom: 20 and right: 20</Text>
                <Text style={appStyles.subtitleStyle}>Demo 6.1 | 20 on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAbosolute20}>Child 1 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 2 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 3 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 6.2 |  20 on on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 2 :  top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 4 :  top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 6.3 |  20 ont on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAbosolute20}>Child 1 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 2 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 3 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 6.4 | 20 on on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 2 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 4 : top: 20, left: 20, bottom: 20 and right: 20</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <EndLineView />

                <Text style={appStyles.titleStyle}>Demo 7 | ...StyleSheet.absoluteFill</Text>
                <Text style={appStyles.subtitleStyle}>Demo 7.1 | ...StyleSheet.absoluteFill on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAbosolute20}>Child 1 :  ...StyleSheet.absoluteFill</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 2 :  ...StyleSheet.absoluteFill</Text>
                    <Text style={styles.textStyleAbosolute20}>Child 3 :  ...StyleSheet.absoluteFill</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 7.2 |  ...StyleSheet.absoluteFill on on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 2 :  ...StyleSheet.absoluteFill </Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 4 :   ...StyleSheet.absoluteFill</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 7.3 |  ...StyleSheet.absoluteFill ont on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 1 :  ...StyleSheet.absoluteFill</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 2 :  ...StyleSheet.absoluteFill</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 3 :  ...StyleSheet.absoluteFill</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 7.4 | ...StyleSheet.absoluteFill on on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 2 :  ...StyleSheet.absoluteFill</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFill}>Child 4 :  ...StyleSheet.absoluteFill</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <SpacingView />
                <EndLineView />


                <Text style={appStyles.titleStyle}>Demo 8 | ...StyleSheet.abosoluteFillObject</Text>
                <Text style={appStyles.subtitleStyle}>Demo 8.1 | ...StyleSheet.abosoluteFillObject on All Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 1 :  ...StyleSheet.abosoluteFillObject</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 2 :  ...StyleSheet.abosoluteFillObject</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 3 :  ...StyleSheet.abosoluteFillObject</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 8.2 |  ...StyleSheet.abosoluteFillObject on on Some Children</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 2 :  ...StyleSheet.abosoluteFillObject </Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 4 :   ...StyleSheet.abosoluteFillObject</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <Text style={appStyles.subtitleStyle}>Demo 8.3 |  ...StyleSheet.abosoluteFillObject ont on All Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 1 :  ...StyleSheet.abosoluteFillObject</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 2 :  ...StyleSheet.abosoluteFillObject</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 3 :  ...StyleSheet.abosoluteFillObject</Text>
                </View>
                <SpacingView />
                <Text style={appStyles.subtitleStyle}>Demo 8.4 | ...StyleSheet.abosoluteFillObject on on Some Children with viewStyle alight center</Text>
                <View style={styles.viewStyleAlightItems}>
                    <Text style={styles.textStyle}>Child 1 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 2 :  ...StyleSheet.abosoluteFillObject</Text>
                    <Text style={styles.textStyle}>Child 3 : Normal Text</Text>
                    <Text style={styles.textStyleAbosoluteWtihStyleSheetFillObject}>Child 4 :  ...StyleSheet.abosoluteFillObject</Text>
                    <Text style={styles.textStyle}>Child 5 : Normal Text</Text>
                </View>
                <EndLineView />
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
    textStyleAbosolute: {
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: 20,
        color: 'yellow',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    textStyleAbosolute20: {
        borderWidth: 2,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        fontSize: 20,
        color: 'blue',
        position: "absolute",
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    },
    textStyleAbosoluteWtihStyleSheetFill: {
        borderWidth: 4,
        borderColor: 'purple',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: 30,
        color: 'orange',
        ...StyleSheet.absoluteFill,
    },
    textStyleAbosoluteWtihStyleSheetFillObject: {
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        fontSize: 35,
        color: 'red',
        ...StyleSheet.absoluteFillObject,
    },
    textStyleTop: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'yellow',
        top: 5,
    },
    textStyleBottom: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'orange',
        bottom: 5,
    },
    textStyleLeft: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'red',
        left: 10,
    },
    textStyleRight: {
        borderWidth: 1,
        borderColor: 'purple',
        backgroundColor: 'pink',
        right: 10,
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

export default TopBottomLeftRightAndAbsoluteFillScreen;