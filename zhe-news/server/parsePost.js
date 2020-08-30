const unirest = require('unirest');
const cheerio = require('cheerio');

const elems = require('./configs');

const log = (i,count,ms) => {
    return new Promise(r => setTimeout(()=>{
        console.log(`
        Индекс: ${i+1};
        Всего записей: ${count}
    `);
        r();
    }, ms)
    );

};

function parsePost(url, elems){
    return new Promise((resolve,reject)=>{
        unirest.get(url).end(response=>{
            const body = response.body;
            const $ = cheerio.load(body);
            const domain = url.match(/\/\/(.*?)\//)[1];
            const title = $(elems.title).text();
            let image = $(elems.image).attr('src');
            // image = image.indexOf('http') >= 0 ? image : `http://${domain}${image}`;
            const text = $(elems.text).text().trim();
            const views = $(elems.views).text().trim().slice(0,2);

            const post = {
                title,
                image,
                text,
                views
            }
            resolve(post)
        });
    })
}

function parseLinks(url,className,maxLinks = 5){
    return new Promise((resolve,reject)=>{
        unirest.get(url).end(({body})=>{
            const $ = cheerio.load(body);
            let links = [];
            $(className).each((_,e)=> {
                if(links.length<5){
                    links.push($(e).attr('href'))
                }
            })
            resolve(links)
            console.log(links)

            if(!links.length){
                reject()
            }
        });


    })
};


async function fetchPosts(links) {
    const posts = [];
    let count = links.length;
    for (let i = 0; i < count; i++){
        const post = await parsePost(links[i],elems.elems.habr).then(
            post=>post
        );
        posts.push(post);
        await log(i,count,2000)
    }
    return new Promise((resolve,reject)=>{
        if(!posts.length){
            reject(err)
        } else {
            resolve(posts)
        }

    })
}

module.exports = {
    parseLinks,
    fetchPosts
};