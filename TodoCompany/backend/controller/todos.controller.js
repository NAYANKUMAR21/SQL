const todoModel = require('../model/todo.model');
const JWT_KEY = process.env.JWT_KEY;
const jwt = require('jsonwebtoken');
async function getAll(req, res) {
  try {
    const allTodos = await todoModel.find();
    return res.status(201).send(allTodos);
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
}
async function getSingle(req, res) {
  const token = req.headers.authorization;
  try {
    if (token.length !== 0) {
      const verify = jwt.verify(token, JWT_KEY);
      let todos = await todoModel.findById(verify.id);
      return res.status(201).send(todos);
    }
    return res.status(200).send({ message: 'Token not in authorization' });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
}

async function AddTodo(req, res) {
  const token = req.headers.authorization;
  const { title } = req.body;
  try {
    if (token.length !== 0) {
      const verify = jwt.verify(token, JWT_KEY);
      if (!verify.id) {
        return res.status(200).send({ message: 'Token not in authorization' });
      }
      console.log(token);
      await todoModel.create({
        user: verify.id,
        title,
        isCompleted: false,
      });
      return res.status(201).send({ message: 'Successfully Added' });
    }
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
}
async function updateTodo(req, res) {
  const token = req.headers.authorization;
  const { id, title, isCompleted } = req.body;
  try {
    if (token.length !== 0) {
      const verify = jwt.verify(token, JWT_KEY);
      if (!verify.id) {
        return res.status(200).send({ message: 'Token not in authorization' });
      }

      let todos = await todoModel.findByIdAndUpdate(
        { _id: id },
        { title, isCompleted },
        { new: true }
      );
      return res.status(201).send(todos);
    }
    return res.status(200).send({ message: 'Token not in authorization' });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
}
async function DeleteTodo(req, res) {
  const token = req.headers.authorization;
  const { id } = req.params;
  try {
    if (token.length !== 0) {
      const verify = jwt.verify(token, JWT_KEY);
      if (!verify.id) {
        return res.status(200).send({
          message: 'Token not in authorization, not authorized to delete',
        });
      }
      await todoModel.findByIdAndDelete({ _id: id });
      return res.status(201).send({ message: 'Successfully deleted' });
    }
    return res.status(200).send({ message: 'Token not in authorization' });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
}
module.exports = { DeleteTodo, getAll, getSingle, updateTodo, AddTodo };
