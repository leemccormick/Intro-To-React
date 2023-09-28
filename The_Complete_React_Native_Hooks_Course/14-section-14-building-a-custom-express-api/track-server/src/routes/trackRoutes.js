const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth')
const Track = mongoose.model('Track');
const router = express.Router();

// To use requireAuth in this router
router.use(requireAuth);

// To add endpoint --> http://localhost:3000/tracks 
/*
To test get tracks on Postman 
Endpoint : http://localhost:3000/tracks 
Method : GET
Headers : Key = Autorization, Value = Bearer {token}
*/
router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id }); // To find tracks by user id
    res.send(tracks);
});

// To use requireAuth in this router
router.use(requireAuth);

// To add endpoint --> http://localhost:3000/tracks 
/*
To test add a tracks on Postman 
Endpoint : http://localhost:3000/tracks 
Method : POST
Headers : Key = Autorization, Value = Bearer {token}
Headers : Key = Content-Type, Value = application/json
Body : raw with this JSON
    {
        "name": "My new track",
        "locations": [
            {
                "timestamp": 100000,
                "coords": {
                    "latitude": 100,
                    "longitude": 100,
                    "altitude": 100,
                    "accuracy": 100,
                    "heading": 100,
                    "speed": 100
                }
            }
        ]
    }
*/
router.post('/tracks', async (req, res) => {
    console.log('addTrack : req.body is : ' + req.body);
    console.log(req.body);

    const { name, locations } = req.body;

    if (!name || !locations) {
        return res.status(422).send({ error: 'You must provide a name and locations' });
    }

    try {
        const track = new Track({ name, locations, userId: req.user._id });
        await track.save();
        res.send(track);
    } catch (err) {
        return res.status(422).send({ error: err.message });
    }
});

// To export router, so we can use it in any files
module.exports = router;