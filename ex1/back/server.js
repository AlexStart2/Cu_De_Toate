const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req,res)=>{
    res.json({"users":["userOne","userTwo","userThree"]})
})

mongoose.connect('');

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

app.post('/api/submit', (req, res) => {
  const { inputType, inputFullName, inputEmail, inputPassword } = req.body;
  console.log({ inputType, inputFullName, inputEmail, inputPassword });
  const newString = new StringModel({ UserType: inputType, FullName: inputFullName, Email: inputEmail, Password: inputPassword });
  newString.save() 
  .then(() => {
    console.log('String saved to database');
    res.send('String received and saved');
   } )
   .catch((err) =>{
    console.error(err);
    res.status(500).send('Error saving string to database');
   })
  }
  );
  






app.listen(5000, () => {
  console.log('Server started on port 5000');
});








