import {useState} from "react";
import axios from "axios";

export default function RssFeed(rssUrl) {
    const [items, setItems] = useState([]);
    const getRss = async () => {
        try {
            const res = await axios.get(`https://api.allorigins.win/get?url=${rssUrl}`);
            const { contents } = await res.data;
            const feed = new window.DOMParser().parseFromString(contents, "text/xml");
            const items = feed.querySelectorAll("item");
            const feedItems = [...items].map((el) => ({
                link: el.querySelector("link").innerHTML,
                title: el.querySelector("title").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                image: el.querySelector("description").innerHTML.match(/src="([^"]*)"/)[1],
                description:el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "").replace(/<img[^>]*>/g,"").replace(/<a[^>]*>/g,"").replace(/<\/a>/g,""),
            }));
            setItems(feedItems);
        } catch (error) {
            console.log(error);
        }
    };
}