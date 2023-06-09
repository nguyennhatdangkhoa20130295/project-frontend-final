import React from "react";
import PageTitle from "./mainContent/PageTitle";
import MainContent from "./mainContent/MainContent";
import {TabTitle} from "../../../utils/DynamicTitle";
import {useParams} from "react-router-dom";

const SpecificPage = () => {
    const {category} = useParams();
    // Dynamic Title
    TabTitle(category  + ' - Thể Thao 247');
    
    return (
        <>
            <PageTitle category={category}/>
            <MainContent/>
        </>
    );
}
export default SpecificPage;