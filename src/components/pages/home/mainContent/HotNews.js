import React, {useState} from "react";
import Carousel from "../../../common/Carousel";
import PostCard from "../../../common/PostCard";

const HotNews = () => {
    return (
        <section className="section first-section">
            <div className="container-fluid">
                <div className="masonry-blog clearfix">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <PostCard/>
                    </div>
                    <Carousel/>
                </div>
            </div>
        </section>
    )
}
export default HotNews;