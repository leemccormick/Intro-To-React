import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { appStyles, SpacingView, UnderlineView } from '../components/StyleGuide';

const FlexDirectionScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';
    const endLine = (
        <View>
            <SpacingView />
            <UnderlineView />
            <SpacingView />
        </View>
    );

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.headerStyle}>Flex Direction Screen</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle} | There are 2 posible ways for flexDirection including column and row. This is a demo with 3 children text inside the view.</Text>
            {endLine}

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>By default : Flex Direction is column</Text>
                <View style={styles.viewStyle}>
                    <Text>This is a text with No Style inside a View with this viewStyle |   borderWidth: 1 | borderColor: 'black'</Text>
                    <Text>Child 1</Text>
                    <Text>Child 2</Text>
                    <Text>Child 3</Text>
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>This is a text with style |  borderWidth: 1 | borderColor: 'red' | backgroundColor: 'yellow'</Text>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo : Flex Direction is column</Text>
                <View style={styles.viewStyleWithFlexDirectionColumn}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo : Flex Direction is row</Text>
                <View style={styles.viewStyleWithFlexDirectionRow}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <View style={appStyles.box}>
                    <Text style={appStyles.titleStyle}>Columns Demo</Text>
                    <SpacingView />

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is center</Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumn}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is flex-start'</Text>
                    <View style={styles.viewStyleWithAlignItemsFlexStartFlexDirectionColumn}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is flex-end'</Text>
                    <View style={styles.viewStyleWithAlignItemsFlexEndFlexDirectionColumn}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is baseline'</Text>
                    <View style={styles.viewStyleWithAlignItemsBaselineFlexDirectionColumn}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is stretch'</Text>
                    <View style={styles.viewStyleWithAlignItemsStretchFlexDirectionColumn}>
                        <Text style={styles.textStyleGreen}>Column Child 1</Text>
                        <Text style={styles.textStyleGreen}>Column Child 2</Text>
                        <Text style={styles.textStyleGreen}>Column Child 3</Text>
                    </View>
                </View>

                <SpacingView />
                
                <View style={appStyles.box}>
                    <Text style={appStyles.titleStyle}>Rows Demo</Text>
                    <SpacingView />

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is center</Text>
                    <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionRow}>
                        <Text style={styles.textStyleBlue}>Row Child 1</Text>
                        <Text style={styles.textStyleBlue}>Row Child 2</Text>
                        <Text style={styles.textStyleBlue}>Row Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is flex-start'</Text>
                    <View style={styles.viewStyleWithAlignItemsFlexStartFlexDirectionRow}>
                        <Text style={styles.textStyleBlue}>Row Child 1</Text>
                        <Text style={styles.textStyleBlue}>Row Child 2</Text>
                        <Text style={styles.textStyleBlue}>Row Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is flex-end'</Text>
                    <View style={styles.viewStyleWithAlignItemsFlexEndFlexDirectionRow}>
                        <Text style={styles.textStyleBlue}>Row Child 1</Text>
                        <Text style={styles.textStyleBlue}>Row Child 2</Text>
                        <Text style={styles.textStyleBlue}>Row Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is baseline'</Text>
                    <View style={styles.viewStyleWithAlignItemsBaselineFlexDirectionRow}>
                        <Text style={styles.textStyleBlue}>Row Child 1</Text>
                        <Text style={styles.textStyleBlue}>Row Child 2</Text>
                        <Text style={styles.textStyleBlue}>Row Child 3</Text>
                    </View>
                    {endLine}

                    <Text style={appStyles.subtitleStyle}>Demo : alignItems is stretch'</Text>
                    <View style={styles.viewStyleWithAlignItemsStretchFlexDirectionRow}>
                        <Text style={styles.textStyleBlue}>Row Child 1</Text>
                        <Text style={styles.textStyleBlue}>Row Child 2</Text>
                        <Text style={styles.textStyleBlue}>Row Child 3</Text>
                    </View>
                    <SpacingView />
                    {endLine}
                </View>
                <SpacingView />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    viewStyleWithFlexDirectionColumn: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "column"
    },
    viewStyleWithFlexDirectionRow: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "row"
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow'
    },
    textStyleGreen: {
        borderWidth: 1,
        borderColor: 'darkgreen',
        backgroundColor: 'green',
        color: 'black'
    },
    textStyleBlue: {
        borderWidth: 1,
        borderColor: 'darkblue',
        backgroundColor: 'lightblue',
        color: 'black'
    },
    viewStyleWithAlignItemsCenterFlexDirectionColumn: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: "column",
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsFlexStartFlexDirectionColumn: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start',
        flexDirection: "column",
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsFlexEndFlexDirectionColumn: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "column",
        alignItems: 'flex-end',
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsStretchFlexDirectionColumn: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "column",
        alignItems: "stretch",
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsBaselineFlexDirectionColumn: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "column",
        alignItems: "baseline",
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsCenterFlexDirectionRow: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "row",
        alignItems: 'center',
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsFlexStartFlexDirectionRow: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start',
        flexDirection: "row",
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsFlexEndFlexDirectionRow: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-end',
        flexDirection: "row",
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsStretchFlexDirectionRow: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: "row",
        alignItems: "stretch",
        width: 200,
        height: 200,
    },
    viewStyleWithAlignItemsBaselineFlexDirectionRow: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "baseline",
        flexDirection: "row",
        width: 200,
        height: 200,
    },
});

export default FlexDirectionScreen;