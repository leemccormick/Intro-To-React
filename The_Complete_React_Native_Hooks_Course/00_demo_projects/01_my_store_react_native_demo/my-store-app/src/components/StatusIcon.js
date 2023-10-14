import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { EndLineView, SpacingView, appStyles } from './StyleGuide';
import { FontAwesome5, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

export const TabIconStatus = (
    {
        showInfo = true,
        infoOnPress,
        infoSelected,
        infoDisabled,
        pendingStatusOnPress,
        pendingStatusSelected,
        pendingStatusDisabled,
        processingStatusOnPress,
        processingStatusSelected,
        processingStatusDisabled,
        shippedStatusOnPress,
        shippedStatusSelected,
        shippedStatusDisabled,
        deliveredStatusOnPress,
        deliveredStatusSelected,
        deliveredStatusDisabled,
        cancelledStatusOnPress,
        cancelledStatusSelected,
        cancelledStatusDisabled,
    }
) => {
    return (<View style={styles.tabContainer}>
        {
            showInfo
                ? <InfoIconWithBackground
                    onPress={infoOnPress}
                    isSelected={infoSelected}
                    showDescription={false}
                    disabled={infoDisabled}
                />
                : null
        }
        <PendingStatusIcon
            onPress={pendingStatusOnPress}
            isSelected={pendingStatusSelected}
            showDescription={false}
            disabled={pendingStatusDisabled}
        />
        <ProcessingStatusIcon
            onPress={processingStatusOnPress}
            isSelected={processingStatusSelected}
            showDescription={false}
            disabled={processingStatusDisabled}
        />
        <ShippedStatusIcon
            onPress={shippedStatusOnPress}
            isSelected={shippedStatusSelected}
            showDescription={false}
            disabled={shippedStatusDisabled}
        />
        <DeliveredStatusIcon
            onPress={deliveredStatusOnPress}
            isSelected={deliveredStatusSelected}
            showDescription={false}
            disabled={deliveredStatusDisabled}
        />
        <CancelledStatusIcon
            onPress={cancelledStatusOnPress}
            isSelected={cancelledStatusSelected}
            showDescription={false}
            disabled={cancelledStatusDisabled}
        />
    </View>);
};

export const InfoIcon = ({ isSelected, onPress, showDescription = true, disabled = false, description = 'Info' }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = isSelected
        ? disabled ? styles.graySmallestSubtitleStyle : appStyles.primaryDarkBackgroundColor.backgroundColor
        : disabled ? styles.graySmallestSubtitleStyle : styles.darkgarySmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[appStyles.rightPaddingStyle, appStyles.leftPaddingStyle, appStyles.centerContainer, styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <AntDesign style={appStyles.centerContainer} name="infocirlce" size={22} color={tintColorStyle.color} />
            {showDescription
                ? <Text numberOfLines={1} style={[tintColorStyle, appStyles.center]}>{description}</Text>
                : null
            }
        </TouchableOpacity>
    );
};

export const InfoIconWithBackground = ({ isSelected, onPress, showDescription = true, disabled = false }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = disabled
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }, , styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <AntDesign style={appStyles.centerContainer} name="infocirlce" size={22} color={tintColorStyle.color} />
            {showDescription
                ? <Text numberOfLines={1} style={tintColorStyle}>Info</Text>
                : null
            }
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const AllStatusIcon = ({ isSelected, onPress, showDescription = true, disabled = false }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = disabled
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }, styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <Ionicons style={appStyles.centerContainer} name="list" size={24} color={tintColorStyle.color} />
            {showDescription
                ? <Text numberOfLines={1} style={tintColorStyle}>All</Text>
                : null
            }
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const PendingStatusIcon = ({ isSelected, onPress, showDescription = true, disabled = false }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = disabled
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }, styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <FontAwesome5 style={appStyles.centerContainer} name="hourglass-half" size={20} color={tintColorStyle.color} />
            {showDescription
                ?
                <Text numberOfLines={1} style={tintColorStyle}>Pending</Text>
                : null}
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const ProcessingStatusIcon = ({ isSelected, onPress, showDescription = true, disabled = false }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = disabled
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }, styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <Ionicons style={appStyles.centerContainer} name="settings-sharp" size={24} color={tintColorStyle.color} />
            {showDescription
                ?
                <Text numberOfLines={1} style={tintColorStyle}>Processing</Text> : null}
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const ShippedStatusIcon = ({ isSelected, onPress, showDescription = true, disabled = false }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = disabled
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }, styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <FontAwesome5 style={appStyles.centerContainer} name="truck" size={20} color={tintColorStyle.color} />
            {showDescription
                ?
                <Text numberOfLines={1} style={tintColorStyle}>Shipped</Text> : null}
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const DeliveredStatusIcon = ({ isSelected, onPress, showDescription = true, disabled = false }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = disabled
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }, styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <AntDesign style={appStyles.centerContainer} name="checkcircle" size={20} color={tintColorStyle.color} />
            {showDescription
                ?
                <Text numberOfLines={1} style={tintColorStyle}>Delivered</Text> : null}
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

export const CancelledStatusIcon = ({ isSelected, onPress, showDescription = true, disabled = false }) => {
    const backgroundColor = isSelected
        ? appStyles.primaryDarkBackgroundColor.backgroundColor
        : null;

    const tintColorStyle = disabled
        ? styles.graySmallestSubtitleStyle
        : styles.whilteSmallestSubtitleStyle;

    return (
        <TouchableOpacity style={[styles.centerContainer, { backgroundColor }, styles.cornerRadius]} onPress={onPress} disabled={disabled}>
            <View style={styles.smallSpacer} />
            <MaterialIcons style={appStyles.centerContainer} name="cancel" size={24} color={tintColorStyle.color} />
            {showDescription
                ?
                <Text numberOfLines={1} style={tintColorStyle}>Cancelled</Text> : null}
            <View style={isSelected ? styles.underline : styles.noUnderline} />
        </TouchableOpacity>
    );
};

//TODO: Change this discription
export const StatusInfoDetails = () => {
    return (
        <View style={appStyles.box} >
            <View style={appStyles.rowContainer}>
                <StatusIconVertical status='Pending' />
                <Text style={[appStyles.smallestSubtitleStyle, { width: '70%' }]}>
                    Order is pending and waiting for customer to confirm and pay for the order. Once the customer confirm, the order will change status to 'Processing'.
                </Text>
            </View>
            <EndLineView />

            <View style={appStyles.rowContainer}>
                <StatusIconVertical status='Processing' />
                <Text style={[appStyles.smallestSubtitleStyle, { width: '70%' }]}>
                    Order is pending and waiting for customer to confirm and pay for the order. Once the customer confirm, the order will change status to 'Processing'.
                </Text>
            </View>
            <EndLineView />

            <View style={appStyles.rowContainer}>
                <StatusIconVertical status='Shipped' />
                <Text style={[appStyles.smallestSubtitleStyle, { width: '70%' }]}>
                    Order is pending and waiting for customer to confirm and pay for the order. Once the customer confirm, the order will change status to 'Processing'.
                </Text>
            </View>
            <EndLineView />


            <View style={appStyles.rowContainer}>
                <StatusIconVertical status='Processing' />
                <Text style={[appStyles.smallestSubtitleStyle, { width: '70%' }]}>
                    Order is pending and waiting for customer to confirm and pay for the order. Once the customer confirm, the order will change status to 'Processing'.
                </Text>
            </View>
            <EndLineView />

            <View style={appStyles.rowContainer}>
                <StatusIconVertical status='Delivered' />
                <Text style={[appStyles.smallestSubtitleStyle, { width: '70%' }]}>
                    Order is pending and waiting for customer to confirm and pay for the order. Once the customer confirm, the order will change status to 'Processing'.
                </Text>
            </View>
            <EndLineView />

            <View style={appStyles.rowContainer}>
                <StatusIconVertical status='Cancelled' />
                <Text style={[appStyles.smallestSubtitleStyle, { width: '70%' }]}>
                    Order is pending and waiting for customer to confirm and pay for the order. Once the customer confirm, the order will change status to 'Processing'.
                </Text>
            </View>
        </View>
    );
};

const Icon = ({ status }) => {
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

export const StatusIconVertical = ({ status }) => {
    return (
        <View style={appStyles.centerContainer}>
            <Text style={appStyles.smallestTitleStyle}>{status}</Text>
            <Icon status={status} style={styles.spacer} />
        </View>
    );
};

export const StatusIcon = ({ status }) => {
    return (
        <View style={appStyles.rowCenterContainer}>
            <Icon style={styles.spacer} status={status} />
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
    centerContainerSecondFlex: {
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
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
    leftCornerRadius: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    rightCornerRadius: {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    }
});