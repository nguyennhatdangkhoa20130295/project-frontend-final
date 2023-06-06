import React from "react";
function BigCards() {
    return (
        <>
            <div className="first-slot">
                <div className="masonry-box post-media">
                    <img src="assets/upload/tech_01.jpg" alt="" className="img-fluid"/>
                    <div className="shadoweffect">
                        <div className="shadow-desc">
                            <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html"
                                                                       title="">Technology</a></span>
                                <h4><a href="tech-single.html" title="">Say hello to real handmade office
                                    furniture!
                                    Clean & beautiful design</a></h4>
                                <small><a href="tech-single.html" title="">24 July, 2017</a></small>
                                <small><a href="tech-author.html" title="">by Amanda</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BigCards;