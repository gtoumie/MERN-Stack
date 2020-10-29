const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//middleware bodyParser
app.use(bodyParser.json());

//connect mongo
const db =  require('./config/keys.js').mongoURI;
mongoose.connect(db)
    .then(()=> console.log('Mongo connected'))
    .catch((e)=> console.log(e));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));