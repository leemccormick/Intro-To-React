import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons';

export const screenWidth = Dimensions.get('window').width;

export const LoadingView = () => {
    return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color='#212A3E' />
    </View>);
};

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

export const EndLineView = () => {
    return (
        <View>
            <SpacingView />
            <UnderlineView />
            <SpacingView />
        </View>
    );
};

export const AppButton = ({ title, onPress, disabled }) => {
    return (
        <Button
            buttonStyle={{
                backgroundColor: '#394867',
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}
            title={title}
            onPress={onPress}
            disabled={disabled}
        />
    );
};

export const AppMediumButton = ({ title, onPress, disabled }) => {
    return (
        <Button
            buttonStyle={{
                backgroundColor: '#212A3E',
            }}
            titleStyle={{ fontWeight: 'normal', fontSize: 18, color: 'white' }}
            title={title}
            onPress={onPress}
            disabled={disabled}
        />
    );
};

export const HomeButton = ({ title, onPress }) => {
    return (
        <Button
            icon={
                <FontAwesome5 style={appStyles.rightPaddingStyle} name="store-alt" size={30} color={appStyles.secondaryDarkColor.color} />
            }
            buttonStyle={{
                backgroundColor: '#9BA4B5',
            }}
            containerStyle={{
                height: 50,
                justifyContent: 'space-around',
                textAlign: 'left',
            }}
            titleStyle={{ fontWeight: 'normal', fontSize: 20, color: '#212A3E' }}
            title={title}
            onPress={onPress}
        />
    );
};

export const appStyles = StyleSheet.create({
    headerStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#212A3E',
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#394867'
    },
    smallTitleStyle: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#394867'
    },
    subtitleStyle: {
        fontSize: 16,
        textAlign: 'left',
        color: '#394867'
    },
    mediumSubtitleStyle: {
        fontSize: 18,
        textAlign: 'left',
        color: '#394867'
    },
    smallestSubtitleStyle: {
        fontSize: 14,
        textAlign: 'left',
        color: '#212A3E',
    },
    scrollContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    screenContainer: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 20,
        backgroundColor: '#F1F6F9'
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#394867',
        borderRadius: 10,
    },
    boxWithShadow: {
        backgroundColor: '#e6f6ff',
        borderColor: '#9BA4B5',
        borderWidth: 0.2,
        borderRadius: 8,
        elevation: 5, // Add elevation for shadow on Android
        shadowColor: '#212A3E', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.3, // Shadow opacity for iOS
        shadowRadius: 2, // Shadow radius for iOS,
    },
    spacing: {
        height: 15,
        width: 15
    },
    button: {
        backgroundColor: '#394867',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
    },
    underline: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#9BA4B5',
        width: '100%',
    },
    leftPaddingStyle: {
        paddingLeft: 15
    },
    rightPaddingStyle: {
        paddingRight: 15
    },
    paddingStyle: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    rowFlexEndContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'stretch'
    },
    rowCenterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorColor: {
        color: 'red'
    },
    secondaryErrorColor: {
        color: '#820000'
    },
    successColor: {
        color: '#A2C579'
    },
    primaryLightColor: {
        color: '#F1F6F9'
    },
    secondaryLightColor: {
        color: '#E8F6EF'
    },
    primaryLightBlueColor: {
        color: '#64CCC5'
    },
    secondaryLightBlueColor: {
        color: '#9BA4B5'
    },
    primaryDarkColor: {
        color: '#212A3E'
    },
    secondaryDarkColor: {
        color: '#394867'
    },
    primaryLightBackgroundColor: {
        flex: 1,
        backgroundColor: '#F1F6F9'
    },
    secondaryBackgroundLightColor: {
        flex: 1,
        backgroundColor: '#E8F6EF'
    },
    secondaryBackgroundLightBlueColor: {
        flex: 1,
        backgroundColor: '#9BA4B5'
    },
    primaryDarkBackgroundColor: {
        flex: 1,
        backgroundColor: '#212A3E'
    },
    secondaryBackgroundDarkColor: {
        flex: 1,
        backgroundColor: '#394867'
    },
});