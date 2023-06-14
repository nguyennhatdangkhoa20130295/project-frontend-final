import React from "react";
import {Link, useParams} from "react-router-dom";
import {TabTitle} from "../../../utils/DynamicTitle";
import RssNewsDetails from "../../../rss/RssNewsDetails";
import "../singlePage/NewsDetail.css"
import CommentBlog from "../../common/CommentBlog";
import ScrollToTop from "../../common/ScrollToTop";
import RelativeNews from "./RelativeNews";
import SideContentDetail from "./mainContent/SideContentDetail";

const NewsDetails = () => {
    const {link} = useParams();
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
                                            <li>
                                                <div className="fb-share-button"
                                                     data-href="https://developers.facebook.com/docs/plugins/"
                                                     data-layout="" data-size="">
                                                    <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-button btn btn-primary"><i
                                                        className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <hr className="invis1"/>
                                <RelativeNews slug="bong-da"/>
                                <hr className="invis1"/>
                                <CommentBlog/>
                            </div>
                        </div>
                        <SideContentDetail slug="bong-da"/>
                    </div>
                </div>
                <ScrollToTop/>
            </section>
        </>
    )
}
export default NewsDetails;
