import React from "react";
import SideContents from "../home/mainContent/SideContents";
import {Link, useParams} from "react-router-dom";
import {TabTitle} from "../../../utils/DynamicTitle";
import RssNewsDetails from "../../../rss/RssNewsDetails";
import "../singlePage/NewsDetail.css"
import CommentBlog from "../../common/CommentBlog";
import ScrollToTop from "../../common/ScrollToTop";

const NewsDetails = () => {
    const {link} = useParams();
    console.log(link)
    // Dynamic Title
    TabTitle('Chi tiết bài báo');
    const data = RssNewsDetails(link);

    return (
        <>
            <section className="section single-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper detail_article">
                                <div className="blog-title-area">
                                    <ol className="breadcrumb hidden-xs-down">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Thể thao</Link></li>
                                        <li className="breadcrumb-item active">{data.title}</li>
                                    </ol>

                                    <span className="color-orange"><Link to="#" title="">Thể thao</Link></span>

                                    <h1 className="big_title">{data.title}</h1>

                                    <div className="blog-meta big-meta">
                                        <small>{data.publishedDate}</small>
                                    </div>

                                </div>

                                <div className="blog-content">
                                    <div id="content_detail" className="txt_content"
                                         dangerouslySetInnerHTML={{__html: data.content}}></div>
                                </div>

                                <div className="blog-title-area">
                                    <div className="post-sharing">
                                        <ul className="list-inline">
                                            <li><Link to="#" className="fb-button btn btn-primary"><i
                                                className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></Link>
                                            </li>
                                            <li><Link to="#" className="tw-button btn btn-primary"><i
                                                className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span></Link>
                                            </li>
                                            <li><Link to="#" className="gp-button btn btn-primary"><i
                                                className="fa fa-google-plus"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <hr className="invis1"/>

                                <div className="custombox clearfix">
                                    <h4 className="small-title">Có thể bạn quan tâm</h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                    <Link to="/news_details" title="">
                                                        <img src="/assets/upload/tech_menu_04.jpg" alt=""
                                                             className="img-fluid"/>
                                                        <div className="hovereffect">
                                                            <span className=""></span>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="blog-meta">
                                                    <h4><Link to="/news_details" title="">We are guests of
                                                        ABC Design Studio</Link></h4>
                                                    <small><a href="blog-category-01.html"
                                                              title="">Trends</a></small>
                                                    <small><a href="blog-category-01.html" title="">21 July,
                                                        2017</a></small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                    <a href="tech-single.html" title="">
                                                        <img src="/assets/upload/tech_menu_06.jpg" alt=""
                                                             className="img-fluid"/>
                                                        <div className="hovereffect">
                                                            <span className=""></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="blog-meta">
                                                    <h4><a href="tech-single.html" title="">Nostalgia at
                                                        work with family</a></h4>
                                                    <small><a href="blog-category-01.html" title="">News</a></small>
                                                    <small><a href="blog-category-01.html" title="">20 July,
                                                        2017</a></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="invis1"/>
                                <CommentBlog/>
                            </div>
                        </div>
                        {/*<SideContents/>*/}
                    </div>
                </div>
                <ScrollToTop/>
            </section>
        </>
    )
}
export default NewsDetails;
