import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    console.log('------------TrackForm-------------');
    console.log('locations.length is : ' + locations.length);

    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    onChangeText={changeName}
                    placeholder="Enter Location Name"
                />
            </Spacer>

            <Spacer>
                {recording
                    ? <Button title="Stop" onPress={stopRecording} />
                    : <Button title="Start Recording" onPress={startRecording}
                    />
                }
            </Spacer>
        </>
    );
};

export default TrackForm;