// Import
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/routes')
const connectDB = require('./db')

require('dotenv/config');

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Homepage');
});


// Middlewares
app.use('/users',postRoutes);


// Connect DB
connectDB();


// Routes 
app.use('/', require('./routes/routes'));

// Listening to server
app.listen(process.env.PORT); 