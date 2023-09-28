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
8.1) set up connection security : It will link with your wifi IP address, if you change wifi, then we need to revisit this to set up new connection
8.2) set up user : See more detail of user in keys.js
8.3) choose a connection method --> Find a connection string to set this up, then copy it to paste in this const mongoUri ='' | Make sure replace password you set up on the <password> | See more detail in keys.js
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
16) add --> const bodyParser = require('body-parser') to index.js | This code is a library to help parsing JSON
    - Error : It seems like you're encountering some deprecation warnings related to the body-parser middleware in your Node.js application. These warnings are indicating that the way you're using body-parser may not be fully compatible with the latest versions of the libraries involved.
    - Fixed it by --> STEP 1) use this command to install lastest versions of body-parser --> npm update express body-parser
    - Fixed it by --> STEP 2) use this 2 lines of code on the app --> app.use(express.json()); | AND | app.use(express.urlencoded({ extended: true }));
17) on Postman, add JSON body to this endpoint --> http://localhost:3000/signup | AND | add value on headers to content-type == application/json
    {
        "email": "test@test.com",
        "password": "mypassword"
    }
18) create models folder and add User.js file --> Using mongoose
    - add this line to index.js --> require('./models/User')
    - add this line to authRoutes.js --> const mongoose = require('mongoose'); |  const User = mongoose.model('User');
19) create and saving a user | in authRoutes.js, we receive request body and use it to create a user and save in database, we just use Postman to make a request and save the user in database
    - https://cloud.mongodb.com --> To make sure data save in the server, go to this website and look for collection to see data of the user
20) error handling | in authRoutes.js --> add try catch to handling error when the request and failed with error. 
21) Json Web Token | using https://jwt.io/ --> to see how to create token by encoding data
22) createing a JWT | in authRoutes.js --> add code to create JWT in signup function after saving user to database
23) wiring up JSON Web Tokens | create new folder name 'middlewares' and add a new file name 'requireAuth.js' | AND | add this requireAuth function in Index.js
24) understanding passing hashing | In general, "hashing" refers to the process of taking an input (or "message") and returning a fixed-size string of characters, which is typically a hexadecimal number. This output, called a "hash value" or simply "hash," is unique to the specific input. Hashing is widely used in various applications such as data retrieval, data integrity verification, password storage, and more. If you're asking about a specific application or technique related to hashing, please provide more information.
25) salting and hashing | in User.js --> add method to hash password and check password | useSchema.pre('save', function (next) {} | AND | useSchema.methods.comparePassword = function (candidatePassword) {}
    - Salting and hashing are cryptographic techniques used to secure sensitive information, particularly passwords.
    - Hashing is the process of taking an input (or "message") and returning a fixed-size string of characters, which is typically a hexadecimal number.
    - A salt is a random piece of data that is combined with the password before hashing. The salt value is unique for each user and is stored alongside the hash value in the database.
    - Example --> Without Salting:
        --> Password: mypassword
        --> Hash: 2c6ee24b09816a6f14f95d1698b24ead
    - Example --> With Salting:
        --> Password: mypassword
        --> Salt: sdf8w74jd
        --> Combine: mypasswordsdf8w74jd
        --> Hash: a7b8747383b745aa1b49793176f43d25
26) the signin route | in authRoutes.js --> add signin route 
27) testing signup and signin | in Postman --> test signin with this endpoing :  http://localhost:3000/signin | using POST METHOD with json body email and password, we ll get response back with token
28) defining tracks | in models folder --> create a new file name 'Track.js'
29) listing tracks | in routes folder --> create a new file name 'trackRoutes.js' | AND in Index.js add this line --> require('./models/Track');
30) creating tracks | in trackRoutes.js --> add function to add a track to database --> router.post('/tracks', async (req, res) => {});
*/

require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser'); --> Error : It seems like you're encountering some deprecation warnings related to the body-parser middleware in your Node.js application. These warnings are indicating that the way you're using body-parser may not be fully compatible with the latest versions of the libraries involved.
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const mongoUri = require('./routes/keys')
const requireAuth = require('./middlewares/requireAuth');

const app = express();
// app.use(bodyParser); --> Error : It seems like you're encountering some deprecation warnings related to the body-parser middleware in your Node.js application. These warnings are indicating that the way you're using body-parser may not be fully compatible with the latest versions of the libraries involved., use those 2 lines below instead.
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(authRoutes);
app.use(trackRoutes);

mongoose.connect(mongoUri, {
    // useCreateIndex: true --> Error : The error message you provided, MongoParseError: option usecreateindex is not supported, suggests that the useCreateIndex option was used in your MongoDB connection configuration, but it is not supported.
    useNewUrlParser: true,    // Use new URL parser
    useUnifiedTopology: true, // Use new server discovery and monitoring engine
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email : ${req.user.email}`); // res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});