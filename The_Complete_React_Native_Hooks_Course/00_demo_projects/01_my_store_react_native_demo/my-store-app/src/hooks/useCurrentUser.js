import { useContext, useEffect, useState } from 'react';
import { Context as AuthContext } from '../contexts/AuthContext';

export default () => {
    const { state: authState } = useContext(AuthContext);
    const [fullName, setFullName] = useState('');
    const [rolesDescription, setRolesDescription] = useState('');
    const [hasCustomerRole, setHasCustomerRole] = useState(false);
    const [hasSaleRole, setHasSaleRole] = useState(false);
    const [hasAdminRole, setHasAdminRole] = useState(false);

    useEffect(() => {
        if (authState.currentUserDetails != null) {
            setFullName(authState.currentUserDetails.user.firstName + ' ' + authState.currentUserDetails.user.lastName);
            setRolesDescription(authState.currentUserDetails.roles);
            setHasCustomerRole(authState.currentUserDetails.hasCustomerRole);
            setHasSaleRole(authState.currentUserDetails.hasSaleRole);
            setHasAdminRole(authState.currentUserDetails.hasAdminRole);
        } else {
            setFullName('');
            setRolesDescription('');
            setHasCustomerRole(false);
            setHasSaleRole(false);
            setHasAdminRole(false);
        }
    }, [authState]);

    return [fullName, rolesDescription, hasCustomerRole, hasSaleRole, hasAdminRole];
};