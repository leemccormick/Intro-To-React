import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    initialLocation = {
        longitude: -122.0312186,
        latitude: 37.33233141,
    };

    console.log('-------------Map-------------');
    console.log('Map | currentLocation is : ', currentLocation);
    console.log('Map | locations is : ', locations);

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...initialLocation,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        // We can show region, but it is jumbing so much when we uncomment this..
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.01,
        //     longitudeDelta: 0.01
        // }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                strokeColor='rgba(158, 158, 255, 1.0)'
                fillColor='rgba(158, 158, 255, 0.3)'
            />

            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;

/* NOTE : Fix for Indicator not Tracking Map
***In the upcoming lecture, we will add an indicator that tracks the "fake" user's location along the map. After we remove the region configuration from MapView, you may hit a bug where the map loads your device's real physical location and does not follow the indicator to the "fake" location.
***To resolve this, we can create an initialLocation object containing the longitude and latitude from the mockLocation file and pass this to MapView's initialRegion prop.

- In src/Map.js, make the following changes:

  initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141,
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >

***Important Note:

- If you decide not to use the "fake" location and instead use your physical device's location, you will need to undo this change and reset the initialRegion prop back to the currentLocation state:

 return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >

- This also assumes that the mockLocation import has been commented out in src/screens/TrackCreateScreen:

//import '../_mockLocation';
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
...
*/

/* NOTE:  This code before useContext
const Map = () => {
    let points = [];

    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 37.33233 + i * 0.001,
                longitude: -122.03121 + i * 0.001
            });
        } else {
            points.push({
                latitude: 37.33233 + i * 0.002,
                longitude: -122.03121 + i * 0.002
            });
        }
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={
                {
                    latitude: 37.33233,
                    longitude: -122.03121,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }
            }
        >
            <Polyline coordinates={points} />
            </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;
*/