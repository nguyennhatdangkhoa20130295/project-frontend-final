import React from "react";
import {Link} from "react-router-dom";
import {categoriesData} from "../../../../category_data/CategoryList";
import RssFeedByCategory from "../../../../rss/RssFeedByCategory";

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

const SideContentSpecific = ({category}) =>{
    const categories = categoriesData;

    const selectedCategory = findCategoryBySlug(categories, category);

    const slug = selectedCategory ? selectedCategory.slug : '';
    const feedData = RssFeedByCategory(slug);

    const reversedData = feedData.reverse();
    const slicedData = reversedData.slice(0, 4);
    const finalData = slicedData.reverse();

    return(
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">

                <div className="widget">
                    <h2 className="widget-title">Cùng chuyên mục</h2>
                    <div className="trend-videos">
                        <div className="blog-list-widget">
                            {feedData.slice(0, 3).map((item, itemIndex) => {
                                return (
                                    <div key={itemIndex} className="list-group">
                                        <Link to="/news_details"
                                              className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src={item.imageUrl} alt=""
                                                     className="img-fluid float-left"/>
                                                <h5 className="mb-1">{item.title}</h5>
                                                <small>{item.pubDate}</small>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>

                        <hr className="invis"/>

                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Tin tức phổ biến</h2>
                    <div className="blog-list-widget">
                        {finalData.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className="list-group">
                                    <Link to="/news_details"
                                          className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={item.imageUrl} alt=""
                                                 className="img-fluid float-left"/>
                                            <h5 className="mb-1">{item.title}</h5>
                                            <small>{item.pubDate}</small>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Follow Us</h2>

                    <div className="row text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <a href="home#" className="social-button facebook-button">
                                <i className="fa fa-facebook"></i>
                                <p>27k</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <a href="home#" className="social-button twitter-button">
                                <i className="fa fa-twitter"></i>
                                <p>98k</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <a href="home#" className="social-button google-button">
                                <i className="fa fa-google-plus"></i>
                                <p>17k</p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <a href="home#" className="social-button youtube-button">
                                <i className="fa fa-youtube"></i>
                                <p>22k</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideContentSpecific;