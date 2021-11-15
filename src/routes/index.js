const express = require('express')
const newsRoutes = require('./api/news')

const routes = express.Router()

routes.get('/news', newsRoutes)



module.exports = routes