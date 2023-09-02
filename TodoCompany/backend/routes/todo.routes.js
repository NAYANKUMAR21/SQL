const express = require('express');

const app = express();
const {
  DeleteTodo,
  getAll,
  getSingle,
  updateTodo,
  AddTodo,
} = require('../controller/todos.controller');
app.get('/', getAll);
app.get('/:id', getSingle);
app.post('/add', AddTodo);
app.patch('/update', updateTodo);
app.delete('/delete/:id', DeleteTodo);

module.exports = app;
