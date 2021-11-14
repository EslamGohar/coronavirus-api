const express = require('express')
const config = require('./config')

const app = express()

const PORT = config.port || 3000

app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'I am live 😄'
    })
})

app.listen(PORT, ()=>{
    console.log(`alive server on ${PORT}`)
})