const express = require('express');
const app = express();
const pg = require('pg');
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occured.' });
    });
});

app.post('/api/grades', (req, res) => {
  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined) {
    res.status(400).json({ error: 'Please include name, course, and a score between 0-100' });
    return;
  }
  if (Number.isNaN(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'Please set score to a number between 0 and 100' });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1,$2,$3)
  returning *
  `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const addedGrade = result.rows[0];
      res.status(201).json(addedGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Unexpected error occured.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0 || req.body.name === undefined || req.body.course === undefined) {
    res.status(400).json({ error: 'Please include name, course, score between 0-100, and gradeId greater than 0' });
    return;
  }
  if (Number.isNaN(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).json({ error: 'Please set score to a number between 0 and 100' });
    return;
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4
  returning *
  `;
  const params = [req.body.name, req.body.course, req.body.score, gradeId];
  db.query(sql, params)
    .then(result => {
      const editedGrade = result.rows[0];
      if (!editedGrade) {
        res.status(404).json({ error: 'GradeId does not exist' });
      } else {
        res.status(200).json(editedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Unknown error occurred' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: 'Please give a gradeId greater than 0' });
    return;
  }
  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        res.status(404).json({ error: 'GradeId does not exist' });
      } else {
        res.status(200).json(deletedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Unknown error occured' });
    });
});

app.listen(3000, () => {

});
