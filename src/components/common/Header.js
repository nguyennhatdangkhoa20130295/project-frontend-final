import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {categoriesData} from "../../category_data/CategoryList";
import axios from "axios";
import {parseString} from "xml2js";
import SearchBar from "./SearchBar";
import {useParams} from "react-router-dom";

export function openCategory(evt, catName, setActiveSubcategory) {
    evt.preventDefault();
    setActiveSubcategory(catName);
}

const Header = () => {
    const {category} = useParams();
    const [activeCategory, setActiveCategory] = useState('');
    const [activeSubcategory, setActiveSubcategory] = useState('');
    const [feedData, setFeedData] = useState([]);
    const categories = categoriesData;
    const fetchRssData = async (slug) => {
        try {
            const response = await axios.get(`/api/${slug}.rss`);
            const rssData = response.data;
            parseString(rssData, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }
                const items = result.rss.channel[0].item.slice(0, 4);
                setFeedData(items);
                console.log(items)
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (activeSubcategory) {
            fetchRssData(activeSubcategory);
        }
    }, [activeSubcategory]);
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
                                                    setActiveCategory(category.slug);
                                                    setActiveSubcategory(category.subcategories[0].slug);
                                                }}
                                                className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                                <Link className="nav-link dropdown-toggle" to={`/category/${encodeURIComponent(category.name)}`}
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
                                                                                    className={activeSubcategory === subcategory.slug ? 'tablinks active' : 'tablinks'}
                                                                                    onClick={(event) => openCategory(event, subcategory.slug, setActiveSubcategory)}>{subcategory.name}
                                                                            </button>
                                                                        );
                                                                    })}
                                                                </div>
                                                                <div className="tab-details clearfix">
                                                                    {category.subcategories.map((subcategory, subcategoryIndex) => {
                                                                        const subCategoryId = `cat0${categoryIndex}-${subcategoryIndex}`;
                                                                        return (
                                                                            <div key={subCategoryId}
                                                                                 id={subCategoryId}
                                                                                 className={activeSubcategory === subcategory.slug ? 'tabcontent active' : 'tabcontent'}>
                                                                                <div className="row">
                                                                                    {feedData.map((item, itemIndex) => {
                                                                                        return (<div key={itemIndex}
                                                                                                     className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                                            <div
                                                                                                className="blog-box">
                                                                                                <div
                                                                                                    className="post-media">
                                                                                                    <Link
                                                                                                        to="/news_details"
                                                                                                        title="">
                                                                                                        <img
                                                                                                            src={item.description[0].match(/src="(.*?)"/)[1]}
                                                                                                            alt="Thumbnail"/>
                                                                                                        <div
                                                                                                            className="hovereffect">
                                                                                                        </div>
                                                                                                        <span
                                                                                                            className="menucat">{subcategory.name}</span>
                                                                                                    </Link>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="blog-meta">
                                                                                                    <h4><Link
                                                                                                        to="/news_details"
                                                                                                        title="">{item.title[0]}</Link>
                                                                                                    </h4>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>)
                                                                                    })}
                                                                                </div>
                                                                                <Link className="nav-link" style={{float: "right"}}
                                                                                      to={`/category/${encodeURIComponent(subcategory.name)}`}>Xem thêm</Link>
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
                                                <Link className="nav-link"
                                                      to={`/category/${encodeURIComponent(category.name)}`}>{category.name}</Link>
                                            </li>
                                        )
                                    }
                                })
                                }
                            </ul>
                        </div>
                        <div className="search">
                            <SearchBar category={category}/>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
        ;
}

export default Header;
