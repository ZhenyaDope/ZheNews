const elems = {
    habr: {
        title: '.post__title-text',
        image: '#post-content-body div img',
        text: '#post-content-body',
        views: '.post-stats__views-count',
    },
    game: {
        title: '.page_news_ttl',
        image: '.main_pic_container img',
        text: '.page_news_content .universal_content div',
        views: '.page_news_info  .info_block_botrt',
    },
    forbes: {
        title: '.article__title',
        image: '.photoview__open img',
        text: '.article__body .article__block',
        views: '.statistic__item',
    }
}

module.exports = {
    elems,
}