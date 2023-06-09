import React from "react";
import HotNews from "./mainContent/HotNews";
import {TabTitle} from "../../../utils/DynamicTitle";
import Rss from "./mainContent/Rss";
import RssTest from "./mainContent/RssTest";
import RecentNews from "./mainContent/RecentNews";

const Home = () => {
    // Dynamic Title
    TabTitle('THỂ THAO 247');

    return (
        <>
            <HotNews/>
            <RecentNews/>
            {/*<Rss/>*/}
            <RssTest/>
        </>
    );
}
export default Home;