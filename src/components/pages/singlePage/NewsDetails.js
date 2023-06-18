import React, {useEffect} from "react";
import SideContents from "../home/mainContent/SideContents";
import {Link, useParams} from "react-router-dom";
import {TabTitle} from "../../../utils/DynamicTitle";
import RssNewsDetails from "../../../rss/RssNewsDetails";
import "../singlePage/NewsDetail.css"
import CommentBlog from "../../common/CommentBlog";
import ScrollToTop from "../../common/ScrollToTop";
import {findCategoryBySlug} from "./mainContent/MainContent";
import {categoriesData} from "../../../category_data/CategoryList";
import RssFeedByCategory from "../../../rss/RssFeedByCategory";
import TextToSpeech from "../../common/Speech";

const NewsDetails = () => {
    const {slug, link} = useParams();
    const selectedCategory = findCategoryBySlug(categoriesData, slug);
    const parentCategory = selectedCategory ? selectedCategory.name : '';
    console.log(link);

    const {articleContent, isLoading} = RssNewsDetails(link);
    console.log(articleContent)
    const {feedData, loading} = RssFeedByCategory(slug);

    const randomIndex = Math.floor(Math.random() * feedData.length);
    const suggestList = feedData.slice(randomIndex, randomIndex + 2);

    console.log(feedData)

    // Dynamic Title
    TabTitle(`${articleContent.title}`);

    useEffect(() => {
        if (!isLoading) {
            window.scrollTo(0, 0);
        }
    }, [isLoading]);

    return (
        <>
            {isLoading ? (<div className="loading"></div>) : (<section className="section single-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper detail_article">
                                <div className="blog-title-area">
                                    <ol className="breadcrumb hidden-xs-down">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item"><Link
                                            to={`/${encodeURIComponent(slug === 'trang-chu' ? '' : slug)}`}>{!parentCategory ? 'Thể thao 247' : parentCategory}</Link>
                                        </li>
                                        <li className="breadcrumb-item active">{articleContent.title}</li>
                                    </ol>

                                    <span className="color-orange"><Link
                                        to={`/${encodeURIComponent(slug === 'trang-chu' ? '' : slug)}`}
                                        title="">{!parentCategory ? 'Thể thao 247' : parentCategory}</Link></span>

                                    <h1 className="big_title">{articleContent.title}</h1>

                                    <div className="blog-meta big-meta">
                                        <small>{articleContent.publishedDate}</small>
                                    </div>
                                    <TextToSpeech text={articleContent.content}/>
                                </div>


                                <div className="blog-content">
                                    <div id="content_detail" className="txt_content"
                                         dangerouslySetInnerHTML={{__html: articleContent.content}}></div>
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
                                        {suggestList.map((item, index) => {
                                            const link = item.link.replace('https://thethao247.vn/', '');
                                            return (
                                                <div key={index} className="col-lg-6">
                                                    <div className="blog-box">
                                                        <div className="post-media">
                                                            <Link
                                                                to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                                                                title="">
                                                                <img src={item.imageUrl} alt=""
                                                                     className="img-fluid"/>
                                                                <div className="hovereffect"/>
                                                            </Link>
                                                        </div>
                                                        <div className="blog-meta">
                                                            <h4><Link
                                                                to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                                                                title="">{item.title}</Link></h4>
                                                            <small>{item.pubDate}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <hr className="invis1"/>
                                <CommentBlog/>
                            </div>
                        </div>
                        <SideContents data={feedData} slug={slug}/>
                    </div>
                </div>
                <ScrollToTop/>
            </section>)}
        </>
    )
}
export default NewsDetails;
