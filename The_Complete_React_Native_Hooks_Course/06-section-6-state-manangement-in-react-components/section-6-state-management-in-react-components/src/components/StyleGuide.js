import { StyleSheet, View, Dimensions, Text } from 'react-native';

export const screenWidth = Dimensions.get('window').width; // Get the screen width

export const SpacingView = () => {
    return (<View style={appStyles.spacing}></View>);
};

export const UnderlineView = () => {
    return (
        <View style={appStyles.underline}></View>
    );
};

export const ErrorView = ({ errorMessage }) => {
    return (
        <View style={[appStyles.box, { borderColor: 'red' }]}>
            <Text style={[appStyles.subtitleStyle, appStyles.errorColor]} >❌ Error : {errorMessage} </Text>
        </View>
    );
};

export const appStyles = StyleSheet.create({
    headerStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#00008B'
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#00008B'
    },
    subtitleStyle: {
        fontSize: 16,
        textAlign: 'left',
        color: 'gray'
    },
    smallestSubtitleStyle: {
        fontSize: 14,
        textAlign: 'left',
        color: 'black'
    },
    scrollContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#00008B',
        borderRadius: 10,
    },
    spacing: {
        height: 20,
        width: 20
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
    },
    underline: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        width: '100%',
    },
    leftPaddingStyle: {
        paddingLeft: 20
    },
    paddingStyle: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    errorColor: {
        color: 'red'
    }
});