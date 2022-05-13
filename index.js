const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 6000

app.use(express.json())

// Available Routes

app.use('/api/url',require('./routes/url'));
app.use('/',require('./routes/index'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})