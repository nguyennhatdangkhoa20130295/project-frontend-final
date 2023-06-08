import React from "react";
import SideContents from "../home/mainContent/SideContents";
import {Link} from "react-router-dom";
import {TabTitle} from "../../../utils/DynamicTitle";

const NewsDetails = () => {
    // Dynamic Title
    TabTitle('Chi tiết bài báo');

    return (
        <>
            <section className="section single-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            <div className="page-wrapper">
                                <div className="blog-title-area text-center">
                                    <ol className="breadcrumb hidden-xs-down">
                                        <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                                        <li className="breadcrumb-item"><a href="#">Blog</a></li>
                                        <li className="breadcrumb-item active">Top 10 phone applications and 2017 mobile
                                            design awards
                                        </li>
                                    </ol>

                                    <span className="color-orange"><a title="">Technology</a></span>

                                    <h3>Top 10 phone applications and 2017 mobile design awards</h3>

                                    <div className="blog-meta big-meta">
                                        <small>21 July, 2017</small>
                                        <small>by Jessica</small>
                                        <small><i className="fa fa-eye"></i> 2344</small>
                                    </div>

                                    <div className="post-sharing">
                                        <ul className="list-inline">
                                            <li><a href="#" className="fb-button btn btn-primary"><i
                                                className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></a>
                                            </li>
                                            <li><a href="#" className="tw-button btn btn-primary"><i
                                                className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span></a>
                                            </li>
                                            <li><a href="#" className="gp-button btn btn-primary"><i
                                                className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="single-post-media">
                                    <img src="/assets/upload/tech_menu_08.jpg" alt="" className="img-fluid"/>
                                </div>

                                <div className="blog-content">
                                    <div className="pp">
                                        <p>In lobortis pharetra mattis. Morbi nec nibh iaculis, <a href="#">bibendum
                                            augue a</a>, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget,
                                            faucibus nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis
                                            commodo lacus. Duis consectetur quis nisi nec accumsan. Pellentesque enim
                                            velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis
                                            at nunc ac, rhoncus sagittis ipsum. </p>

                                        <h3><strong>Maecenas non convallis quam, eu sodales justo. Pellentesque quis
                                            lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit.</strong></h3>

                                        <p>Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam
                                            iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet
                                            feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis
                                            eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et
                                            lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est.
                                            Nunc et nisl vel odio posuere. </p>

                                        <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est
                                            vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at
                                            nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla
                                            finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut
                                            tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante.
                                            Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa.
                                            Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl
                                            massa nunc. </p>

                                    </div>

                                    <img src="/assets/upload/tech_menu_09.jpg" alt="" className="img-fluid img-fullwidth"/>

                                    <div className="pp">
                                        <h3><strong>Nam non velit est. Sed lobortis arcu vitae nunc molestie
                                            consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et
                                            nisl vel odio posuere. </strong></h3>

                                        <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est
                                            vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at
                                            nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla
                                            finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin
                                            ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales
                                            non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim
                                            massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et
                                            hendrerit nisl massa nunc. </p>

                                        <p>Morbi pharetra porta consequat. Aenean et diam sapien. <a href="#">Interdum
                                            et malesuada</a> fames ac ante ipsum primis in faucibus. Pellentesque
                                            dictum ligula iaculis, feugiat metus eu, sollicitudin ex. Quisque eu
                                            ullamcorper ligula. In vel ex ac purus finibus viverra. Maecenas pretium
                                            lobortis turpis. Fusce lacinia nisi in tortor massa nunc.</p>

                                        <ul className="check">
                                            <li>Integer sit amet odio ac lectus imperdiet elementum.</li>
                                            <li>Praesent vitae lacus sed lacus ullamcorper mollis.</li>
                                            <li>Donec vitae metus ac felis vulputate tincidunt non et ex.</li>
                                            <li>In dapibus sapien at viverra venenatis.</li>
                                            <li>Pellentesque mollis velit id maximus finibus.</li>
                                        </ul>

                                        <p>Proin ultricies nulla consectetur, sollicitudin dolor at, sollicitudin
                                            mauris. Maecenas at nunc nunc. Ut nulla felis, tincidunt et porttitor
                                            at, rutrum in dolor. Aenean id tincidunt ligula. Donec vitae placerat
                                            odio. Mauris accumsan nibh ut nunc maximus, ac auctor elit vehicula.
                                            Cras leo sem, vehicula a ultricies ac, condimentum vitae lectus. Sed ut
                                            eros euismod, luctus nisl eu, congue odio. </p>

                                        <p><img src="/assets/upload/tech_menu_10.jpg" className="float-left" width="380"
                                                alt=""/>Suspendisse ultrices placerat dolor sed efficitur. Morbi in
                                            laoreet diam. Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Mauris ut massa id lectus laoreet
                                            porta non in metus. Donec nibh justo, tincidunt non justo ut, tincidunt
                                            malesuada turpis. Cras pellentesque sollicitudin ex eget pharetra.rta
                                            non in metus. Donec nibh justo, tincidunt non justo ut, tincidunt
                                            malesuada turpis. Cras pellentesque sollicitudin ex eget pharetra.</p>

                                        <h3><strong>Nam non velit est. Sed lobortis arcu vitae nunc molestie
                                            consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et
                                            nisl vel odio posuere. </strong></h3>


                                        <p>Aliquam eget maximus odio. Aliquam varius nisl ut leo fermentum, id
                                            fringilla magna tempus. Curabitur quis bibendum lorem, ut suscipit
                                            tellus. Morbi id dictum justo, et massa nunc. Mauris laoreet, neque et
                                            varius malesuada, justo neque consequat dolor, sit amet semper dui
                                            ligula commodo enim. Duis mauris magna, euismod in ante sed, laoreet
                                            faucibus elit. Nam euismod vulputate lorem, nec tincidunt lacus volutpat
                                            sit amet. In libero eros, dignissim vitae quam sed, maximus consectetur
                                            justo. Donec id orci eget odio convallis pellentesque. Quisque urna cras
                                            amet.Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet
                                            est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit,
                                            suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque
                                            sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices
                                            posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis
                                            et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam
                                            eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna.
                                            Aliquam et hendrerit nisl massa nunc. </p>

                                        <p><img src="/assets/upload/tech_menu_11.jpg" className="float-right" width="380"
                                                alt=""/>Suspendisse ultrices placerat dolor sed efficitur. Morbi in
                                            laoreet diam. Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Mauris ut massa id lectus laoreet
                                            porta non in metus. Donec nibh justo, tincidunt non justo ut, tincidunt
                                            malesuada turpis. Cras pellentesque sollicitudin ex eget pharetra.rta
                                            non in metus. Donec nibh justo, tincidunt non justo ut, tincidunt
                                            malesuada turpis. Cras pellentesque sollicitudin ex eget pharetra.</p>

                                        <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est
                                            vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at
                                            nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla
                                            finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin
                                            ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales
                                            non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim
                                            massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et
                                            hendrerit nisl massa nunc. </p>
                                    </div>
                                </div>

                                <div className="blog-title-area">
                                    <div className="tag-cloud-single">
                                        <span>Tags</span>
                                        <small><a href="#" title="">lifestyle</a></small>
                                        <small><a href="#" title="">colorful</a></small>
                                        <small><a href="#" title="">trending</a></small>
                                        <small><a href="#" title="">another tag</a></small>
                                    </div>

                                    <div className="post-sharing">
                                        <ul className="list-inline">
                                            <li><a href="#" className="fb-button btn btn-primary"><i
                                                className="fa fa-facebook"></i> <span className="down-mobile">Share on Facebook</span></a>
                                            </li>
                                            <li><a href="#" className="tw-button btn btn-primary"><i
                                                className="fa fa-twitter"></i> <span className="down-mobile">Tweet on Twitter</span></a>
                                            </li>
                                            <li><a href="#" className="gp-button btn btn-primary"><i
                                                className="fa fa-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner-spot clearfix">
                                            <div className="banner-img">
                                                <img src="/assets/upload/banner_01.jpg" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="invis1"/>

                                <div className="custombox prevnextpost clearfix">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="blog-list-widget">
                                                <div className="list-group">
                                                    <a href="tech-single.html"
                                                       className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 justify-content-between text-right">
                                                            <img src="/assets/upload/tech_menu_19.jpg" alt=""
                                                                 className="img-fluid float-right"/>
                                                            <h5 className="mb-1">5 Beautiful buildings you need
                                                                to before dying</h5>
                                                            <small>Prev Post</small>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="blog-list-widget">
                                                <div className="list-group">
                                                    <a href="tech-single.html"
                                                       className="list-group-item list-group-item-action flex-column align-items-start">
                                                        <div className="w-100 justify-content-between">
                                                            <img src="/assets/upload/tech_menu_20.jpg" alt=""
                                                                 className="img-fluid float-left"/>
                                                            <h5 className="mb-1">Let's make an introduction to
                                                                the glorious world of history</h5>
                                                            <small>Next Post</small>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="invis1"/>

                                <div className="custombox authorbox clearfix">
                                    <h4 className="small-title">About author</h4>
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                            <img src="/assets/upload/author.jpg" alt=""
                                                 className="img-fluid rounded-circle"/>
                                        </div>

                                        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                            <h4><a href="#">Jessica</a></h4>
                                            <p>Quisque sed tristique felis. Lorem <a href="#">visit my
                                                website</a> amet, consectetur adipiscing elit. Phasellus quis mi
                                                auctor, tincidunt nisl eget, finibus odio. Duis tempus elit quis
                                                risus congue feugiat. Thanks for stop Tech Blog!</p>

                                            <div className="topsocial">
                                                <a href="#" data-toggle="tooltip" data-placement="bottom"
                                                   title="Facebook"><i className="fa fa-facebook"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom"
                                                   title="Youtube"><i className="fa fa-youtube"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom"
                                                   title="Pinterest"><i className="fa fa-pinterest"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom"
                                                   title="Twitter"><i className="fa fa-twitter"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom"
                                                   title="Instagram"><i className="fa fa-instagram"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom"
                                                   title="Website"><i className="fa fa-link"></i></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <hr className="invis1"/>

                                <div className="custombox clearfix">
                                    <h4 className="small-title">You may also like</h4>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                    <a href="tech-single.html" title="">
                                                        <img src="/assets/upload/tech_menu_04.jpg" alt=""
                                                             className="img-fluid"/>
                                                        <div className="hovereffect">
                                                            <span className=""></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="blog-meta">
                                                    <h4><a href="tech-single.html" title="">We are guests of
                                                        ABC Design Studio</a></h4>
                                                    <small><a href="blog-category-01.html"
                                                              title="">Trends</a></small>
                                                    <small><a href="blog-category-01.html" title="">21 July,
                                                        2017</a></small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="blog-box">
                                                <div className="post-media">
                                                    <a href="tech-single.html" title="">
                                                        <img src="/assets/upload/tech_menu_06.jpg" alt=""
                                                             className="img-fluid"/>
                                                        <div className="hovereffect">
                                                            <span className=""></span>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="blog-meta">
                                                    <h4><a href="tech-single.html" title="">Nostalgia at
                                                        work with family</a></h4>
                                                    <small><a href="blog-category-01.html" title="">News</a></small>
                                                    <small><a href="blog-category-01.html" title="">20 July,
                                                        2017</a></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="invis1"/>

                                <div className="custombox clearfix">
                                    <h4 className="small-title">3 Comments</h4>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="comments-list">
                                                <div className="media">
                                                    <a className="media-left" href="#">
                                                        <img src="/assets/upload/author.jpg" alt=""
                                                             className="rounded-circle"/>
                                                    </a>
                                                    <div className="media-body">
                                                        <h4 className="media-heading user_name">Amanda
                                                            Martines <small>5 days ago</small></h4>
                                                        <p>Exercitation photo booth stumptown tote bag
                                                            Banksy, elit small batch freegan sed. Craft
                                                            beer elit seitan exercitation, photo booth
                                                            et 8-bit kale chips proident chillwave deep
                                                            v laborum. Aliquip veniam delectus, Marfa
                                                            eiusmod Pinterest in do umami readymade
                                                            swag. Selfies iPhone Kickstarter, drinking
                                                            vinegar jean.</p>
                                                        <a href="#"
                                                           className="btn btn-primary btn-sm">Reply</a>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <a className="media-left" href="#">
                                                        <img src="/assets/upload/author_01.jpg" alt=""
                                                             className="rounded-circle"/>
                                                    </a>
                                                    <div className="media-body">

                                                        <h4 className="media-heading user_name">Baltej
                                                            Singh <small>5 days ago</small></h4>

                                                        <p>Drinking vinegar stumptown yr pop-up artisan
                                                            sunt. Deep v cliche lomo biodiesel Neutra
                                                            selfies. Shorts fixie consequat flexitarian
                                                            four loko tempor duis single-origin coffee.
                                                            Banksy, elit small.</p>

                                                        <a href="#"
                                                           className="btn btn-primary btn-sm">Reply</a>
                                                    </div>
                                                </div>
                                                <div className="media last-child">
                                                    <a className="media-left" href="#">
                                                        <img src="/assets/upload/author_02.jpg" alt=""
                                                             className="rounded-circle"/>
                                                    </a>
                                                    <div className="media-body">

                                                        <h4 className="media-heading user_name">Marie
                                                            Johnson <small>5 days ago</small></h4>
                                                        <p>Kickstarter seitan retro. Drinking vinegar
                                                            stumptown yr pop-up artisan sunt. Deep v
                                                            cliche lomo biodiesel Neutra selfies. Shorts
                                                            fixie consequat flexitarian four loko tempor
                                                            duis single-origin coffee. Banksy, elit
                                                            small.</p>

                                                        <a href="#"
                                                           className="btn btn-primary btn-sm">Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="invis1"/>

                                <div className="custombox clearfix">
                                    <h4 className="small-title">Leave a Reply</h4>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form className="form-wrapper">
                                                <input type="text" className="form-control"
                                                       placeholder="Your name"/>
                                                <input type="text" className="form-control"
                                                       placeholder="Email address"/>
                                                <input type="text" className="form-control"
                                                       placeholder="Website"/>
                                                <textarea className="form-control"
                                                          placeholder="Your comment"></textarea>
                                                <button type="submit"
                                                        className="btn btn-primary">Submit
                                                    Comment
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SideContents/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default NewsDetails;