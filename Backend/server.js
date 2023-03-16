//create simple express server
const mongoose = require('mongoose');

const User = require('./user.js')


const express = require('express');
const app = express();

mongoose.connect('mongodb://alexfirst:rMDZuKzFRwhyHLq9ZmKicqh2vM53GsFWuZy9KzJQVYQvkKj4ENmh93YdFHxf78po6f61QC7YVz7yACDbMUPONw%3D%3D@alexfirst.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alexfirst@');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Database connected');
});

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});