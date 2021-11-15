const axios = require('axios')
const cheerio = require('cheerio')
const newspapers = require('../data/newspapers')

async function getArticles(newspaperId = null) {
    const articles = []

    const targetNewspapers = newspaperId ? newspapers.filter(({ source }) => source === newspaperId) : newspapers

    for(const newspaper of targetNewspapers){
        const {source, url , base } = newspaper
        const response = await axios.get(url)
        const html = response.data
        const $ = cheerio.load(html)
        $(
            'a:contains("coronavirus"), a:contains("Coronavirus"), a:contains("covid"), a:contains("COVID")'
        ).each(function(){
            const articleTitle = $(this).text().trim()
            const articleUrl = $(this).attr('href')
            articles.push({
                title: articleTitle,
                url: `${base}${articleUrl}`,
                source
            })
        })
    }

    return articles  
}


module.exports = getArticles