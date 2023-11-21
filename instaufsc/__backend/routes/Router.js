const express = require('express')
const router = express()

router.use('/api/users', require('./UserRoutes')) //aqui já estamos definido o prefixo api para as rotas de usuário
router.use('/api/photos', require('./PhotoRoutes'))

// test route
router.get('/', (req, res) => {
  res.send('API funcionando!')
})

module.exports = router
