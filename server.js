const express = require('express');

const app = express();

require('./routes/tweet.routes.js')(app);

app.listen(3000, '0.0.0.0', () => {
    console.log('Server listening on port 3000...');
});