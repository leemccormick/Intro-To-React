import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

export const baseUrl = Platform.OS === 'android'
    ? 'http://10.0.2.2:8081/api/mystoredemo'
    : 'http://localhost:8081/api/mystoredemo';

const instance = axios.create({
    baseURL: `${baseUrl}`
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Basic ${token}`;
        }
        return config;
    },
    (err) => {
        console.error('❌❌❌ Error connecting to server : ' + err);
        console.error(err);
        return Promise.reject(err);
    }
);

export default instance; 
