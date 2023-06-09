import React from "react";
import PageTitle from "./mainContent/PageTitle";
import MainContent from "./mainContent/MainContent";
import {TabTitle} from "../../../utils/DynamicTitle";
import {useParams} from "react-router-dom";

const SpecificPage = () => {
    // Dynamic Title
    TabTitle('Specific Page');
    const {category} = useParams();
    return (
        <>
            <PageTitle category={category}/>
            <MainContent/>
        </>
    );
}
export default SpecificPage;