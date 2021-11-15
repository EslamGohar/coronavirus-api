const express = require('express')
const getArticles = require('../../controller/scrape.controller')

const routes = express.Router()


// get all news articles
routes.get('/', async (_req, res, next)=> {
    try {
        const articles = await getArticles()
        res.json({
            status: "success",
            data: articles,
            message: "News retrieved successfully"
        })
    } catch(err) {
        next(err)
    }
})


// get all articles from specific newpaper by id
routes.get('/:newspaperId', async (req, res, next)=> {
    try {
        const { newspaperId } = req.params
        const articles = await getArticles(newspaperId)
        return res.json({
            status: 'success',
            data: articles,
            message: 'News retrieved successully'
        })
    } catch(err) {
        next(err)
    }
})


module.exports = routes