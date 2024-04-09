const mongoose = require('mongoose');
const mongoURL= 'mongodb://localhost:27017/fooddatabase';   //replace 'fooddatabase' with your database
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db= mongoose.connection;

db.on('connected', ()=> {
    console.log('connected to mongodb server');
});

db.on('error', (err)=> {
    console.log('mongodb connection error');
});

db.on('disconnected' ,()=> {
    console.log('disconnected from mongodb server');
});

module.exports = db;