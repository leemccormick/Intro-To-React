// import '../_mockLocation'; // TODO: Uncomment this to mock locations
import React, { useContext, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { Octicons } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
    const {
        state: { recording },
        addLocation
    } = useContext(LocationContext);
    const callback = useCallback(
        location => {
            addLocation(location, recording);
        },
        [recording]
    );
    const [err] = useLocation(isFocused || recording, callback);

    console.log('-------------TrackCreateScreen-------------');
    console.log('TrackCreateScreen | addLocation is : ', addLocation);
    console.log('TrackCreateScreen | isFocused is : ', isFocused);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <Octicons name="plus-circle" size={20} color="white" />
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);