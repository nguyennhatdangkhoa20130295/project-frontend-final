import React from "react";
import HotNews from "./mainContent/HotNews";
import RecentNews from "./mainContent/RecentNews";
import {TabTitle} from "../../../utils/DynamicTitle";
import Rss from "./mainContent/Rss";

const Home = () => {
    // Dynamic Title
    TabTitle('THỂ THAO 247');

    return (
        <>
            <HotNews/>
            <RecentNews/>
            <Rss/>
        </>
    );
}
export default Home;