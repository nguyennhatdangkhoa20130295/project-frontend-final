import React from "react";
import {Link} from "react-router-dom";
import RssFeedByCategory from "../../../../rss/RssFeedByCategory";

const SideContentSpecific = ({slug}) => {

    const {feedData, isLoading} = RssFeedByCategory(slug);

    const reversedData = feedData.reverse();
    const slicedData = reversedData.slice(11, 15);
    const finalData = slicedData.reverse();

    return (
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">

                <div className="widget">
                    <h2 className="widget-title">Cùng chuyên mục</h2>
                    <div className="trend-videos">
                        <div className="blog-list-widget">
                            {finalData.map((item, itemIndex) => {
                                const link = item.link.replace('https://thethao247.vn/', '');
                                return (
                                    <div key={itemIndex} className="list-group">
                                        <Link
                                            to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                                            className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src={item.imageUrl} alt=""
                                                     className="img-fluid float-left"/>
                                                <h5 className="mb-1">{item.title}</h5>
                                                <small>{item.pubDate}</small>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>

                        <hr className="invis"/>

                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Tin tức phổ biến</h2>
                    <div className="blog-list-widget">
                        {feedData.slice(0, 3).map((item, itemIndex) => {
                            const link = item.link.replace('https://thethao247.vn/', '');
                            return (
                                <div key={itemIndex} className="list-group">
                                    <Link to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                                          className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={item.imageUrl} alt=""
                                                 className="img-fluid float-left"/>
                                            <h5 className="mb-1">{item.title}</h5>
                                            <small>{item.pubDate}</small>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Follow Us</h2>

                    <div className="row text-center">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button facebook-button">
                                <i className="fa fa-facebook"></i>
                                <p>27k</p>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button twitter-button">
                                <i className="fa fa-twitter"></i>
                                <p>98k</p>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button google-button">
                                <i className="fa fa-google-plus"></i>
                                <p>17k</p>
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                            <Link to="#" className="social-button youtube-button">
                                <i className="fa fa-youtube"></i>
                                <p>22k</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideContentSpecific;
