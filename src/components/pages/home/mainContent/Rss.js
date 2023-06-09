
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Rss() {
    const [rssUrl, setRssUrl] = useState("");
    const [items, setItems] = useState([]);

    const getRss = async () => {
        const urlRegex = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
        if (!urlRegex.test(rssUrl)) {
            return;
        }
        const res = await fetch(`https://api.allorigins.win/get?url=${rssUrl}`);
        const { contents } = await res.json();
        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        const items = feed.querySelectorAll("item");
        const feedItems = [...items].map((el) => ({
            link: el.querySelector("link").innerHTML,
            title: el.querySelector("title").innerHTML,
            image: el.querySelector("description").innerHTML.match(/src="([^"]*)"/)[1],
        }));
        setItems(feedItems);
    };
    useEffect(() => {
        setRssUrl("https://vnexpress.net/rss/the-thao.rss");
        getRss();
    }, []);
    return (
        <div >
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