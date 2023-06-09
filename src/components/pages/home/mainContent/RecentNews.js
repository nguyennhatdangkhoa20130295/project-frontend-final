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
            const { contents } = await res.data;
            const feed = new window.DOMParser().parseFromString(contents, "text/xml");
            const items = feed.querySelectorAll("item");
            const feedItems = [...items].map((el) => ({
                link: el.querySelector("link").innerHTML,
                title: el.querySelector("title").innerHTML,
                image: el.querySelector("description").innerHTML.match(/src="([^"]*)"/)[1],

            }));
            setItems(feedItems);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setRssUrl("https://vnexpress.net/rss/the-thao.rss");
        getRss();
    }, []);
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-top clearfix">
                                <h4 className="pull-left">Tin mới nhất <Link to="/"><i className="fa fa-rss"></i></Link></h4>
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
                                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et
                                            pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim
                                            nibh, maximus ac felis nec, maximus tempor odio.</p>
                                        <small className="firstsmall"><a className="bg-orange" title="">Gadgets</a></small>
                                        <small>21 July, 2017</small>
                                        <small>by Matilda</small>
                                        <small><i className="fa fa-eye"></i> 1114</small>
                                    </div>
                                </div>

                                <hr className="invis"/>

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_02.jpg" alt="" className="img-fluid"/>*/}
                                {/*                <div className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">A device you can use both headphones*/}
                                {/*            and usb</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris*/}
                                {/*            et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus*/}
                                {/*            enim nibh, maximus ac felis nec, maximus tempor odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Technology</a></small>*/}
                                {/*        <small>21 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 4412</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_03.jpg" alt=""*/}
                                {/*                     className="img-fluid"/>*/}
                                {/*                <div className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">Two brand new laptop models from*/}
                                {/*            ABC computer</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit.*/}
                                {/*            Mauris et pharetratortor. Suspendissea sodales urna. In at augue*/}
                                {/*            elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor*/}
                                {/*            odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Development</a></small>*/}
                                {/*        <small>20 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 2313</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="row">*/}
                                {/*    <div className="col-lg-10 offset-lg-1">*/}
                                {/*        <div className="banner-spot clearfix">*/}
                                {/*            <div className="banner-img">*/}
                                {/*                <img src="/assets/upload/banner_02.jpg" alt=""*/}
                                {/*                     className="img-fluid"/>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_04.jpg" alt=""*/}
                                {/*                     className="img-fluid"/>*/}
                                {/*                <div className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">Applications for taking*/}
                                {/*            photos of nature in your mobile phones</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula magna non, placerat*/}
                                {/*            elit. Mauris et pharetratortor. Suspendissea sodales urna.*/}
                                {/*            In at augue elit. Vivamus enim nibh, maximus ac felis nec,*/}
                                {/*            maximus tempor odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Design</a></small>*/}
                                {/*        <small>19 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 4441</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_05.jpg" alt=""*/}
                                {/*                     className="img-fluid"/>*/}
                                {/*                <div className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">Say hello to colored*/}
                                {/*            strap models in smart hours</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula magna non,*/}
                                {/*            placerat elit. Mauris et pharetratortor. Suspendissea*/}
                                {/*            sodales urna. In at augue elit. Vivamus enim nibh,*/}
                                {/*            maximus ac felis nec, maximus tempor odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Materials</a></small>*/}
                                {/*        <small>18 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 33312</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_06.jpg" alt=""*/}
                                {/*                     className="img-fluid"/>*/}
                                {/*                <div className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">How about*/}
                                {/*            evaluating your old mobile phones in different*/}
                                {/*            ways?</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula magna non,*/}
                                {/*            placerat elit. Mauris et pharetratortor.*/}
                                {/*            Suspendissea sodales urna. In at augue elit. Vivamus*/}
                                {/*            enim nibh, maximus ac felis nec, maximus tempor*/}
                                {/*            odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Gadgets</a></small>*/}
                                {/*        <small>>17 July, 2017</small>*/}
                                {/*        <small>>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 4440</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_07.jpg" alt=""*/}
                                {/*                     className="img-fluid"/>*/}
                                {/*                <div className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">Drinking*/}
                                {/*            coffee at the computer rests the spirit</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula magna non,*/}
                                {/*            placerat elit. Mauris et pharetratortor.*/}
                                {/*            Suspendissea sodales urna. In at augue elit.*/}
                                {/*            Vivamus enim nibh, maximus ac felis nec, maximus*/}
                                {/*            tempor odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Technology</a></small>*/}
                                {/*        <small>16 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 4412</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_08.jpg"*/}
                                {/*                     alt="" className="img-fluid"/>*/}
                                {/*                <div className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">If you*/}
                                {/*            are considering buying a new safe for your*/}
                                {/*            mobile phone, be sure to read this*/}
                                {/*            article</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula magna*/}
                                {/*            non, placerat elit. Mauris et*/}
                                {/*            pharetratortor. Suspendissea sodales urna.*/}
                                {/*            In at augue elit. Vivamus enim nibh, maximus*/}
                                {/*            ac felis nec, maximus tempor odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Reviews</a></small>*/}
                                {/*        <small>15 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 44123</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img src="/assets/upload/tech_blog_09.jpg"*/}
                                {/*                     alt="" className="img-fluid"/>*/}
                                {/*                <div*/}
                                {/*                    className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">Enjoy*/}
                                {/*            a summer with a colorful headset</Link>*/}
                                {/*        </h4>*/}
                                {/*        <p>Aenean interdum arcu blandit, vehicula*/}
                                {/*            magna non, placerat elit. Mauris et*/}
                                {/*            pharetratortor. Suspendissea sodales*/}
                                {/*            urna. In at augue elit. Vivamus enim*/}
                                {/*            nibh, maximus ac felis nec, maximus*/}
                                {/*            tempor odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Technology</a></small>*/}
                                {/*        <small>14 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 2214</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<hr className="invis"/>*/}

                                {/*<div className="blog-box row">*/}
                                {/*    <div className="col-md-4">*/}
                                {/*        <div className="post-media">*/}
                                {/*            <Link to="/news_details" title="">*/}
                                {/*                <img*/}
                                {/*                    src="/assets/upload/tech_blog_10.jpg"*/}
                                {/*                    alt=""*/}
                                {/*                    className="img-fluid"/>*/}
                                {/*                <div*/}
                                {/*                    className="hovereffect"></div>*/}
                                {/*            </Link>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}

                                {/*    <div*/}
                                {/*        className="blog-meta big-meta col-md-8">*/}
                                {/*        <h4><Link to="/news_details" title="">Google*/}
                                {/*            has developed a brand new algorithm.*/}
                                {/*            Forget all your knowledge!</Link></h4>*/}
                                {/*        <p>Aenean interdum arcu blandit,*/}
                                {/*            vehicula magna non, placerat elit.*/}
                                {/*            Mauris et pharetratortor.*/}
                                {/*            Suspendissea sodales urna. In at*/}
                                {/*            augue elit. Vivamus enim nibh,*/}
                                {/*            maximus ac felis nec, maximus tempor*/}
                                {/*            odio.</p>*/}
                                {/*        <small className="firstsmall"><a className="bg-orange" title="">Gadgets</a></small>*/}
                                {/*        <small>13 July, 2017</small>*/}
                                {/*        <small>by Matilda</small>*/}
                                {/*        <small><i className="fa fa-eye"></i> 3331</small>*/}
                                {/*    </div>*/}
                                {/*</div>*/}


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