const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const JWT_KEY = process.env.JWT_KEY;
async function login(req, res) {
  const { email, password } = req.body;
  try {
    const checkUser = await userModel.findOne({
      email: email,
    });

    if (checkUser && password === checkUser.password) {
      const token = jwt.sign({ id: checkUser._id, email: email }, JWT_KEY);
      return res.status(200).send({
        name: checkUser.name,
        avatar: checkUser.avatar,
        token,
        message: 'User created Successfully',
      });
    } else if (checkUser && password !== password) {
      return res.status(404).send({ message: 'Wrong password' });
    }
    return res
      .status(404)
      .send({ message: 'User not in database Please Signup' });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
}
async function SignUp(req, res) {
  console.log(req.body);
  const { name, email, password, avatar } = req.body;

  try {
    const checkUser = await userModel.findOne({ email: email });
    if (!checkUser) {
      await userModel.create({ name, avatar, email, password });
      return res.status(200).send({ message: 'User created Successfully' });
    }
    return res.status(400).send({ message: 'User Already present Login' });
  } catch (er) {
    return res.status(401).send({ message: er.message });
  }
}
module.exports = { login, SignUp };
