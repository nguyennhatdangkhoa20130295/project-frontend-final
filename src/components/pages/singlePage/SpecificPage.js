import React from "react";
import PageTitle from "./mainContent/PageTitle";
import MainContent from "./mainContent/MainContent";
import {TabTitle} from "../../../utils/DynamicTitle";
const SpecificPage = () =>{
    // Dynamic Title
    TabTitle('Specific Page');

    return(
      <>
          <PageTitle/>
          <MainContent/>
      </>
    );
}
export default SpecificPage;