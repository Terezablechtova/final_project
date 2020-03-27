const express = require('express')
const app = express()
const port = 3000

//Middlewares

app.set('view engine', 'pug')

//Modules
const entry_point = require('./routes/entry-point')

app.get('/', entry_point)

app.listen(port, () => console.log(`Shopping cart running on port ${port}!`))