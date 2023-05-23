import React, {useState} from "react";

const HotNews = () => {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
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

                    <div className="last-slot">
                        <div className="masonry-box post-media">
                            <img src="assets/upload/tech_03.jpg" alt="" className="img-fluid"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html"
                                                                       title="">Technology</a></span>
                                        <h4><a href="tech-single.html" title="">The most reliable Galaxy Note 8 images
                                            leaked</a></h4>
                                        <small><a href="tech-single.html" title="">01 July, 2017</a></small>
                                        <small><a href="tech-author.html" title="">by Jessica</a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HotNews;