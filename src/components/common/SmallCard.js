import React from "react";
const SmallCard = () => {
    return (
        <>
            <div className="second-slot">
                <div className="masonry-box post-media">
                    <img src="assets/upload/tech_02.jpg" alt="" className="img-fluid"/>
                    <div className="shadoweffect">
                        <div className="shadow-desc">
                            <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html"
                                                                       title="">Gadgets</a></span>
                                <h4><a href="tech-single.html" title="">Do not make mistakes when choosing web
                                    hosting</a></h4>
                                <small><a href="tech-single.html" title="">03 July, 2017</a></small>
                                <small><a href="tech-author.html" title="">by Jessica</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SmallCard;