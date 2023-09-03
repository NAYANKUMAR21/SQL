const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./config/db');
const PORT = process.env.PORT || 8080;
const userRouter = require('./routes/user.routes');
const todoRouter = require('./routes/todo.routes');

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/todo', todoRouter);

app.get('/', (req, res) => {
  return res.status(200).send({ message: `<h1>Welcome Todo Backend</h1>` });
});

app.listen(PORT, async () => {
  await connect();
  console.log(`listenng on 8080`);
});
