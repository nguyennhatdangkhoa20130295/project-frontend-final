import React from "react";
import HotNews from "./mainContent/HotNews";
import RecentNews from "./mainContent/RecentNews";
import {TabTitle} from "../../../utils/DynamicTitle";

const Home = () => {
    // Dynamic Title
    TabTitle('THỂ THAO 247');

    return (
        <>
            <HotNews/>
            <RecentNews/>
        </>
    );
}
export default Home;