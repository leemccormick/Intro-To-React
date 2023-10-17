import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { appStyles, SpacingView } from './StyleGuide';
import RoleStatusIcon from './RoleStatusIcon';

const UserView = ({ user }) => {
    const userInfo = user.user;

    console.log('-------------UserView-------------');
    console.log('user | ', user);
    console.log('userInfo | ', userInfo);

    const UserInfo = ({ title, details }) => {
        return (<>
            <Text style={[appStyles.subtitleStyle, styles.spacer]}>{title} :
                <Text style={[appStyles.smallTitleStyle]}> {details}</Text>
            </Text>
        </>);
    };

    return (<View>
        <SpacingView />
        <View style={[appStyles.boxWithShadow, appStyles.paddingStyle]}>
            <View style={styles.tabContainer}>
                <RoleStatusIcon role='Customer' isSelected={user.hasCustomerRole} />
                <RoleStatusIcon role='Sale' isSelected={user.hasSaleRole} />
                <RoleStatusIcon role='Admin' isSelected={user.hasAdminRole} />
            </View>

            <UserInfo title={'Username'} details={userInfo.username} />
            <UserInfo title={'First Name'} details={userInfo.firstName} />
            <UserInfo title={'Last Name'} details={userInfo.lastName} />
            <UserInfo title={'Roles'} details={userInfo.rolesDescription} />
            <UserInfo title={'Email'} details={userInfo.email} />
            <UserInfo title={'Phone Number'} details={userInfo.phoneNumber} />
            <UserInfo title={'Address'} details={userInfo.address} />
        </View>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,
        marginHorizontal: 10,
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
});

export default UserView;
