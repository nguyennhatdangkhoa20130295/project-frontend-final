import {useState, useEffect} from "react";
import axios from 'axios';
import cheerio from 'cheerio';

const RssNewsDetails = (link) => {
    const [articleContent, setArticleContent] = useState('');

    useEffect(() => {
        const fetchArticleContent = async () => {
            try {

                const url = `/api/${link}`;
                const response = await axios.get(url);
                const html = response.data;
                const $ = cheerio.load(html);

                // Phân tích nội dung từ HTML sử dụng các selector CSS
                $('div.explus_related_1404022217').remove();
                $('div.ad-label').remove();
                $('p.expNoEdit').remove();
                const images = $('img');
                images.each((index, element)=>{
                    const $element = $(element);
                    const dataSrc = $element.attr('data-src');

                    if(dataSrc){
                        $element.attr('src', dataSrc);
                    }
                })
                $('div.txt_content p a').each((index, element) => {
                    const anchorTag = $(element);
                    const text = anchorTag.text();
                    anchorTag.replaceWith(text);
                });
                const title = $('h1').text();
                let publishedDate = '';
                if ($('div.time').length > 0) {
                    publishedDate = $('div.time').text();
                } else if ($('span.post-time').length > 0) {
                    publishedDate = $('span.post-time').text();
                }
                const content = $('div#content_detail').html();

                setArticleContent({title, publishedDate, content});
            } catch (error) {
                console.error(error);
            }
        };

        fetchArticleContent();
    }, [link]);
    return articleContent;
};
export default RssNewsDetails;