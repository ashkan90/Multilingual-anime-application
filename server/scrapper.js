const fetch = require('node-fetch')
const cheerio = require('cheerio')

const url = 'http://www.turkanime.tv'

function searchAnime (term) {
  const searchUrl = '/anime/'
  return fetch(`${url}${searchUrl}${term}`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body)
      const $element = $('.panel .panel-body .table-responsive')
      const $title = $('#detayPaylas .panel .panel-ust .panel-title')
      const $image = $element.find('div.imaj img')
      const $description = $element.find('td p.ozet')
      const $categories = []
      $element.find('td a.btn.btn-default.btn-xs').not('[target="_blank"]').map(function (i, element) {
        $categories.push($(element).text())
      })

      const $like = $element.find('td div.btn-group a.colorbegen')
      const $unlike = $element.find('td div.btn-group a.colorbegenme')

      const anime = {
        title: $title.text(),
        image: $image.attr('data-src'),
        description: $description.text(),
        categories: $categories,
        like: $like.text(),
        unlike: $unlike.text()
      }

      return anime
      //
      // return anime

      // $image.attr('data-src')
      // $title.children[0].data

      // Selenium ile falan yapılacak bu.
      // // Bölüm listesi;
      // const $epElement = $('.panel .panel-body.padding-none').filter(function (i, el) {
      //   console.log($(el).text())
      // })
      // //const $episodes = $epElement.find($('ul.list li'))
      //
      // console.log($epElement.html())
    })
}

searchAnime('shingeki-no-kyojin')

module.exports = {
  searchAnime
}

// searchAnime('shingeki-no-kyojin')
/**
 const titles = $('div.col-xs-6 > .panel')

 titles.each(function (i, element) {
        const $element = $(element)
        const $title = $element.find('.panel-ust-ic .panel-title')

        console.log($title.text())
      }) */
