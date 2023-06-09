import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="widget">
                            <div className="footer-text text-left">
                                <a href="index.html"><img src="images/version/tech-footer-logo.png" alt=""
                                                          className="img-fluid"/></a>
                                <p>Thể thao 247 - Tin tức thể thao mới nhất trong và ngoài nước.</p>
                                <div className="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i
                                        className="fa fa-facebook"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i
                                        className="fa fa-twitter"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i
                                        className="fa fa-instagram"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i
                                        className="fa fa-google-plus"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i
                                        className="fa fa-pinterest"></i></a>
                                </div>

                                <hr className="invis"/>

                                <div className="newsletter-widget text-left">
                                    <form className="form-inline">
                                        <input type="text" className="form-control"
                                               placeholder="Nhập địa chỉ email"/>
                                        <button type="submit" className="btn btn-primary">Đăng ký</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Danh mục</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="#">Bóng đá Việt Nam</a></li>
                                    <li><a href="#">Cup C1</a></li>
                                    <li><a href="#">Bóng đá quốc tế</a></li>
                                    <li><a href="#">Thể thao</a></li>
                                    <li><a href="#">Esport</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Liên hệ</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="#">Giới thiệu</a></li>
                                    <li><a href="#">Chính sách bảo mật</a></li>
                                    <li><a href="#">Quảng cáo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;