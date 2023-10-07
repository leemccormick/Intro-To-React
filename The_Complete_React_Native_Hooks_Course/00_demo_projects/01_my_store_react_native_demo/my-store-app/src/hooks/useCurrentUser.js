import React, { useContext, useEffect, useState } from 'react';
import { Context as AuthContext } from '../contexts/AuthContext';

export default () => {
    const { state: authState } = useContext(AuthContext);
    const [fullName, setFullName] = useState('');
    const [rolesDescription, setRolesDescription] = useState('');


    useEffect(() => {
        if (authState.currentUserDetails != null) {
            setFullName(authState.currentUserDetails.user.firstName + ' ' + authState.currentUserDetails.user.lastName);
            setRolesDescription(authState.currentUserDetails.roles);
        } else {
            setFullName('');
            setRolesDescription('');
        }


    }, [authState]);




    /*
    const fullName = () => {
        return (authState.currentUserDetails != null) 
        ? authState.currentUserDetails.user.firstName + ' ' + authState.currentUserDetails.user.lastName
        : '';
    };


    const rolesDescription = () => {
        return (authState.currentUserDetails != null)
        ? authState.currentUserDetails.roles
        : '';
    };
*/

    return [fullName, rolesDescription];
};