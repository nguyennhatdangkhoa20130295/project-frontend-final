import React from "react";
import {Link} from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const SideContents = (props) => {

    return (
        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="sidebar">
                <div className="widget">
                    <h2 className="widget-title">Video phổ biến</h2>
                    <div className="trend-videos">
                        <div className="blog-box">
                            <Link to="https://youtu.be/o_R10T59ZPg" title="">
                                <div className="post-media">
                                    <VideoPlayer
                                        source="https://youtu.be/o_R10T59ZPg"
                                        poster="https://i.ytimg.com/vi/o_R10T59ZPg/maxresdefault.jpg"

                                    />
                                    <span className="videohover"></span>
                                </div>
                                <div className="blog-meta">
                                    <h4>HIGHLIGHTS: NAPOLI - AC MILAN | HỎNG ĂN PENALTY CÙNG NHAU VÀ 2 CÁI KẾT KHÁC NHAU
                                        | UCL 22/23</h4>
                                </div>
                            </Link>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <Link to="https://youtu.be/iFAZ-0cm5YU" title="">
                                <div className="post-media">
                                    <VideoPlayer
                                        source="https://youtu.be/iFAZ-0cm5YU"
                                        poster="https://i.ytimg.com/vi/iFAZ-0cm5YU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEzeB4igxS_EEeB-Th54Oup5xLFA"
                                    />
                                    <span className="videohover"></span>
                                </div>
                                <div className="blog-meta">
                                    <h4>HIGHLIGHTS: MAN UNITED - CHELSEA | TẤN CÔNG RỰC LỬA, TẤM VÉ CUỐI CÙNG ĐÃ CÓ CHỦ
                                        | NGOẠI HẠNG ANH 22/23</h4>
                                </div>
                            </Link>
                        </div>

                        <hr className="invis"/>

                        <div className="blog-box">
                            <Link to="https://youtu.be/QV6z8WXGaq4" title="">
                                <div className="post-media">
                                    <VideoPlayer
                                        source="https://youtu.be/QV6z8WXGaq4"
                                        poster="https://i.ytimg.com/vi/QV6z8WXGaq4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADL-uLEnRuK9X3PeDgAEQSxvrU-A"
                                    />
                                    <span className="videohover"></span>
                                </div>
                                <div className="blog-meta">
                                    <h4>HIGHLIGHTS | VIỆT NAM - CAMPUCHIA | BÓNG RỔ NỮ 5x5 | THIÊN ĐƯỜNG CỦA BẮN 3 ĐIỂM
                                        | SEA GAMES 32</h4>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="widget">
                    <h2 className="widget-title">Tin tức phổ biến</h2>
                    <div className="blog-list-widget">
                        {props.data.slice(0, 4).map((item, index) => {
                            const link = item.link.replace('https://thethao247.vn/', '');
                            return (
                                <div key={index} className="list-group">
                                    <Link
                                        to={`/news_details/${encodeURIComponent(props.slug)}/${encodeURIComponent(link)}`}
                                        className="list-group-item list-group-item-action flex-column align-items-start">
                                        <div className="w-100 justify-content-between">
                                            <img src={!item.image ? item.imageUrl : item.image} alt=""
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
                    <h2 className="widget-title">Theo dõi</h2>

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
export default SideContents;
