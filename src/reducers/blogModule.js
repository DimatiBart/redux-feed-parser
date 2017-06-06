import {Effects, loop} from "redux-loop";

import {LOAD_DATA, DATA_LOADED, loadData, dataLoaded} from "../actions/blogModule";

let loadFeed = (url) => {
    return fetch(url)
            .then((responce) => responce.text())
            .then((xml) => parseFeed(xml))
            .catch((err) => console.log(err))
}

let parseFeed = (xml) => {
    let data = new DOMParser().parseFromString(xml, "text/xml");
    let posts = [];
    let imageRegexp = /img.+src="(.+?)"/;
    data.querySelectorAll("item").forEach((item, index) => {
        let description = item.querySelector("encoded").textContent || item.querySelector("content\\:encoded").textContent;
        let result = imageRegexp.exec(description);
        let img = null;

        if (result !== null) {
            img = result[1];
        }

        posts.push({
            title: "BLOG",
            text: item.querySelector("title").textContent,
            date: item.querySelector("pubDate").textContent.match(/\d{2} \w+ \d{4}/)[0],
            link: item.querySelector("link").textContent,
            author: item.querySelector("creator").textContent || item.querySelector("dc\\:creator").textContent,
            img
        })
    })

    // $(xml).find("item").each((index, item) => {
    //     var $item = $(item);
    //     posts.push({
    //         title: $item.find("title").text(),
    //         date: $item.find("pubDate").text().match(/\d{2} \w+ \d{4}/)[0],
    //         link: $item.find("link").text(),
    //         author: $item.find("creator").text() || $item.find("dc\\:creator").text(),
    //         description: $item.find("encoded").text() || $item.find("content\\:encoded").text()
    //     });
    // });
    return posts;
}

export default (state= {isLoaded: false, posts:[]}, action) => {
    switch(action.type) {
        case LOAD_DATA: {
            return loop(
                state,
                Effects.promise(
                        () => loadFeed(action.url)
                                .then((posts) => dataLoaded(posts))
                )
            )
        }
        case DATA_LOADED: {
            return {
                isLoaded: true,
                posts: action.posts
            }
        }
        default: return state;
    }
}