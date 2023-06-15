import React from "react";
import {categoriesData} from "../../../category_data/CategoryList";
import RssFeedByCategory from "../../../rss/RssFeedByCategory";
import {Link} from "react-router-dom";

const findCategoryBySlug = (categories, categoryName) => {
    for (const category of categories) {
        if (category.slug === categoryName) {
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

const RelativeNews = ({slug}) => {
    const categories = categoriesData;

    const selectedCategory = findCategoryBySlug(categories, slug);

    const category = selectedCategory ? selectedCategory.name : '';
    const feedData = RssFeedByCategory(slug);

    return (
        <div className="custombox clearfix">
            <h4 className="small-title">Có thể bạn quan tâm</h4>
            <div className="row">
                <div className="col-lg-6">
                    {feedData.slice(0, 2).map((item, index) => {
                        const link = item.link.replace('https://thethao247.vn/', '');
                        return (
                            <div key={index} className="blog-box">
                                <Link to={`/news_details/${encodeURIComponent(link)}`} title="">
                                    <div className="post-media">
                                        <img src={item.imageUrl} alt={item.title}
                                             className="img-fluid"/>
                                        <div className="hovereffect"/>
                                    </div>
                                    <div className="blog-meta">
                                        <h4>{item.title}</h4>
                                        <small>{item.pubDate}</small>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="col-lg-6">
                    {feedData.slice(2, 4).map((item, index) => {
                        const link = item.link.replace('https://thethao247.vn/', '');
                        return (
                            <div key={index} className="blog-box">
                                <Link to={`/news_details/${encodeURIComponent(link)}`} title="">
                                    <div className="post-media">
                                        <img src={item.imageUrl} alt={item.title}
                                             className="img-fluid"/>
                                        <div className="hovereffect"/>
                                    </div>
                                    <div className="blog-meta">
                                        <h4>{item.title}</h4>
                                        <small>{item.pubDate}</small>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default RelativeNews;