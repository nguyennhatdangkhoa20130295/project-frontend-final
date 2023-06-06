import React, {useState} from "react";
import {Link} from "react-router-dom";

export function openCategory(evt, catName, setActiveSubcategory) {
    evt.preventDefault();
    setActiveSubcategory(catName);
}

const Header = () => {
    const numberOfDivs = 4;
    const [activeCategory, setActiveCategory] = useState('');
    const [activeSubcategory, setActiveSubcategory] = useState('');
    const categories = [
        {
            id: 1,
            name: 'Bóng đá Việt Nam',
            subcategories: ['V-League', 'Đội tuyển quốc gia', 'U23 Đông Nam Á', 'Bóng đã nữ', 'AFF Cup 2023'],
        },
        {
            id: 2,
            name: 'Cup C1',
            subcategories: [],
        },
        {
            id: 3,
            name: 'Bóng đá quốc tế',
            subcategories: [],
        },
        {
            id: 4,
            name: 'Thể thao',
            subcategories: ['Bóng chuyền', 'Quần vợt', 'Bóng rỗ', 'Võ thuật', 'Các môn khác'],
        },
        {
            id: 5,
            name: 'ESports',
            subcategories: [],
        },
    ];
    return (
        <>
            <header className="tech-header header">
                <div className="container-fluid">
                    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/"><img
                            src="/assets/images/logo-header.png"
                            alt="logo header" width="200px" height="50px"/></Link>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Trang chủ</Link>
                                </li>
                                {categories.map((category, categoryIndex) => {
                                    if (category.subcategories.length > 0) {
                                        return (
                                            <li key={categoryIndex}
                                                onMouseEnter={() => {
                                                    setActiveCategory(category.name);
                                                    setActiveSubcategory(category.subcategories[0]);
                                                }}
                                                // onMouseLeave={() => {
                                                //     setActiveCategory('');
                                                //     setActiveSubcategory('');
                                                // }}
                                                className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                                <Link className="nav-link dropdown-toggle" to="/specific_pages"
                                                      id={`dropdown${categoryIndex}`}
                                                      data-toggle="dropdown" aria-haspopup="true"
                                                      aria-expanded="false">{category.name}</Link>
                                                <ul className="dropdown-menu megamenu"
                                                    aria-labelledby={`dropdown${categoryIndex}`}>
                                                    <li>
                                                        <div className="container">
                                                            <div className="mega-menu-content clearfix">
                                                                <div className="tab">
                                                                    {category.subcategories.map((subcategory, subcategoryIndex) => {
                                                                        return (
                                                                            <button key={subcategoryIndex}
                                                                                    className={activeSubcategory === subcategory ? 'tablinks active' : 'tablinks'}
                                                                                    onClick={(event) => openCategory(event, category.subcategories[subcategoryIndex], setActiveSubcategory)}>{subcategory}
                                                                            </button>
                                                                        );
                                                                    })}
                                                                </div>

                                                                <div className="tab-details clearfix">
                                                                    {category.subcategories.map((subcategory, subcategoryIndex) => {
                                                                        const subCategoryId = `cat0${categoryIndex}-${subcategoryIndex}`;
                                                                        return (
                                                                            <div key={subCategoryId} id={subCategoryId}
                                                                                 className={activeSubcategory === subcategory ? 'tabcontent active' : 'tabcontent'}>
                                                                                <div className="row">
                                                                                    {Array.from({length: numberOfDivs}, (_, index) => (
                                                                                        <div key={index}
                                                                                             className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                                            <div className="blog-box">
                                                                                                <div
                                                                                                    className="post-media">
                                                                                                    <Link
                                                                                                        to="/news_details"
                                                                                                        title="">
                                                                                                        <img
                                                                                                            src="/assets/upload/tech_menu_01.jpg"
                                                                                                            alt=""
                                                                                                            className="img-fluid"/>
                                                                                                        <div
                                                                                                            className="hovereffect">
                                                                                                        </div>
                                                                                                        <span
                                                                                                            className="menucat">{subcategory}</span>
                                                                                                    </Link>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="blog-meta">
                                                                                                    <h4><Link
                                                                                                        to="/news_details"
                                                                                                        title="">Top
                                                                                                        10+ care advice
                                                                                                        for
                                                                                                        your
                                                                                                        toenails</Link>
                                                                                                    </h4>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        );
                                    } else {
                                        return (
                                            <li key={categoryIndex} className="nav-item">
                                                <Link className="nav-link" to="/specific_pages">{category.name}</Link>
                                            </li>
                                        )
                                    }
                                })
                                }
                            </ul>
                        </div>
                        <form className="search">
                            <div className="input-group">
                                <input type="text" className="form-control"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary searchBtn" style={{background:'#0091e5 !important'}}><i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;