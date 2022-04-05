const express = require('express');
const app = express();
const path = require('path');
const static1 = express.static('public');
const joinedPath = path.join(__dirname, 'public');
console.log(joinedPath);
app.use(static1);

app.listen(3000, () => {
  console.log('listening 3000');
});
