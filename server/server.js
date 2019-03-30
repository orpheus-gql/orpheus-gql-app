const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static('build'))


app.listen(3000, () => console.log('Listening on Port: 3000 .-.'));
