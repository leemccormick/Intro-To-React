import axios from "axios";


export default axios.create({
    baseURL: 'https://f306-24-18-47-114.ngrok-free.app/'
});

/* NOTE : STEPS for Data API Sync for blog app
STEP 1 : Setup Ngrok --> See more detail on NOTE :Important - Required Ngrok Setup Steps

STEP 2 : Create new directory for jsonServer 
2.1) npm install json-server ngrok --> use this command used in Node.js to install two separate packages: json-server and ngrok.
- json-server is a Node module that allows you to easily set up a fake REST API for development and testing purposes. It allows you to define a JSON file with data and serves it over HTTP as if it were a real API.
- ngrok is a cross-platform command-line tool that creates a secure tunnel to localhost, allowing you to expose a local server to the internet. It's often used for testing webhooks and APIs locally.
2.1) create db.json file
2.2) In side pagkage.json, we need to add the script.
  "scripts": {
    "db": "json-server -w db.json -p 3001",
    "tunnel": "ngrok http 3001"
  },

STEP 3 : Open 2 terminal for jsonServer directory and run this 2 commands 
3.1) npm run db -> on the first terminal to start database
3.1) npm run tunnel -> on the second terminal to get endpoint for the server

STEP 4 : Implement jsonServer in the blog application
4.1) npm install axios --> use this command to install axios library
- Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js environment. It provides a simple and consistent way to interact with APIs and send/receive data over the internet.
4.2) create jsonServer.js file to connect with endpoint that we get from ngrok
4.3) updated BoxContext.js file with new functions to fetch, post, put and delete using api
4.4) updated IndexScreen.js file to show data from api, see example on useEffect()
*/

/* NOTE : Ngrok Info
*** Ngrok is a cross-platform application that allows developers to expose their local web servers to the internet.
*** Using ngrok baseURL, might change every 8 hours, cancel the server with control c and restart with npm tunnel
https://fefe-24-18-47-114.ngrok-free.app
*/

/* NOTE : Important - Required Ngrok Setup Steps

1) Sign up for a free account here:

https://dashboard.ngrok.com/signup

2) Then, download the official Ngrok library for your specific OS rather than the Node port shown in the lectures:

https://ngrok.com/download


3) After registering for an account and installing the full library, you will need to copy your authtoken from your Ngrok account dashboard.


4) Then, using your terminal, run the following command:

ngrok authtoken YOUR_AUTHTOKEN

5) This command only needs to be done once. Going forward, you can open a tunnel by using your terminal to run the following command (replacing PORT_NUMBER with the port of the backend server):

ngrok http PORT_NUMBER

***You must run the Ngrok server directly using the above command. Do not attempt to run Ngrok from the package.json file with "npm run tunnel" as it will not use the authenticated version.

***Note - If you are reading this note after attempting to use Ngrok as shown in the course, you will need to follow all of the steps above. Then, afterward, you will need to restart any running tunnels and applications and generate a new tunnel address.
 */