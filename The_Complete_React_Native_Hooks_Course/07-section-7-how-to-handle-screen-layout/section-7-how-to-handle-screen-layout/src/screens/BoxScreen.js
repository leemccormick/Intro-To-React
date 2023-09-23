import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { appStyles, SpacingView, UnderlineView } from '../components/StyleGuide';

const BoxScreen = () => {
    let section7subtitle = 'Learn how to handle screen layout';

    return (
        <View style={appStyles.paddingStyle}>
            <Text style={appStyles.headerStyle}>Box Screen</Text>
            <Text style={appStyles.subtitleStyle}>{section7subtitle}</Text>
            <UnderlineView />
            <SpacingView />

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={appStyles.titleStyle}>Demo : Text With No Style </Text>
                <View style={styles.viewStyle}>
                    <Text>This is a text with No Style inside a View with this viewStyle |   borderWidth: 1 | borderColor: 'black'</Text>
                </View>
                <UnderlineView />
                <SpacingView />

                <Text style={appStyles.titleStyle}>Demo : Text With borderWidth Only</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>This is a text with style |  borderWidth: 1 | borderColor: 'red'</Text>
                </View>
                <UnderlineView />
                <SpacingView />

                <Text style={appStyles.titleStyle}>Demo : Text With Margin </Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithMargin}>This is a text with style |  borderWidth: 1 | borderColor: 'red' | marginVertical: 20 | marginHorizontal: 20 </Text>
                </View>

                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithMargin}>This is a text with style |  borderWidth: 1 | borderColor: 'red' |  margin: 20 </Text>
                </View>
                <UnderlineView />
                <SpacingView />

                <Text style={appStyles.titleStyle}>Demo : Text With Padding </Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithOnlyOneMarginAndPadding}>This is a text with style |  borderWidth: 1 | borderColor: 'red' |  margin: 20 | padding: 20</Text>
                </View>
                <UnderlineView />
                <SpacingView />

                <Text style={appStyles.titleStyle}>Demo : Text With Padding, Margin and BorderWidth</Text>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyleWithOnlyOneMarginAndPaddingAndBorderWidth20}>This is a text with style |  borderWidth: 20 | borderColor: 'red' |  margin: 20 | padding: 20</Text>
                </View>
                <UnderlineView />
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
    textStyle: {
        borderWidth: 1,
        borderColor: 'red'
    },
    textStyleWithMargin: {
        borderWidth: 1,
        borderColor: 'red',
        marginVertical: 20,
        marginHorizontal: 20
    },
    textStyleWithOnlyOneMargin: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    },
    textStyleWithOnlyOneMarginAndPadding: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20,
        padding: 20
    },
    textStyleWithOnlyOneMarginAndPaddingAndBorderWidth20: {
        borderWidth: 20,
        borderColor: 'red',
        margin: 20,
        padding: 20
    }
});

export default BoxScreen;
