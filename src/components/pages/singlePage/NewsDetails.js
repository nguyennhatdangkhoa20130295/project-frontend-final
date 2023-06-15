import React from "react";
import SideContents from "../home/mainContent/SideContents";
import {Link, useParams} from "react-router-dom";
import {TabTitle} from "../../../utils/DynamicTitle";
import RssNewsDetails from "../../../rss/RssNewsDetails";
import "../singlePage/NewsDetail.css"
import CommentBlog from "../../common/CommentBlog";
import ScrollToTop from "../../common/ScrollToTop";
import {findCategoryBySlug} from "./mainContent/MainContent";
import {categoriesData} from "../../../category_data/CategoryList";
import SpeechNews from "../../common/SpeechNews";
import Speech from "react-speech";

const NewsDetails = () => {
    const {slug, link} = useParams();
    const selectedCategory = findCategoryBySlug(categoriesData, slug);
    const parentCategory = selectedCategory ? selectedCategory.name :
        console.log(link)
    const data = RssNewsDetails(link);

    // Dynamic Title
    TabTitle(`${data.title}`);

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
                                        <li className="breadcrumb-item"><Link to="#">{parentCategory}</Link></li>
                                        <li className="breadcrumb-item active">{data.title}</li>
                                    </ol>

                                    <span className="color-orange"><Link to={`/category/${slug}`}
                                                                         title="">{parentCategory}</Link></span>

                                    <h1 className="big_title">{data.title}</h1>

                                    <div className="blog-meta big-meta">
                                        <small>{data.publishedDate}</small>
                                    </div>
                                    <SpeechNews news={data.content}/>
                                </div>


                                <div className="blog-content">
                                    <div id="content_detail" className="txt_content"
                                         dangerouslySetInnerHTML={{__html: data.content}}></div>
                                </div>

                                <div className="blog-title-area">
                                    <div className="post-sharing">
                                        <ul className="list-inline">
                                            <li>
                                                <div className="fb-share-button"
                                                     data-href="https://developers.facebook.com/docs/plugins/"
                                                     data-layout="" data-size="">
                                                    <a target="_blank"
                                                       href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                                                       className="fb-button btn btn-primary"><i
                                                        className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></a>
                                                </div>
                                            </li>
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
                                                        <div className="hovereffect"/>
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
                                                        <div className="hovereffect"/>
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
