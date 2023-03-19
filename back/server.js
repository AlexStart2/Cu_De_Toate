const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
})

mongoose.connect('mongodb://alexfirst:rMDZuKzFRwhyHLq9ZmKicqh2vM53GsFWuZy9KzJQVYQvkKj4ENmh93YdFHxf78po6f61QC7YVz7yACDbMUPONw==@alexfirst.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@alexfirst@');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Database connected');
});







const stringSchema = new mongoose.Schema({
  UserType: String,
  FullName: String,
  Email: String,
  Password: String
});

const StringModel = mongoose.model('String', stringSchema);

app.post('/api/submit', async (req, res) => {
  const { inputType, inputFullName, inputEmail, inputPassword } = req.body;
  console.log({ inputType, inputFullName, inputEmail, inputPassword });

  try {
    const existingString = await StringModel.findOne({ Email: inputEmail });
    if (existingString) {
      return res.status(400).send('Email already exists');
    }

    const newString = new StringModel({
      UserType: inputType,
      FullName: inputFullName,
      Email: inputEmail,
      Password: inputPassword,
    });

    await newString.save();
    console.log(JSON.stringify('String saved to database'));
    res.send(JSON.stringify('String received and saved'));
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving string to database');
  }
});


  






app.listen(5000, () => {
  console.log('Server started on port 5000');
});








