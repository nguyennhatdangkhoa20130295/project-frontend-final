import React from "react";
import {Link} from "react-router-dom";
import {findCategoryBySlug} from "./MainContent";
import {categoriesData} from "../../../../category_data/CategoryList";

const PageTitle = ({slug}) => {
    const selectedCategory = findCategoryBySlug(categoriesData, slug);
    console.log(selectedCategory)
    const category = selectedCategory ? selectedCategory.name : '';
    return (
        <div className="page-title lb single-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i className="fa fa-gears bg-orange"></i>{category}</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                            {/*<li className="breadcrumb-item"><Link to="/">{category}</Link></li>*/}
                            <li className="breadcrumb-item active">{category}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageTitle;
