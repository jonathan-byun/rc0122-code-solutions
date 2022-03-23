const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();

app.get('/api/notes', (req, res) => {
  const jsonArray = [];
  for (const key in data) {
    jsonArray.push(data[key]);
  }
  res.json(jsonArray);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    const errorMessageNegative = { error: 'id must be a positive integer' };
    res.status(400).json(errorMessageNegative);
  } else if (data.notes[req.params.id] === undefined) {
    const errorMessageMissing = { error: 'cannot find note with id ' + req.params.id };
    res.status(404).json(errorMessageMissing);
  } else {
    res.json(data.notes[req.params.id]);
  }
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    const errorMessageContent = { error: 'content is a required field' };
    res.status(400).json(errorMessageContent);
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;

    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occured.' });
      } else {
        res.status(201).json(data.notes[data.nextId]);
        data.nextId++;
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || NaN) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    delete data.notes[req.params.id];
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id < 0 || NaN) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    data.notes[req.params.id].content = req.body.content;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, (req, res) => {

});
