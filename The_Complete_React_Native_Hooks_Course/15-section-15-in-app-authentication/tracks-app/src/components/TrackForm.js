import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    console.log('------------TrackForm-------------');
    console.log('locations.length is : ', locations.length);
    console.log('saveTrack is : ', saveTrack);
    console.log('name is : ', name);

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
                    : <Button title="Start Recording" onPress={startRecording} />
                }
            </Spacer>

            <Spacer>
                {!recording && locations.length
                    ? <Button title="Save Recording" onPress={saveTrack} />
                    : null
                }
            </Spacer>
        </>
    );
};

export default TrackForm;