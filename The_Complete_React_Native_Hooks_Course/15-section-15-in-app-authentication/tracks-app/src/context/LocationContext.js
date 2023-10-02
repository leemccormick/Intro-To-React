import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_current_location":
            return { ...state, currentLocation: action.payload };
        case "add_location":
            return { ...state, locations: [...state.locations, action.payload] };
        case "change_name":
            return { ...state, name: action.payload };
        case "start_recoding":
            return { ...state, recording: true };
        case "stop_recoding":
            return { ...state, recording: false };
        case "reset":
            return { ...state, name: '', locations: [] };
        default:
            return state;
    }
};

const changeName = dispatch => (newName) => {
    console.log('------------LocationContext : changeName-------------');
    dispatch({ type: "change_name", payload: newName });
};

const startRecording = dispatch => () => {
    console.log('------------LocationContext : startRecording-------------');
    dispatch({ type: "start_recoding" });
};

const stopRecording = dispatch => () => {
    console.log('------------LocationContext : stopRecording-------------');
    dispatch({ type: "stop_recoding" });
};

const addLocation = dispatch => (location, recording) => {
    console.log('------------LocationContext : addLocation-------------');
    dispatch({ type: "add_current_location", payload: location });
    if (recording) {
        dispatch({ type: "add_location", payload: location });
    }
};

const reset = dispatch => (location, recording) => {
    console.log('------------LocationContext : reset-------------');
    dispatch({ type: "reset" });
};

export const { Provider, Context } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName, reset },
    { name: '', recording: false, locations: [], currentLocation: null }
);