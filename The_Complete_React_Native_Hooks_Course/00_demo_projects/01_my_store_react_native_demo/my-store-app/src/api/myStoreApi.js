import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/mystoredemo'
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
