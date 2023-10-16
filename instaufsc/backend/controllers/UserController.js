const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET

const generateToken = id => {
  return jwt, sign({ id }, jwtSecret, { expiresIn: '7d' })
}

const register = async (req, res) => {
  res.send('Registro efetuado.')
}
