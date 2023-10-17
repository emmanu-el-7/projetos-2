const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const generateToken = id => {
  return jwt, sign({ id }, jwtSecret, { expiresIn: '7d' })
}

const register = async (req, res) => {
  //res.send('Registro efetuado.')

  const { name, email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    res.status(422).json({ errors: ['Por favor, utilize outro e-mail.'] })
  }

  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)

  const newUser = await User.create({
    name,
    email,
    password: passwordHash
  })

  if (!newUser) {
    res
      .status(422)
      .json({ errors: ['Houve um erro, por favor tente mais tarde'] })

    return
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id)
  })
}

const getCurrentUser = async (req, res) => {
  const user = req.user

  res.status(200).json(user)
}

module.exports = {
  register,
  login,
  getCurrentUser
}
