export default errorHandler = (dispatch) => (error, actionDescription) => {
    let errorMessage;
    if (error.response) {
        errorMessage = error.response.data.message;
    } else if (error.request) {
        errorMessage = error.request;
    } else {
        errorMessage = error.message;
    }
    console.error('❌ Error ! ', actionDescription, error, errorMessage);
    return dispatch({ type: 'error', payload: `Something went wrong while ${actionDescription}. ${errorMessage}` });
};
