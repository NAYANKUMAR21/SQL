const express = require('express');
const app = express();
const cors = require('cors');
const { insertData, getData } = require('./Src/Controller/index');
app.use(express.json());
app.use(cors());
app.get('/get-info', getData);
app.post('/post-info', insertData);
app.listen(8080, () => {
  console.log('Listening on http://localhost:8080');
});
