import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {categoriesData} from "../../../../category_data/CategoryList";
import RssFeedByCategory from "../../../../rss/RssFeedByCategory";
import "../../singlePage/mainContent/Pagination.css"
import "../../../../rss/Loading.css"
import {useState} from "react";
import ScrollToTop from "../../../common/ScrollToTop";
import SideContentSpecific from "./SideContentSpecific";

export const findCategoryBySlug = (categories, categorySlug, parentCategory = null) => {
    for (const category of categories) {
        if (category.slug === categorySlug) {
            return parentCategory ? {...category, parentCategory} : category;
        } else if (category.subcategories?.length > 0) {
            const subcategory = findCategoryBySlug(category.subcategories, categorySlug, category);
            if (subcategory) {
                return subcategory;
            }
        }
    }
    return null;
};

export const Cover = ({data, slug, category}) => {
    const link = data.link.replace('https://thethao247.vn/', '');
    return (
        <div className="box_top_category col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="cover">
                <Link to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                      className="thumb" title={data.title}><img
                    className=""
                    src={data.imageUrl}
                    width="432" height="286.4"
                    alt={data.title}/></Link>
                <div className="text blog-grid-system blog-meta big-meta">
                    <span className="color-orange"><Link to={`/${encodeURIComponent(slug)}`}
                                                         title="">{category}</Link></span>
                    <h2><Link
                        to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                        className="title" title={data.title}>{data.title}</Link></h2>
                    <p className="sapo">{data.description}</p>
                    <small>{data.pubDate}</small>
                </div>
            </div>
        </div>
    );
}

const MainContent = ({slug}) => {
    const selectedCategory = findCategoryBySlug(categoriesData, slug);

    const category = selectedCategory ? selectedCategory.name : '';
    console.log(slug)
    const {feedData, isLoading} = RssFeedByCategory(slug);
    console.log(feedData);
    const firstNews = feedData[0];
    const remainingNews = feedData.slice(1);

    // Load more
    const [postsPerPage, setPostsPerPage] = useState(6);

    const loadMore = () => {
        setPostsPerPage(postsPerPage + 6);
    }
    const slices = remainingNews.slice(0, postsPerPage);
    const allPostsDisplayed = postsPerPage >= remainingNews.length;

    useEffect(() => {
        if (!isLoading) {
            window.scrollTo(0, 0);
        }
    }, [isLoading]);

    return (<>
            {isLoading ? (<div className="loading"></div>) : (<section className="section">
                <div className="container">
                    <div className="row">
                        {firstNews && <Cover slug={slug} category={category} data={firstNews}/>}
                        <SideContentSpecific slug={slug}/>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="blog-grid-system">
                                    <div className="row">
                                        {slices.map((item, itemIndex) => {
                                            const link = item.link.replace('https://thethao247.vn/', '');
                                            return (<div key={itemIndex} className="col-md-6">
                                                <div className="blog-box">
                                                    <div className="post-media">
                                                        <Link to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                                                              title="">
                                                            <img src={item.imageUrl} alt=""
                                                                 className="img-fluid"/>
                                                            <div className="hovereffect"></div>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-meta big-meta">
                                                        <span className="color-orange"><Link
                                                            to={`/${encodeURIComponent(slug)}`}
                                                            title="">{category}</Link></span>
                                                        <h4><Link
                                                            to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                                                            title="">{item.title}</Link></h4>
                                                        <p>{item.description}</p>
                                                        <small>{item.pubDate}</small>
                                                    </div>
                                                </div>
                                            </div>);
                                        })}
                                    </div>
                                </div>
                            </div>

                            <hr className="invis3"/>

                            <div className="row Pagination">
                                <div className="col-lg-12">
                                    {!allPostsDisplayed && (<button className="btn btn-dark d-block w-20 loadMoreBtn"
                                                                    onClick={() => loadMore()}>Xem thêm</button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollToTop/>
            </section>)}
        </>
    );
}
export default MainContent;
