import React, {useEffect, useState} from "react";
import Carousel from "../../../common/Carousel";
import axios from "axios";

const HotNews = () => {
    const [rssUrl, setRssUrl] = useState("");
    const [items, setItems] = useState([]);

    const getRss = async () => {
        try {
            const res = await axios.get(`https://api.allorigins.win/get?url=${rssUrl}`);
            const {contents} = await res.data;
            const feed = new window.DOMParser().parseFromString(contents, "text/xml");
            const items = feed.querySelectorAll("item");
            const feedItems = [...items].map((el) => ({
                link: el.querySelector("link").innerHTML,
                title: el.querySelector("title").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                image: el.querySelector("description").innerHTML.match(/src="([^"]*)"/)[1],
                description: el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "").replace(/<img[^>]*>/g, "").replace(/<a[^>]*>/g, "").replace(/<\/a>/g, ""),
            }));
            // get 5 items
            feedItems.length = 3;
            setItems(feedItems);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setRssUrl("https://thethao247.vn/u23-dong-nam-a-c256.rss");
    }, []);
    getRss();
    return (
        <>
            <section className="section first-section">
                <div className="container-fluid">
                    <div className="masonry-blog clearfix">
                        <Carousel data={items}/>
                    </div>
                </div>
            </section>

        </>
    )
}
export default HotNews;