import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    console.log('-------------TrackContext : fetchTracks-------------');
    try {
        const response = await trackerApi.get('/tracks');
        console.log('✅Sucessfully fetching tracks : ', response.data);
        dispatch({ type: 'fetch_tracks', payload: response.data });
    } catch (err) {
        console.log('❌Error with response data : ', err.response.data);
    }
};

const createTrack = dispatch => async (name, locations) => {
    console.log('-------------TrackContext : createTrack-------------');
    try {
        await trackerApi.post('/tracks', { name, locations });
        console.log('✅Sucessfully with creating a track...');
    } catch (err) {
        console.log('❌Error with response data : ', err.response.data);
    }
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);