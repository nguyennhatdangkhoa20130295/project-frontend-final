import {Link} from "react-router-dom";
import React from "react";

function Carousel(props) {
    return (
        props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <div className="first-slot">
                        <div className="masonry-box post-media" key={index}>
                            <img src={item.image} alt="" className="img-fluid"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                                    <span className="bg-orange"><a title="">Hot News</a></span>
                                        <h4><Link to={item.link}>{item.title}</Link></h4>
                                        <small>{item.pubDate}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="second-slot">
                        <div className="masonry-box post-media" key={index}>
                            <img src={item.image} alt="" className="img-fluid"/>
                            <div className="hovereffect"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a title="">Hot News</a></span>
                                        <h4><Link to={item.link}>{item.title}</Link></h4>
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