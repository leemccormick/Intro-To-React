import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { appStyles, SpacingView, UnderlineView } from '../../components/StyleGuide';

const JustifyContentScreen = ({ navigation }) => {
    console.log('navigation on Justify Content Screen is : ' + navigation)
    let section7subtitle = 'Learn how to handle screen layout';
    const endLine = (
        <View>
            <SpacingView />
            <UnderlineView />
            <SpacingView />
        </View>
    );

    // COLUNM CONTENTS NAVIGATION
    // center
    const navigateToColunmCenterDemo = () => {
        console.log('Navigate to Colunm Center screen...');
        navigation.navigate('JustifyContentDemoWithColumnCenter');
    };

    //flex-start
    const navigateToColunmFlexStartDemo = () => {
        console.log('Navigate to Colunm Flex Start screen...');
        navigation.navigate('JustifyContentDemoWithColumnFlexStart');
    };

    //flex-end
    const navigateToColunmFlexEndDemo = () => {
        console.log('Navigate to Colunm Flex End screen...');
        navigation.navigate('JustifyContentDemoWithColumnFlexEnd');
    };

    // baseline
    const navigateToColunmBaselineDemo = () => {
        console.log('Navigate to Colunm baseline screen...');
        navigation.navigate('JustifyContentDemoWithColumnBaseline');
    };

    // stretch
    const navigateToColunmStretchDemo = () => {
        console.log('Navigate to Colunm Stretch screen...');
        navigation.navigate('JustifyContentDemoWithColumnStretch');
    };

    // ROW CONTENTS NAVIGATION
    // center
    const navigateToRowCenterDemo = () => {
        console.log('Navigate to Row Center screen...');
        navigation.navigate('JustifyContentDemoWithRowCenter');
    };

    //flex-start
    const navigateToRowFlexStartDemo = () => {
        console.log('Navigate to Row Flex Start screen...');
        navigation.navigate('JustifyContentDemoWithRowFlexStart');
    };

    //flex-end
    const navigateToRowFlexEndDemo = () => {
        console.log('Navigate to Row Flex End screen...');
        navigation.navigate('JustifyContentDemoWithRowFlexEnd');
    };

    // baseline
    const navigateToRowBaselineDemo = () => {
        console.log('Navigate to Row baseline screen...');
        navigation.navigate('JustifyContentDemoWithRowBaseline');
    };

    // stretch
    const navigateToRowStretchDemo = () => {
        console.log('Navigate to Row Stretch screen...');
        navigation.navigate('JustifyContentDemoWithRowStretch');
    };

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.headerStyle}>Justify Content Screen</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle} </Text>
            <Text style={appStyles.subtitleStyle}>Justify Content lays out children along the primary axis. Primary axis is whatever flexDirection is set to</Text>
            <Text style={appStyles.subtitleStyle}>There are  posible 6 ways for justify content properties including flex-start, center, flex-end, space-between, space-around and space-evenly. </Text>
            <Text style={appStyles.subtitleStyle}>This is a demo with 3 children text inside the view.</Text>
            {endLine}

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>By default : Justify Content is flex-start</Text>
                <Text style={styles.textStyle}>This is a text with style |  borderWidth: 1 | borderColor: 'red' | backgroundColor: 'yellow'</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo 1 : Justify Content is flex-start</Text>
                <View style={styles.viewStyleJustifyContentFlexStart}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo 2 : Justify Content is center</Text>
                <View style={styles.viewStyleJustifyContentCenter}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo 3 : Justify Content is flex-end</Text>
                <View style={styles.viewStyleJustifyContentFlexEnd}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo 4 : Justify Content is space-around</Text>
                <View style={styles.viewStyleJustifyContentSpaceAround}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo 5 : Justify Content is space-between</Text>
                <View style={styles.viewStyleJustifyContentSpaceBetween}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <Text style={appStyles.titleStyle}>Demo 6 : Justify Content is space-evently</Text>
                <View style={styles.viewStyleJustifyContentSpaceEvently}>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                {endLine}

                <View style={appStyles.box}>
                    <Text style={appStyles.titleStyle}>Columns Demo</Text>
                    <SpacingView />

                    <TouchableOpacity onPress={navigateToColunmCenterDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is center</Text>
                        <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionColumn}>
                            <Text style={styles.textStyleGreen}>Column Child 1</Text>
                            <Text style={styles.textStyleGreen}>Column Child 2</Text>
                            <Text style={styles.textStyleGreen}>Column Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToColunmFlexStartDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is flex-start'</Text>
                        <View style={styles.viewStyleWithAlignItemsFlexStartFlexDirectionColumn}>
                            <Text style={styles.textStyleGreen}>Column Child 1</Text>
                            <Text style={styles.textStyleGreen}>Column Child 2</Text>
                            <Text style={styles.textStyleGreen}>Column Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToColunmFlexEndDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is flex-end'</Text>
                        <View style={styles.viewStyleWithAlignItemsFlexEndFlexDirectionColumn}>
                            <Text style={styles.textStyleGreen}>Column Child 1</Text>
                            <Text style={styles.textStyleGreen}>Column Child 2</Text>
                            <Text style={styles.textStyleGreen}>Column Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToColunmBaselineDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is baseline'</Text>
                        <View style={styles.viewStyleWithAlignItemsBaselineFlexDirectionColumn}>
                            <Text style={styles.textStyleGreen}>Column Child 1</Text>
                            <Text style={styles.textStyleGreen}>Column Child 2</Text>
                            <Text style={styles.textStyleGreen}>Column Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToColunmStretchDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is stretch'</Text>
                        <View style={styles.viewStyleWithAlignItemsStretchFlexDirectionColumn}>
                            <Text style={styles.textStyleGreen}>Column Child 1</Text>
                            <Text style={styles.textStyleGreen}>Column Child 2</Text>
                            <Text style={styles.textStyleGreen}>Column Child 3</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <SpacingView />

                <View style={appStyles.box}>
                    <Text style={appStyles.titleStyle}>Rows Demo</Text>
                    <SpacingView />

                    <TouchableOpacity onPress={navigateToRowCenterDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is center</Text>
                        <View style={styles.viewStyleWithAlignItemsCenterFlexDirectionRow}>
                            <Text style={styles.textStyleBlue}>Row Child 1</Text>
                            <Text style={styles.textStyleBlue}>Row Child 2</Text>
                            <Text style={styles.textStyleBlue}>Row Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRowFlexStartDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is flex-start'</Text>
                        <View style={styles.viewStyleWithAlignItemsFlexStartFlexDirectionRow}>
                            <Text style={styles.textStyleBlue}>Row Child 1</Text>
                            <Text style={styles.textStyleBlue}>Row Child 2</Text>
                            <Text style={styles.textStyleBlue}>Row Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRowFlexEndDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is flex-end'</Text>
                        <View style={styles.viewStyleWithAlignItemsFlexEndFlexDirectionRow}>
                            <Text style={styles.textStyleBlue}>Row Child 1</Text>
                            <Text style={styles.textStyleBlue}>Row Child 2</Text>
                            <Text style={styles.textStyleBlue}>Row Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRowBaselineDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is baseline'</Text>
                        <View style={styles.viewStyleWithAlignItemsBaselineFlexDirectionRow}>
                            <Text style={styles.textStyleBlue}>Row Child 1</Text>
                            <Text style={styles.textStyleBlue}>Row Child 2</Text>
                            <Text style={styles.textStyleBlue}>Row Child 3</Text>
                        </View>
                        {endLine}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigateToRowStretchDemo} >
                        <Text style={appStyles.titleStyle}>Demo : alignItems is stretch'</Text>
                        <View style={styles.viewStyleWithAlignItemsStretchFlexDirectionRow}>
                            <Text style={styles.textStyleBlue}>Row Child 1</Text>
                            <Text style={styles.textStyleBlue}>Row Child 2</Text>
                            <Text style={styles.textStyleBlue}>Row Child 3</Text>
                        </View>
                        <SpacingView />
                        {endLine}
                    </TouchableOpacity>
                    <SpacingView />
                </View>
                <SpacingView />
                <SpacingView />
            </ScrollView>
            <SpacingView />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    viewStyleJustifyContentFlexStart: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 200,
        justifyContent: "flex-start"
    },
    viewStyleJustifyContentCenter: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 200,
        justifyContent: "center"
    },
    viewStyleJustifyContentFlexEnd: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 200,
        justifyContent: "flex-end"
    },
    viewStyleJustifyContentSpaceBetween: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 200,
        justifyContent: "space-between"
    },
    viewStyleJustifyContentSpaceAround: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 200,
        justifyContent: "space-around"
    },
    viewStyleJustifyContentSpaceEvently: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        height: 200,
        justifyContent: "space-evenly"
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

export default JustifyContentScreen;