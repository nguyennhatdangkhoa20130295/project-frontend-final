import React from "react";
import {Link} from "react-router-dom";
function SmallCard ({image, title, date, author}) {
    let formatter = {day: 'numeric', month: 'long', year: 'numeric'};
    let articleDate = new Date(date).toLocaleDateString("vi-VN", formatter);

    return (
        <>
            <div className="second-slot">
                <div className="masonry-box post-media">
                    <img src="/assets/upload/tech_02.jpg" alt="" className="img-fluid"/>
                    <div className="hovereffect"/>
                    
                    <div className="shadoweffect">
                        <div className="shadow-desc">
                            <div className="blog-meta">
                                <span className="bg-orange"><a title="">Technology</a></span>
                                <h4><Link to="/news_details">Title</Link></h4>
                                <small>21 July, 2017</small>
                                <small>Author</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SmallCard;