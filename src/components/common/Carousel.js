import {Link} from "react-router-dom";
import React from "react";

function Carousel(props) {
    return (
        props.data.map((item, index) => {
            const link = item.link.replace('https://thethao247.vn/', '');
            const clearRssUrl = props.slug.replace('https://thethao247.vn/', '');
            const slug = clearRssUrl.replace('.rss', '');
            if (index === 0) {
                return (
                    <div key={index} className="first-slot">
                        <div className="masonry-box post-media">
                            <img src={item.image} alt="" className="img-fluid"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a title="">Tin nóng</a></span>
                                        <h4><Link to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}>{item.title}</Link>
                                        </h4>
                                        <small>{item.pubDate}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div key={index} className="second-slot">
                        <div className="masonry-box post-media">
                            <img src={item.image} alt="" className="img-fluid"/>
                            <div className="hovereffect"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a title="">Tin nóng</a></span>
                                        <h4><Link to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}>{item.title}</Link></h4>
                                        <small>{item.pubDate}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })

    );
}

export default Carousel;