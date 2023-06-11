import React, {useEffect, useState} from "react";
import SideContents from "./SideContents";
import {Link} from "react-router-dom";
import axios from "axios";

export default function RecentNews() {
    const [rssUrl, setRssUrl] = useState("");
    const [items, setItems] = useState([]);

    const getRss = async () => {
        try {
            const res = await axios.get(`https://api.allorigins.win/get?url=${rssUrl}`);
            const {contents} = await res.data;
            const feed = new window.DOMParser().parseFromString(contents, "text/xml");
            const items = feed.querySelectorAll("item");
            const feedItems = [...items].map((el) => ({
                link: el.querySelector("link").innerHTML,
                title: el.querySelector("title").innerHTML.replace("<![CDATA[", "").replace("]]>", ""),
                image: el.querySelector("description").innerHTML.match(/src="([^"]*)"/)[1],
                description: el.querySelector("description").innerHTML.replace("<![CDATA[", "").replace("]]>", "").replace(/<img[^>]*>/g, "").replace(/<a[^>]*>/g, "").replace(/<\/a>/g, ""),
            }));
            // get 5 items
            feedItems.length = 15;
            setItems(feedItems);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setRssUrl("https://thethao247.vn/bong-da.rss");
    }, []);
    getRss();
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-top clearfix">
                                <h4 className="pull-left">Tin mới nhất <Link to="/"><i className="fa fa-rss"></i></Link>
                                </h4>
                            </div>
                            {/*<RssTest/>*/}
                            {items.map((item) => {
                                return (
                                    <div className="blog-list clearfix">
                                        <div className="blog-box row">
                                            <div className="col-md-4">
                                                <div className="post-media">
                                                    <Link to="" href={item.link} title="">
                                                        <img src={item.image} alt="/" className="img-fluid"/>
                                                        <div className="hovereffect"></div>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="blog-meta big-meta col-md-8">
                                                <h4><Link to={item.link} title="">{item.title}</Link></h4>
                                                <p>{item.description}</p>
                                                <small className="firstsmall"><a className="bg-orange"
                                                                                 title="">Gadgets</a></small>
                                                <small>21 July, 2017</small>
                                                <small>by Matilda</small>
                                                <small><i className="fa fa-eye"></i> 1114</small>
                                            </div>
                                        </div>

                                        <hr className="invis"/>
                                    </div>
                                )
                            })}
                        </div>

                        <hr className="invis"/>

                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><Link className="page-link" to="home#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="home#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="home#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="home#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                    <SideContents/>
                </div>
            </div>
        </section>
    );
};