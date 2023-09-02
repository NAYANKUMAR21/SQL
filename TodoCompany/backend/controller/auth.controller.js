const jwt = require('jsonwebtoken');
const userModel = require('../model/user.model');
const JWT_KEY = process.env.JWT_KEY;
async function login(req, res) {
  const { email, password } = req.body;
  try {
    const checkUser = await userModel.findOne({
      email: email,
      password: password,
    });
    if (checkUser && password === checkUser.password) {
      const token = jwt.sign({ email: email, id: checkUser._id }, JWT_KEY);
      return res
        .status(200)
        .send({ token, message: 'User created Successfully' });
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
  const { email, password } = req.body;
  try {
    const checkUser = await userModel.findOne({ email: email });
    //returns null if there is no user of that email
    if (!checkUser) {
      await userModel.create({ email: email, password: password });
      return res.status(200).send({ message: 'user created successfully' });
    }
    return res.status(404).send({ message: 'User Already present' });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
}
module.exports = { login, SignUp };
