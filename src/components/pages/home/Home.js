import React from "react";
import HotNews from "./mainContent/HotNews";
import {TabTitle} from "../../../utils/DynamicTitle";
import RecentNews from "./mainContent/RecentNews";

const Home = () => {
    // Dynamic Title
    TabTitle('THỂ THAO 247 - Tin thể thao, tỷ số & lịch thi đấu mới nhất');

    return (
        <>
            <HotNews/>
            <RecentNews/>

        </>
    );
}
export default Home;