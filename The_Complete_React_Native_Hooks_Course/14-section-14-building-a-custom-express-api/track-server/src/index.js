/* NOTE : How to set up the TRACK-SERVER project...
1) mkdir track-server --> use this command to make new directory with this name 'track-server'
2) cd track-server --> use this command to go to this directory
3) npm init OR npm init -y --> use this command to init the project.
4) npm install bcrypt express jsonwebtoken mongoose nodemon --> use this command to add library
5) open the project in Visual Code
6) create src folder and new file named 'index.js' with following lines of code
7) open the terminal and run this command --> node src/index.js --> this will show 'Listening on port 3000'
8) sign up for Cloud mongoDB --> https://account.mongodb.com/account/login
7) create clusters to start with free account
8) set up clusters with connection and find string s
8.1) Set up connection security : It will link with your wifi IP address, if you change wifi, then we need to revisit this to set up new connection
8.2) Set up user : See more detail of user in keys.js
8.3) Choose a connection method --> Find a connection string to set this up, then copy it to paste in this const mongoUri ='' | Make sure replace password you set up on the <password> | See more detail in keys.js
9) add mongoose code on this index.js file
10) control + c --> to stop the server
11) node src/index.js --> to connect to mongo DB
12) on package.json, we can add a script to auto run the server. | nodemon is a utility that monitors for changes in files in a Node.js application and automatically restarts the server when changes are detected.
    "scripts": {
        "dev": "nodemon src/index.js"
    }
13) stop the terminal again and run this command -->  npm run dev | Now, every time the project changes, then it's is auto run index.js
14) add routes folder in src and add authRoutes.js file to handel signup process
15) use Postman application to help with post method and test out the authRoutes.js     
    - Using Post Request on Postman with this endpoint --> http://localhost:3000/signup 
    - You will get response back as --> You made a post request --> It is from authRoutes.js 
*/

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const mongoUri = require('./routes/keys')

const app = express();
app.use(authRoutes);

mongoose.connect(mongoUri, {
    // useCreateIndex: true --- >The error message you provided, MongoParseError: option usecreateindex is not supported, suggests that the useCreateIndex option was used in your MongoDB connection configuration, but it is not supported.
    useNewUrlParser: true,    // Use new URL parser
    useUnifiedTopology: true, // Use new server discovery and monitoring engine

});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', (req, res) => {
    res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});