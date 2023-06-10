import React from "react";
import SideContents from "../../home/mainContent/SideContents";
import {Link} from "react-router-dom";
import {categoriesData} from "../../../../category_data/CategoryList";
import RssFeedByCategory from "../../../../rss/RssFeedByCategory";
import "../../singlePage/mainContent/Pagination.css"
import { useState } from "react";

const findCategoryBySlug = (categories, categoryName) => {
    for (const category of categories) {
        if (category.name === categoryName) {
            return category;
        } else if (category.subcategories?.length > 0) {
            const subcategory = findCategoryBySlug(category.subcategories, categoryName);
            if (subcategory) {
                return subcategory;
            }
        }
    }
    return null;
};

const MainContent = ({category}) => {
    console.log(category)
    const categories = categoriesData;

    const selectedCategory = findCategoryBySlug(categories, category);

    const slug = selectedCategory ? selectedCategory.slug : '';
    console.log(slug)
    const feedData = RssFeedByCategory(slug);
    console.log(feedData);

    // Load more
    const [postsPerPage, setPostsPerPage] = useState(6);
    const loadMore = () => {
        setPostsPerPage(postsPerPage + postsPerPage);
    }
    const slices = feedData.slice(0, postsPerPage);

    return (<>
            <section className="section">
                <div className="container">
                    <div className="row">
                        {/*<Cover/>*/}
                        <SideContents/>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="blog-grid-system">
                                    <div className="row">
                                        {slices.map((item, itemIndex) => {
                                            return (<div key={itemIndex} className="col-md-6">
                                                <div className="blog-box">
                                                    <div className="post-media">
                                                        <Link to={item.link} title="">
                                                            <img src={item.imageUrl} alt=""
                                                                 className="img-fluid"/>
                                                            <div className="hovereffect"></div>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-meta big-meta">
                                                <span className="color-orange"><Link to={`/category/${encodeURIComponent(category)}`}
                                                                                     title="">{category}</Link></span>
                                                        <h4><Link to='/news_details' title="">{item.title}</Link></h4>
                                                        <p>{item.description}</p>
                                                        <small><Link to='/news_details'
                                                                     title="">{item.pubDate}</Link></small>
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
                                   <button className="btn btn-dark d-block w-20 loadMoreBtn"
                                   onClick={() => loadMore()}>
                                    Xem thêm
                                   </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default MainContent;