// import 'promise-polyfill/src/polyfill';
// import React, { useState, useEffect } from 'react';
// import Parser from 'rss-parser';
//
// const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
// const parser = new Parser();
// // create a page that will display the rss feed
// const Rss = () => {
//
//     const [feeds, setFeeds] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         const loadFeeds = async () => {
//             try {
//                 const feed = await parser.parseURL(
//                     CORS_PROXY + 'https://vnexpress.net/rss/the-thao.rss'
//                 );
//                 setFeeds(feed.items);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };
//         loadFeeds();
//     }, []);
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;
//     return (
//         <div className="container">
//             <div className="row">
//                 {feeds.map((feed) => (
//                     <div className="col-md-4">
//                         <div className="card mb-4 shadow-sm">
//                             <img
//                                 className="bd-placeholder-img card-img-top"
//                                 width="100%"
//                                 height="225"
//                                 src={feed.enclosure.url}
//                                 alt=""
//                             />
//                             <div className="card-body">
//                                 <h5 className="card-title">{feed.title}</h5>
//                                 <p className="card-text">{feed.contentSnippet}</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div className="btn-group">
//                                         <a
//                                             href={feed.link}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="btn btn-sm btn-outline-secondary"
//                                         >
//                                             View
//                                         </a>
//                                     </div>
//                                     <small className="text-muted">{feed.pubDate}</small>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default Rss;
import React, { useState } from "react";

export default function App() {
    const [rssUrl, setRssUrl] = useState("");
    const [items, setItems] = useState([]);

    const getRss = async (e) => {
        e.preventDefault();
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
            author: el.querySelector("author").innerHTML
        }));
        setItems(feedItems);
    };

    return (
        <div className="App">
            <form onSubmit={getRss}>
                <div>
                    <label> rss url</label>
                    <br />
                    <input onChange={(e) => setRssUrl(e.target.value)} value={rssUrl} />
                </div>
                <input type="submit" />
            </form>
            {items.map((item) => {
                return (
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.author}</p>
                        <a href={item.link}>{item.link}</a>
                    </div>
                );
            })}
        </div>
    );
}