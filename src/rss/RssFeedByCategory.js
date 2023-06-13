import {useState, useEffect} from 'react';
import axios from 'axios';
import {parseString} from 'xml2js';

const RssFeedByCategory = (slug) => {
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        const fetchRssFeed = async () => {
            try {
                const url = `/api/${slug}.rss`;
                const response = await axios.get(url);
                const xml = response.data;

                parseString(xml, (err, result) => {
                    if (err) {
                        console.error(err);
                    } else {
                        const items = result.rss.channel[0].item.map((item) => {
                            const description = item.description[0].replace(/<\/?[^>]+(>|$)/g, '');
                            const imageUrl = item.description[0].match(/src="(.*?)"/)[1];
                            const newImageUrl = imageUrl.replace("360x230", "1080x716");
                            const formatter = {day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'};
                            const publishedDate = new Date(item.pubDate[0]).toLocaleDateString('en-US', formatter);

                            return {
                                title: item.title[0],
                                description: description,
                                imageUrl: newImageUrl,
                                link: item.link[0],
                                pubDate: publishedDate,
                                guid: item.guid[0],
                            };
                        });
                        setFeedData(items);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchRssFeed();
    }, [slug]);

    return feedData;
}
export default RssFeedByCategory;