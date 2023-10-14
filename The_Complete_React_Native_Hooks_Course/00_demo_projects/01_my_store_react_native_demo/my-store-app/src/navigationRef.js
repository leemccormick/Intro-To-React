import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const setNavigator = nav => {
    navigationRef.current = nav;
};

export const navigate = (routeName, params) => {
    if (navigationRef.current) {
        navigationRef.current.navigate(routeName, params);
    }
};

export const navigateToReviewScreen = ({ order }) => {
    if (navigationRef.current) {
        navigationRef.current.navigate('ReviewOrder', { order: { order }, businnessFlow: true });
    }
};