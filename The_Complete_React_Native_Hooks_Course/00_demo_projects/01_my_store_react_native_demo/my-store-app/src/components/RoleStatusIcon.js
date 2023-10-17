import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements'
import { appStyles, SpacingView } from './StyleGuide';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const RoleStatusIcon = ({ role, isSelected }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = isSelected
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <View style={[appStyles.rowCenterContainer, { backgroundColor }, styles.cornerRadius]} >
            <SpacingView />
            <View style={[styles.centerContaine, { backgroundColor }, styles.smallSpacer, styles.cornerRadius]} />
            {
                isSelected
                    ? <AntDesign style={[appStyles.centerContainer, styles.spacer]} name="checkcircle" size={20} color={appStyles.successColor.color} />
                    : <MaterialIcons style={[appStyles.centerContainer, styles.spacer]} name="cancel" size={24} color={tintColorStyle.color} />
            }
            <Text numberOfLines={1} style={tintColorStyle}>{role}</Text>
            <SpacingView />
        </View>
    );
};

export const RoleStatusTabIcon = ({ role, isSelected, onPress }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = isSelected
        ? styles.graySmallestTitleStyle
        : styles.whilteSmallestTitleStyle;

    return (<>
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor }, styles.cornerRadius]} >
                <View style={[styles.centerContaine, { backgroundColor }, styles.smallSpacer, styles.cornerRadius]} />
                {
                    isSelected
                        ? <AntDesign style={[appStyles.centerContainer, styles.spacer, styles.buttonsContainer]} name="checkcircle" size={20} color={appStyles.successColor.color} />
                        : <SpacingView />
                }
                <Text numberOfLines={1} style={tintColorStyle}>{role}</Text>
                <SpacingView />
            </View>
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    },
    detailContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    buttonsContainer: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    spacer: {
        margin: 7
    },
    tabContainer: {
        borderColor: '#9BA4B5',
        borderWidth: 0.2,
        borderRadius: 8,
        backgroundColor: appStyles.secondaryBackgroundLightBlueColor.backgroundColor,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    cornerRadius: {
        borderRadius: 8
    },
    whilteSmallestSubtitleStyle: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
    },
    darkgarySmallestSubtitleStyle: {
        fontSize: 12,
        textAlign: 'center',
        color: appStyles.secondaryBackgroundLightBlueColor.backgroundColor,
    },
    graySmallestSubtitleStyle: {
        fontSize: 12,
        textAlign: 'center',
        color: 'lightgray',
    },
    whilteSmallestTitleStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    darkgarySmallestTitleStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: appStyles.secondaryBackgroundLightBlueColor.backgroundColor,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    graySmallestTitleStyle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'lightgray',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    underline: {
        borderBottomWidth: 4,
        borderBottomColor: appStyles.successColor.color,
        width: '100%',
        height: 4,
        backgroundColor: appStyles.successColor.color,
    },
    noUnderline: {
        width: '100%',
        height: 3,
    },
});

export default RoleStatusIcon;