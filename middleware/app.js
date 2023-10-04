const express = require('express')
const app = express()

const loggingMiddleware = (req, res, next) => {
  console.log('Eu estou dentro do Middleware')
  console.log(`${new Date().toISOString()}, URL acessada: ${req.originalUrl}`)
  next()
}

const sigIn = (req, res, next) => {
  if (req.query.admin === 'true') {
    req.admin = true
    next()
  } else {
    res.send(
      'Autorização negada: Só administradores do sistema podem se logar.'
    )
  }
}

const checkProductFormat = (rec, res, next) => {
  let strSlice = req.query.p.substring(req.query.p.indexOf('_') + 1)
  if (isNaN(strSlice)) {
    res.send('O produto está incorretamente formatado')
  } else {
    let fileNumber = parseInt(strSlice)
    req.fileNumber = fileNumber
    console.log(fileNumber)
    next()
  }
}

app.use(loggingMiddleware)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/users', sigIn, (req, res) => {
  console.log(req.admin)
  res.send('Users page')
})

app.get('/products', (req, res) => {
  res.send('Products')
})

app.listen(3000, () => {
  console.log('Servidor Inicializado.')
})
