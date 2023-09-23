import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { appStyles, SpacingView, UnderlineView } from '../components/StyleGuide';

const AlignItemsWithFlexScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';

    return (
        <View style={appStyles.paddingStyle}>

            <Text style={appStyles.headerStyle}>Align Items With Flex Screen</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle} | This is a demo with 3 children text inside the view.</Text>
            <UnderlineView />
            <SpacingView />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>By default : alignItems is stretch</Text>
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
                <SpacingView />
                <UnderlineView />

                <Text style={appStyles.titleStyle}>Demo : alignItems is center</Text>
                <View style={styles.viewStyleWithAlignItemsCenter}>
                    <Text style={styles.textStyle}>This is a text inside a view with these styles |  borderWidth: 1 | borderColor: 'black' |  alignItems: 'center'</Text>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                <SpacingView />
                <UnderlineView />

                <Text style={appStyles.titleStyle}>Demo : alignItems is flex-start'</Text>
                <View style={styles.viewStyleWithAlignItemsFlexStart}>
                    <Text style={styles.textStyle}>This is a text inside a view with these styles |  borderWidth: 1 | borderColor: 'black' |  alignItems: 'flex-start'</Text>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                <SpacingView />
                <UnderlineView />

                <Text style={appStyles.titleStyle}>Demo : alignItems is flex-end'</Text>
                <View style={styles.viewStyleWithAlignItemsFlexEnd}>
                    <Text style={styles.textStyle}>This is a text inside a view with these styles |  borderWidth: 1 | borderColor: 'black' |  alignItems: 'flex-end'</Text>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                <SpacingView />
                <UnderlineView />

                <Text style={appStyles.titleStyle}>Demo : alignItems is baseline'</Text>
                <View style={styles.viewStyleWithAlignItemsBaseline}>
                    <Text style={styles.textStyle}>This is a text inside a view with these styles |  borderWidth: 1 | borderColor: 'black' |  alignItems: 'baseline'</Text>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
                <SpacingView />
                <UnderlineView />

                <Text style={appStyles.titleStyle}>Demo : alignItems is stretch' | stretch is also default.</Text>
                <View style={styles.viewStyleWithAlignItemsStretch}>
                    <Text style={styles.textStyle}>This is a text inside a view with these styles |  borderWidth: 1 | borderColor: 'black' |  alignItems: 'stretch'</Text>
                    <Text style={styles.textStyle}>Child 1</Text>
                    <Text style={styles.textStyle}>Child 2</Text>
                    <Text style={styles.textStyle}>Child 3</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black'
    },
    viewStyleWithAlignItemsCenter: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    },
    viewStyleWithAlignItemsFlexStart: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-start'
    },
    viewStyleWithAlignItemsFlexEnd: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'flex-end'
    },
    viewStyleWithAlignItemsStretch: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "stretch"
    },
    viewStyleWithAlignItemsBaseline: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: "baseline"
    },
    textStyle: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'yellow'
    }
});

export default AlignItemsWithFlexScreen;
