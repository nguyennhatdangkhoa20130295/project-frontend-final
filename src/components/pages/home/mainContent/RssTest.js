import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function RssTest() {
    const [rssUrl, setRssUrl] = useState("");
    const [items, setItems] = useState([]);

    const getRss = async () => {
        try {
           const res = await axios.get(`https://api.allorigins.win/get?url=${rssUrl}`);
            const { contents } = await res.data;
            const feed = new window.DOMParser().parseFromString(contents, "text/xml");
            const items = feed.querySelectorAll("item");
            const feedItems = [...items].map((el) => ({
                link: el.querySelector("link").innerHTML,
                title: el.querySelector("title").innerHTML,
                image: el.querySelector("description").innerHTML.match(/src="([^"]*)"/)[1],
            }));
            setItems(feedItems);
        } catch (error) {
            console.log(error);
            }
    };
    useEffect(() => {
        setRssUrl("https://vnexpress.net/rss/the-thao.rss");
        getRss();
    }, []);
    return (
        <div>
            {items.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                        <Link href={item.link}> <img src={item.image} alt={item.title} /></Link>
                    </div>
                );
            })}
        </div>
    );
}