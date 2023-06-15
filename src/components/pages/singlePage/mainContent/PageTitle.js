import React from "react";
import {Link} from "react-router-dom";
import {findCategoryBySlug} from "./MainContent";
import {categoriesData} from "../../../../category_data/CategoryList";

const buildBreadcrumb = (category) => {
    if (!category) {
        return null;
    }

    const breadcrumbItems = [];

    // Xây dựng breadcrumb cho danh mục cha
    if (category.parentCategory) {
        const parentBreadcrumb = buildBreadcrumb(category.parentCategory);
        if (parentBreadcrumb) {
            breadcrumbItems.push(
                <li key={category.parentCategory} className="breadcrumb-item"><Link to={`/category/${category.parentCategory.slug}`}>{category.parentCategory.name}</Link></li>
            );
        }
    }

    // Thêm danh mục con vào breadcrumb
    breadcrumbItems.push(
        <li key={category.slug} className="breadcrumb-item active">
            {category.name}
        </li>
    );

    return breadcrumbItems;
};
const PageTitle = ({slug}) => {
    const selectedCategory = findCategoryBySlug(categoriesData, slug);
    console.log(selectedCategory)
    const category = selectedCategory ? selectedCategory.name : '';
    const breadcrumb = buildBreadcrumb(selectedCategory);
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
                            {breadcrumb}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageTitle;
