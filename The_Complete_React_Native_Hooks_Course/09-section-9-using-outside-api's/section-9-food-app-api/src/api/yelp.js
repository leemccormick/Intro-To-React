/* API : Documentation
https://docs.developer.yelp.com/docs/fusion-intro
*/ 

import axios from "axios";

export default axios.create({ 
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization: "Bearer cDAlup7UpgVbv1PMXw6_TUyyh_gqHddgKTvkFjxJKENifIXJ1ShWwGCIqt8YBidb9dNYHO029gEoPU_LhkU4WQWQmUQ1XRCwq15qYWd3j0BMSMr8m0t6BZwEpOsRZXYx",
},
});
