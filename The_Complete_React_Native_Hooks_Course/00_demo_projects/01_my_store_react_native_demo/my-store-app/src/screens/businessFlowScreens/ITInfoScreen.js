import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { appStyles, SpacingView, EndLineView, ErrorView } from '../../components/StyleGuide';
import { Context as StoreContext } from '../../contexts/StoreContext';
import useCurrentUser from '../../hooks/useCurrentUser';
import UserView from '../../components/UserView';
import { RoleStatusTabIcon } from '../../components/RoleStatusIcon';

const ITInfoScreen = ({ navigation }) => {
    const { state: storeState, fetchUsers, filterRoleChanged } = useContext(StoreContext);
    const [fullName, rolesDescription, hasCustomerRole, hasSaleRole, hasAdminRole] = useCurrentUser();
    const users = storeState.usersFiltersByRole;

    console.log('-------------ITInfoScreen-------------');
    console.log('storeState | ', storeState);
    console.log('users | ', users);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchUsers();
        });
        return unsubscribe;
    }, [navigation, storeState]);

    const ErrorSection = () => {
        return (<>
            {storeState.errorMessage ? <ErrorView errorMessage={storeState.errorMessage} /> : null}
        </>);
    };

    const TabFilterSection = () => {
        return (<View style={styles.tabContainer}>
            <RoleStatusTabIcon role='All' isSelected={storeState.selectedFilterUserRole === 'All'} onPress={() => filterRoleChanged('All')} />
            <RoleStatusTabIcon role='Customer' isSelected={storeState.selectedFilterUserRole === 'Customer'} onPress={() => filterRoleChanged('Customer')} />
            <RoleStatusTabIcon role='Sale' isSelected={storeState.selectedFilterUserRole === 'Sale'} onPress={() => filterRoleChanged('Sale')} />
            <RoleStatusTabIcon role='Admin' isSelected={storeState.selectedFilterUserRole === 'Admin'} onPress={() => filterRoleChanged('Admin')} />
        </View>);
    };

    const UsersFlatList = () => {
        return (<>
            <FlatList
                data={users}
                keyExtractor={(user) => user.user.id}
                renderItem={({ item }) => {
                    return (
                        <UserView user={item} />
                    );
                }}
            />
        </>)
    };

    const UsersListInfo = () => {
        const title = () => {
            switch (storeState.selectedFilterUserRole.toLowerCase()) {
                case 'all':
                    return `Users's List Info`
                case 'customer':
                    return `Customer's List Info`
                case 'sale':
                    return `Sale's List Info`
                case 'admin':
                    return `Admin's List Info`
                default:
                    return `User's List Info`
            }
        };

        return (<>
            <Text style={appStyles.titleStyleAlignCenter}>{storeState.usersFiltersByRole.length} {title()}  </Text>
            <EndLineView />
            <ErrorSection />
            <UsersFlatList />
        </>);
    };

    if (hasAdminRole) {
        return (
            <>
                <TabFilterSection />
                <View style={appStyles.screenContainer}>
                    {(users !== null)
                        ? <UsersListInfo />
                        : null
                    }
                </View>
            </>
        );
    } else {
        return (
            <View style={appStyles.screenContainer}>
                <ErrorView errorMessage={`User has not authorized to access to user's list info.`} />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    },
    tabContainer: {
        backgroundColor: appStyles.secondaryBackgroundLightBlueColor.backgroundColor,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});

export default ITInfoScreen;