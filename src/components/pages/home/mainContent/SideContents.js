import React from "react";
import {Link} from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const SideContents = () => {
    return(
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">

                <div className="widget">
                    <h2 className="widget-title">Trend Videos</h2>
                    <div className="trend-videos">
                        <div className="blog-box">
                            <div className="post-media">
                                <a href="tech-single.html" title="">
                                    <video width="320" height="240" controls
                                        src="https://www.youtube.com/watch?v=o_R10T59ZPg"
                                        poster="https://i.ytimg.com/vi/o_R10T59ZPg/maxresdefault.jpg">
                                        <a href="https://www.youtube.com/watch?v=o_R10T59ZPg" title="">download</a>
                                    </video>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><Link to="tech-single.html" title="">We prepared the best 10 laptop
                                    presentations for you</Link></h4>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="tech-single.html" title="">
                                    <VideoPlayer source="https://youtu.be/o_R10T59ZPg"/>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="tech-single.html" title="">We are guests of ABC Design
                                    Studio - Vlog</a></h4>
                            </div>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <div className="post-media">
                                <a href="tech-single.html" title="">
                                    <VideoPlayer source="https://youtu.be/o_R10T59ZPg"/>
                                    <div className="hovereffect">
                                        <span className="videohover"></span>
                                    </div>
                                </a>
                            </div>
                            <div className="blog-meta">
                                <h4><a href="tech-single.html" title="">Both blood pressure monitor
                                    and intelligent clock</a></h4>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Tin tức phổ biến</h2>
                    <div className="blog-list-widget">
                        <div className="list-group">
                            <Link to="/news_details"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="w-100 justify-content-between">
                                    <img src="/assets/upload/tech_blog_08.jpg" alt=""
                                         className="img-fluid float-left"/>
                                    <h5 className="mb-1">5 Beautiful buildings you need..</h5>
                                    <small>12 Jan, 2016</small>
                                </div>
                            </Link>

                            <Link to="/news_details"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="w-100 justify-content-between">
                                    <img src="/assets/upload/tech_blog_01.jpg" alt=""
                                         className="img-fluid float-left"/>
                                    <h5 className="mb-1">Let's make an introduction for..</h5>
                                    <small>11 Jan, 2016</small>
                                </div>
                            </Link>

                            <Link to="/news_details"
                               className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="w-100 last-item justify-content-between">
                                    <img src="/assets/upload/tech_blog_03.jpg" alt=""
                                         className="img-fluid float-left"/>
                                    <h5 className="mb-1">Did you see the most beautiful..</h5>
                                    <small>07 Jan, 2016</small>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Follow Us</h2>

                    <div className="row text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button facebook-button">
                                <i className="fa fa-facebook"></i>
                                <p>27k</p>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button twitter-button">
                                <i className="fa fa-twitter"></i>
                                <p>98k</p>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button google-button">
                                <i className="fa fa-google-plus"></i>
                                <p>17k</p>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button youtube-button">
                                <i className="fa fa-youtube"></i>
                                <p>22k</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideContents;