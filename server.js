import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/api';

// MAKE CONNECTION TO DATABASE
mongoose.connect('mongodb://localhost:27017/ordersDB', {useNewUrlParser:true}, function(err) {
    if (err) { console.log(err) } 
    console.log('Connection to DB successful');
});

const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

// API ROUTES
app.use('/api', routes)

app.listen(3000, function() {
    console.log('Server running on port 3000');
});

