const express = require('express');
const app = express();
let nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const returnArray = [];
  for (const key in grades) {
    returnArray.push(grades[key]);
  }
  res.json(returnArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.Id = nextID;
  grades[nextID] = req.body;
  nextID++;
  res.status(201).json(req.body);
});

app.listen(3000, (req, res) => {

});
