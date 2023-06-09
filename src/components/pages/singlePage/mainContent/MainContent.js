import React from "react";
import SideContents from "../../home/mainContent/SideContents";
import {Link} from "react-router-dom";

export const Cover = () => {
    return (
        <div className="box_top_category col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="cover">
                <a href="https://thethao247.vn/414-bxh-bong-chuyen-the-gioi-vnl-2023-moi-nhat-dai-dien-chau-a-xep-so-1-d288401.html"
                   className="thumb" title="BXH bóng chuyền thế giới VNL 2023 mới nhất: Châu Á giữ ngôi số 1"><img
                    className=""
                    src="https://cdn-img.thethao247.vn/resize_1080x716/storage/files/nhuy/2023/05/31/bxh-bong-chuyen-the-gioi-vnl-2023-moi-nhat-dai-dien-chau-a-xep-so-1-286508.jpg"
                    width="540" height="358"
                    alt="BXH bóng chuyền thế giới VNL 2023 mới nhất: Châu Á giữ ngôi số 1"/></a>
                <div className="text">
                    <div className="is_mobile">
                        <a href="https://thethao247.vn/bong-chuyen-c45/" className="title_cat" title="Bóng chuyền">Bóng
                            chuyền</a></div>
                    <h2><a
                        href="https://thethao247.vn/414-bxh-bong-chuyen-the-gioi-vnl-2023-moi-nhat-dai-dien-chau-a-xep-so-1-d288401.html"
                        className="title" title="BXH bóng chuyền thế giới VNL 2023 mới nhất: Châu Á giữ ngôi số 1">BXH
                        bóng chuyền thế giới VNL 2023 mới nhất: Châu Á giữ ngôi số 1</a></h2> <p className="sapo">
                    (BXH bóng chuyền) - Cập nhật BXH giải bóng chuyền các quốc gia thế giới - Volleyball Nations League
                    2023 diễn ra từ ngày 30/5 đến 23/7 ở cả hai nội dung nam, nữ mới nhất và chính xác nhất. </p>
                </div>
            </div>
        </div>
    );
}

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
                </div>
            </div>
        </section>
    );
}
export default MainContent;