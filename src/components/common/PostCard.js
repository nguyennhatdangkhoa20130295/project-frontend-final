import React from "react";
import { Link } from "react-router-dom";

const PostCard = () => {
    return (
        <>
                <div className="blog-box row">
                    <div className="col-md-4">
                        <div className="post-media">
                            <Link to="/news_details" title="">
                                <img src="/assets/upload/tech_blog_01.jpg" alt="" className="img-fluid"/>
                                <div className="hovereffect"/>
                            </Link>
                        </div>
                    </div>

                    <div className="blog-meta big-meta col-md-8">
                        <h4><Link to="/news_details" title="">Top 10 phone applications and 2017
                            mobile design awards</Link></h4>
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
        </>
    );
}
export default PostCard;