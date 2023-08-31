require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');
const pool = require('./config');
app.use(express.json());
app.use(cors());
app.get('/get-todo', async (req, res) => {
  try {
    console.log(req.body);
    const [results] = await pool.query(`select *from Todos`);
    return res.status(200).send({ message: 'Data fetched', data: results });
  } catch (er) {
    return console.log(er.message);
  }
});
app.post('/add-todo', async (req, res) => {
  const { title, sentence } = req.body;
  console.log(req.body);
  try {
    let x = await pool.execute(
      `insert into Todos (title,sentence) values(?,?)`,
      [title, sentence]
    );
    return res.status(201).send({ message: 'data added successfully', x });
  } catch (er) {
    return console.log(er.message);
  }
});

app.listen(PORT, async () => {
  console.log(`Listening on ${PORT}`);
});
