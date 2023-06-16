import {useState, useEffect} from 'react';
import axios from 'axios';
import {parseString} from 'xml2js';

const RssFeedByCategory = (slug) => {
    const [feedData, setFeedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
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
                            // const newImageUrl = imageUrl.replace("360x230", "1080x716");
                            const formatter = {
                                day: 'numeric',
                                month: 'numeric',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric'
                            };
                            const publishedDate = new Date(item.pubDate[0]).toLocaleDateString('en-US', formatter);

                            return {
                                title: item.title[0],
                                description: description,
                                imageUrl: imageUrl,
                                link: item.link[0],
                                pubDate: publishedDate,
                                guid: item.guid[0],
                            };
                        });
                        const storedData = localStorage.getItem('rssFeedData');
                        let parsedData = storedData ? JSON.parse(storedData) : {};
                        console.log(parsedData['bong-da-quoc-te-c2'])

                        // Kiểm tra xem danh mục đã tồn tại hay chưa
                        if (parsedData[slug]) {
                            // Danh mục đã tồn tại, kiểm tra và thêm những mục chưa tồn tại
                            const existingItems = parsedData[slug];

                            const newItems = items.filter(
                                (item) => !existingItems.some((existingItem) => existingItem.guid === item.guid)
                            );

                            if (newItems.length > 0) {
                                parsedData[slug].unshift(...newItems);
                                localStorage.setItem('rssFeedData', JSON.stringify(parsedData));
                            }

                            setFeedData(parsedData[slug]);
                        } else {
                            // Danh mục chưa tồn tại, lưu trữ dữ liệu vào localStorage
                            parsedData[slug] = items;
                            localStorage.setItem('rssFeedData', JSON.stringify(parsedData));

                            setFeedData(items);
                        }
                    }
                });
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRssFeed();
    }, [slug]);

    return {feedData, isLoading};
}
export default RssFeedByCategory;
