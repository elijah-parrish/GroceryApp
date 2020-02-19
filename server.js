const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = requre('path');
const items = require('./routes/api/items');
const app = express(); // The express application (traditionally called app)

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
// This is promise based (means we use the .then)
mongoose
    .connect(db, { useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

// Use routes
app.use('/api/items', items);

// Serve static assets if in production
if (process.env.NODE_ENV == 'production') {
    // Set static folder
    app.use(express.static('/client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
// process.env.PORT is used for Heroku (later on)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
