const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static('build'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index-web.html'));
});

app.listen(3000, () => console.log('Listening on Port: 3000 .-.'));