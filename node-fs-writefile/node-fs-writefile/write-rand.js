const fs = require('fs');
const randomNumber = Math.random();
fs.writeFile('random.txt', randomNumber.toString(), 'utf-8', err => {
  if (err) throw err;
});
