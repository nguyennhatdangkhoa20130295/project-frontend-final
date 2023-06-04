import React, {useState} from "react";
import {Link} from "react-router-dom";

const HotNews = () => {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="first-slot">
                        <div className="masonry-box post-media">
                            <img src="/assets/upload/tech_01.jpg" alt="" className="img-fluid"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html"
                                                                       title="">Technology</a></span>
                                        <h4><Link to="/news_details" title="">Say hello to real handmade office
                                            furniture!
                                            Clean & beautiful design</Link></h4>
                                        <small><Link to="/news_details" title="">24 July, 2017</Link></small>
                                        <small><Link to="tech-author.html" title="">by Amanda</Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="second-slot">
                        <div className="masonry-box post-media">
                            <img src="/assets/upload/tech_02.jpg" alt="" className="img-fluid"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                    <span className="bg-orange"><a href="tech-category-01.html"
                                                                   title="">Gadgets</a></span>
                                        <h4><Link to="/news_details" title="">Do not make mistakes when choosing web
                                            hosting</Link></h4>
                                        <small><Link to="/news_details" title="">03 July, 2017</Link></small>
                                        <small><Link to="tech-author.html" title="">by Jessica</Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="last-slot">
                        <div className="masonry-box post-media">
                            <img src="/assets/upload/tech_03.jpg" alt="" className="img-fluid"/>
                            <div className="shadoweffect">
                                <div className="shadow-desc">
                                    <div className="blog-meta">
                                        <span className="bg-orange"><a href="tech-category-01.html"
                                                                       title="">Technology</a></span>
                                        <h4><Link to="/news_details" title="">The most reliable Galaxy Note 8 images
                                            leaked</Link></h4>
                                        <small><Link to="/news_details" title="">01 July, 2017</Link></small>
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