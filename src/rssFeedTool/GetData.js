import {useState} from "react";
import axios from "axios";

const RssFeed = (rssUrl) => {
    const [items, setItems] = useState([]);
    const getRss = async () => {
        try {
            const res = await axios.get(`https://api.allorigins.win/get?url=${rssUrl}`);
            const { contents } = await res.data;
            const feed = new window.DOMParser().parseFromString(contents, "text/xml");
            const items = feed.querySelectorAll("item");
            const formatter = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'};

            const feedItems = [...items].map((el) => ({
                link: el.querySelector("link").innerHTML,
                title: el.querySelector("title").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                image: el.querySelector("description").innerHTML.match(/src="([^"]*)"/)[1],
                description:el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "").replace(/<img[^>]*>/g,"").replace(/<a[^>]*>/g,"").replace(/<\/a>/g,""),
                pubDate: new Date(el.querySelector("pubDate").innerHTML).toLocaleDateString('en-US', formatter),
                author: el.querySelector("creator").innerHTML
            }));
            // get 5 items
            feedItems.length = 3;
            setItems(feedItems);
        } catch (error) {
            console.log(error);
        }
    };
    return items;
}
export default RssFeed;