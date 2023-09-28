/* How to Wiring up JSON Web Tokens..
 1) add jwt, mongoose and User to this file
 2) export (req, res, next) --> req == requst, res == response, next == nextFunction, add logic if authorize, so we can allow user to call next api request
 3) in Postman, set up new GET Request with Hearders, --> Key == Authorization, Value == Bearer {token}
    - Example of value on Autoriztion key | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE1YzVjNTU5OTQ4OTlkNDRjOWEwOTUiLCJpYXQiOjE2OTU5MjU3MDF9.zvPCpDGOoZimaPmlhyWJOqgFhlcENhiQXW__CJdekDo
 4) in Index.js use requireAuth in app.get('/', requireAuth, (req, res) => {} | AND | test sending request throuhg Postman
    - Endpoint : http://localhost:3000 | After send the request we will get response --> Your email : test3@test.com
 */

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // authorization === 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE1YzVjNTU5OTQ4OTlkNDRjOWEwOTUiLCJpYXQiOjE2OTU5MjU3MDF9.zvPCpDGOoZimaPmlhyWJOqgFhlcENhiQXW__CJdekDo'

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in.' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, playload) => {
        // If error, then return
        if (err) {
            return res.status(401).send({ error: 'You must be logged in.' });
        }

        // If not error, then using payload to find who is the user and call next function
        const { userId } = playload;
        const user = await User.findById(userId);
        req.user = user;
        next();
    });
};