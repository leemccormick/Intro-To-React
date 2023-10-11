import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { appStyles } from './StyleGuide';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const AllStatusIcon = ({ isSelected, onPress }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }]} onPress={onPress}>
            <View style={styles.smallSpacer} />
            <Ionicons style={appStyles.centerContainer} name="list" size={24} color='white' />
            <Text numberOfLines={1} style={styles.whilteSmallestSubtitleStyle}>All</Text>
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const PendingStatusIcon = ({ isSelected, onPress }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }]} onPress={onPress}>
            <View style={styles.smallSpacer} />
            <FontAwesome5 style={appStyles.centerContainer} name="hourglass-half" size={20} color='white' />
            <Text numberOfLines={1} style={styles.whilteSmallestSubtitleStyle}>Pending</Text>
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const ProcessingStatusIcon = ({ isSelected, onPress }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }]} onPress={onPress}>
            <View style={styles.smallSpacer} />
            <Ionicons style={appStyles.centerContainer} name="settings-sharp" size={24} color="white" />
            <Text numberOfLines={1} style={styles.whilteSmallestSubtitleStyle}>Processing</Text>
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const ShippedStatusIcon = ({ isSelected, onPress }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }]} onPress={onPress}>
            <View style={styles.smallSpacer} />
            <FontAwesome5 style={appStyles.centerContainer} name="truck" size={20} color="white" />
            <Text numberOfLines={1} style={styles.whilteSmallestSubtitleStyle}>Shipped</Text>
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const DeliveredStatusIcon = ({ isSelected, onPress }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }]} onPress={onPress}>
            <View style={styles.smallSpacer} />
            <AntDesign style={appStyles.centerContainer} name="checkcircle" size={20} color="white" />
            <Text numberOfLines={1} style={styles.whilteSmallestSubtitleStyle}>Delivered</Text>
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const CancelledStatusIcon = ({ isSelected, onPress }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }]} onPress={onPress}>
            <View style={styles.smallSpacer} />
            <MaterialIcons style={appStyles.centerContainer} name="cancel" size={24} color="white" />
            <Text numberOfLines={1} style={styles.whilteSmallestSubtitleStyle}>Cancelled</Text>
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const StatusIcon = ({ status }) => {
    const Icon = () => {
        switch (status) {
            case 'Pending':
                return <FontAwesome5 style={styles.spacer} name="hourglass-half" size={24} color={appStyles.primaryLightBlueColor.color} />;
            case 'Processing':
                return <Ionicons style={styles.spacer} name="settings-sharp" size={24} color={appStyles.secondaryLightBlueColor.color} />;
            case 'Shipped':
                return <FontAwesome5 style={styles.spacer} name="truck" size={24} color={appStyles.secondaryLightBlueColor.color} />;
            case 'Delivered':
                return <AntDesign style={styles.spacer} name="checkcircle" size={24} color={appStyles.successColor.color} />;
            case 'Cancelled':
                return <MaterialIcons style={styles.spacer} name="cancel" size={24} color={appStyles.secondaryErrorColor.color} />;
            default:
                return <AntDesign style={styles.spacer} name="questioncircleo" size={24} color={appStyles.secondaryErrorColor.color} />;
        }
    };

    return (
        <View style={appStyles.rowCenterContainer}>
            <Icon style={styles.spacer} />
            <Text style={appStyles.smallTitleStyle}>{status}</Text>
            <View style={{ flex: 1 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    smallSpacer: {
        margin: 2
    },
    spacer: {
        marginRight: 10,
        marginVertical: 5
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    center: {
        alightSelf: 'center'
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
    whilteSmallestSubtitleStyle: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
    }
});