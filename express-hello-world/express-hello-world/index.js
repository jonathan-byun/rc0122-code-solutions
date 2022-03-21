const express = require('express');
const app = express();
app.use((req, res) => {

  res.send('Nor');
});

app.listen(3000, () => {

});
