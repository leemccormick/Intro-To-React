import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    console.log('-------------NavLink-------------');
    console.log('NavLink | navigation is : ' + navigation);
    console.log(navigation);
    console.log('NavLink | text is : ' + text);
    console.log('NavLink | routeName is : ' + routeName);

    return (<>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)} >
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    </>);
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        fontSize: 16,
    }
});

export default withNavigation(NavLink);