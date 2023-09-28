const express = require('express'); // To add express from library

const jwt = require('jsonwebtoken'); // To add JWT to help create token

// To add user model, following this 2 lines below....
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router(); // To add router from express

// To add endpoint --> http://localhost:3000/signup
router.post('/signup', async (req, res) => {
    console.log(req.body);

    try {
        // Get user from request body and save in database
        const { email, password } = req.body;
        const user = new User({ email, password });
        await user.save(); // --> To save in Mongo DB

        // To create JWT --> Json Web Token for security
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token }); // res.send('You made a post request');
    } catch (err) {
        return res.status(422).send(err.message);
    }
});

// To add signin route --> http://localhost:3000/signin
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    // If email and password does not exist, then return bad response
    if (!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password' });
    }

    const user = await User.findOne({ email }); // To find one user with the email
    if (!user) {
        return res.status(422).send({ error: 'Email not found' });
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token });
    } catch (err) {
        return res.status(404).send({ error: 'Invalid password or email' });
    }
});

module.exports = router;  // To export router, so we can use it in any files