# Cringe Tweet Bot 🤖

A Node.js API that selects a random cringe tweet from a refined selection, to kindly post on your behalf.

`POST` endpoint: `http://localhost:3000/touchFaceTweetCringe`.


## How to use
To run this API locally: 

1. Download or `git clone` this repo;

1. Create a `config.js` file in the project directory with the following structure (replace the empty strings with your [Twitter API](https://developer.twitter.com/en/docs) keys):
>module.exports = {<br>
    consumer_key: '', <br> 
    consumer_secret: '',<br>
    access_token: '',<br>
    access_token_secret: ''<br>
}

1. `npm start` it and you're good to go. 👍
