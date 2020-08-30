const {parseLinks, fetchPosts } = require('./parsePost');
const fs = require('fs');

const saveResult = (json) => {
    fs.writeFile('result.json',json,(err)=>{
        if(err){
            console.log('Not saved')
        }
    })
};

const urlPage = 'https://habr.com/ru/news/'


parseLinks(urlPage,'.post h2 a')
    .then(links => fetchPosts(links)
        .then(posts=>saveResult(JSON.stringify(posts,0,4))).catch(e => console.log(e))
)


// https://habr.com/ru/news/t/516940/
// https://www.igromania.ru/news/97254/VGC_PlayStation_5_vyydet_v_seredine_noyabrya_sledom_za_Xbox_Series_X.html
// https://radiosputnik.ria.ru/20200228/1565316200.html