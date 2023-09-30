import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements'
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(location => {
        addLocation(location, state.recording)
    }, [state.recording]);
    const [err] = useLocation(isFocused, callback);

    console.log('-------------TrackCreateScreen-------------');
    console.log('TrackCreateScreen | addLocation is : ' + addLocation);
    console.log('TrackCreateScreen | isFocused is : ' + isFocused);

    return (
        <SafeAreaView forceInset={{ top: 'always', bottom: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enalable location services. | {err}</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);