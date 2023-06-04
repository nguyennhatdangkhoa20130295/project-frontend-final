import React from "react";

const PostCard = () => {
    return (
        <>
                <div className="blog-box row">
                    <div className="col-md-4">
                        <div className="post-media">
                            <a href="tech-single.html" title="">
                                <img src="/assets/upload/tech_blog_01.jpg" alt="" className="img-fluid"/>
                                <div className="hovereffect"></div>
                            </a>
                        </div>
                    </div>

                    <div className="blog-meta big-meta col-md-8">
                        <h4><a href="tech-single.html" title="">Top 10 phone applications and 2017
                            mobile design awards</a></h4>
                        <p>Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et
                            pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim
                            nibh, maximus ac felis nec, maximus tempor odio.</p>
                        <small className="firstsmall"><a className="bg-orange"
                                                         href="tech-category-01.html"
                                                         title="">Gadgets</a></small>
                        <small><a href="tech-single.html" title="">21 July, 2017</a></small>
                        <small><a href="tech-author.html" title="">by Matilda</a></small>
                        <small><a href="tech-single.html" title=""><i
                            className="fa fa-eye"></i> 1114</a></small>
                    </div>
                </div>
                <hr className="invis"/>
        </>
    );
}
export default PostCard;