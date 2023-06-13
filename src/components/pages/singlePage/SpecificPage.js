import React from "react";
import PageTitle from "./mainContent/PageTitle";
import MainContent, {findCategoryBySlug} from "./mainContent/MainContent";
import {TabTitle} from "../../../utils/DynamicTitle";
import {useParams} from "react-router-dom";
import {categoriesData} from "../../../category_data/CategoryList";

const SpecificPage = () => {
    const {slug} = useParams();
    const selectedCategory = findCategoryBySlug(categoriesData, slug);
    const category = selectedCategory ? selectedCategory.name : '';
    // Dynamic Title
    TabTitle(category + ' - Thể Thao 247');

    return (
        <>
            <PageTitle slug={slug}/>
            <MainContent slug={slug}/>
        </>
    );
}
export default SpecificPage;
