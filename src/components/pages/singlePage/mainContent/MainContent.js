import React from "react";
import SideContents from "../../home/mainContent/SideContents";
import {Link} from "react-router-dom";

const MainContent = () => {
    const numberOfNews = 12;
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <SideContents/>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-grid-system">
                                <div className="row">
                                    {Array.from({ length: numberOfNews }, (_, index) => (
                                        <div key={index} className="col-md-6">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                    <Link to="/news_details" title="">
                                                        <img src="/assets/upload/tech_menu_01.jpg" alt=""
                                                             className="img-fluid"/>
                                                        <div className="hovereffect">
                                                            <span></span>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="blog-meta big-meta">
                                                <span className="color-orange"><Link to="/specific_pages"
                                                                                     title="">Gadgets</Link></span>
                                                    <h4><Link to="/news_details" title="">We visited the ancient theater
                                                        in Macedonia</Link></h4>
                                                    <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit.
                                                        Mauris et pharetratortor. Suspendissea sodales urna. In at augue
                                                        elit. Vivamus enim nibh.</p>
                                                    <small>14 July, 2017</small>
                                                    <small>by Jack</small>
                                                    <small><i className="fa fa-eye"></i> 2887</small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <hr className="invis3"/>

                        <div className="row">
                            <div className="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item"><a className="page-link" href="#"></a>1</li>
                                        <li className="page-item"><a className="page-link" href="#"></a>2</li>
                                        <li className="page-item"><a className="page-link" href="#"></a>3</li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default MainContent;