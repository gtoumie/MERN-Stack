const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

//middleware bodyParser
app.use(express.json());

//connect mongo
const db =  config.get('mongoURI');
mongoose.connect(db)
    .then(()=> console.log('Mongo connected'))
    .catch((e)=> console.log(e));

// Use Routes
app.use('/api/items',  require('./routes/api/items'));
app.use('/api/users',  require('./routes/api/users'));
app.use('/api/auth',  require('./routes/api/auth'));

if (process.env.NODE_ENV==='production'){
    app.use(express.static('client-node/build'))

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client-node', 'build', 'index.html'))
    });
}
const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server started on port ${port}`));