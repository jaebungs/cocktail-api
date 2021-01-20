const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const cocktailsRoutes = require('./routes/cocktails');

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, 
{ useNewUrlParser: true, useUnifiedTopology: true } )

const app = express();
const PORT = process.env.PORT || 5000;
const db = mongoose.connection;

db.on('error', (err)=>{console.log(err)});
db.once('connected', ()=>{console.log('Connected to Database')});

app.use(cors());
app.use(express.json());

// Routes
app.use('/cocktails', cocktailsRoutes);

app.get('/', (req, res)=>{
    console.log('TEST');
    res.send('Hello from homepage')
})

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})