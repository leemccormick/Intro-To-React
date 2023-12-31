import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'https://5baf-24-18-47-114.ngrok-free.app'
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Host = '5baf-24-18-47-114.ngrok-free.app';
    }
    return config;
  },
  (err) => {
    console.error('❌❌❌ Error connecting to server : ' + err);
    console.error(err);
    return Promise.reject(err);
  }
);

export default instance; // We export this intance because we can add authentication method value with this instance

/*
*** NOTE : How to use track-server with ngrok, follow this steps : 
  Step 1 : make sure the track-server is running on terminal with localhost. --> You will see 'Listening on port 3000' on terminal
  Step 2 : make sure react-native bundler is also runing on the second terminal, basiclly on tracks app is running with npm start
  Step 3 : open the third terminal to run ngrok on tracks-app directory : ngrok http 3000 --> use this command to connect to ngrok and get baseUrl 

*** NOTE : ngrok Info
  - ngrok --> Use this command to see if we have ngrok install, it will show detail description and help messageses.
  - npm install -g ngrok --> Use this command to install ngrok, if you do not see help messageses, you should use this command to install the framework
  - every 8 hours, the endpoint session will be expired, so we need to start new session and get new base url

*** NOTE : axios Info
  - Axios is a popular JavaScript library that is used for making HTTP requests from a web browser or Node.js. It provides an easy-to-use interface for sending HTTP requests and handling responses. Axios supports various features like interceptors, the ability to cancel requests, and automatic conversion of JSON data.
  - npm install axios --> Use this command to install axios
*/