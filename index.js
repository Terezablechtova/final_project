const express = require('express')
const app = express()
const port = process.env.PORT || 3000



//Middlewares

app.set('view engine', 'pug')
app.use(express.static('public'))

//Modules
const home = require('./routes/home')
const about = require('./routes/about')
const landscape = require('./routes/landscape')
const street_photography = require('./routes/street_photography')
const portrait = require('./routes/portrait')


app.get('/', home)
app.get('/about', about )
app.get('/landscape', landscape)
app.get('/street_photography', street_photography)
app.get('/portrait', portrait)

app.listen(port, () => console.log(`Website running on port ${port}!`))