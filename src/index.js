const express = require('express')
const morgan = require('morgan')
const config = require('./config')
const routes = require('./routes')
const newsRouter = require('./routes/api/news')

const app = express()

const PORT = config.port || 3000

app.use(morgan('dev'))

app.use('/api', routes)
app.use('/api/news', newsRouter)

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'I am live 😄'
    })
})

app.listen(PORT, ()=>{
    console.log(`alive server on ${PORT}`)
})