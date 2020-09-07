module.exports = (app) => {

    const tweet = require('../controllers/tweet.controller.js');

    // POST tweet
    app.post('/touchFaceTweetCringe', tweet.sendRandomTweet);
}