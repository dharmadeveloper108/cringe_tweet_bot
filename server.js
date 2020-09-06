const express = require('express');
var Twit = require('twit');
const config = require('./config.js');

const app = express();

const T = new Twit(config);

const cringeTweets = [
    "Dab On Them Haters 🔥 #beliebersforever",
    "Chad on the streets WAP on the sheets UwU #blessed",
    "*tips fedora* M’Matey 💜 #livelaughlove",
    "Choke me with the overwhelming emotion of receiving the love I’ve been missing from a paternal figure, DADDY 💦",
    "Simping hard for that milkshake’s yard",
    "- Wait, that’s a Reese’s butter cup?\n- Always has BEANS",
    "How do you do fellow tiktokers: 'D4 damage with the ill behavior' am I right? 😎🤙",
    "- Are ya winning Son?\n- Ossu! Ora Goku!",
    "Stream Caramelldansen 🙏 #shreddedlife #gains",
    "I don’t wash my hands"
];

const getRandomTweet = () => {
    const randomTweetIndex = Math.floor(Math.random() * cringeTweets.length);
    console.log(cringeTweets[randomTweetIndex]);
    T.post('statuses/update', { status: cringeTweets[randomTweetIndex] }, function(err, data, response) {
    console.log(data)
    });
    randomTweetIndex > -1 ? cringeTweets.splice(randomTweetIndex, 1) : false;
}

getRandomTweet();

app.listen(3000, '0.0.0.0', () => {
    console.log('Server listening on port 3000...');
});