import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {categoriesData} from "../../category_data/CategoryList";
import axios from "axios";
import {parseString} from "xml2js";
import "./Search.css";
import RssFeedByCategory from "../../rss/RssFeedByCategory";


const Header = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [activeSubcategory, setActiveSubcategory] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [articleData, setArticleData] = useState([]);
    const categories = categoriesData;
    console.log(selectedCategory)

    const openCategory = (evt, catName) => {
        evt.preventDefault();
        setActiveSubcategory(catName);
    }
    const handleCategoryClick = (category) => {
        if (category === "") {
            setSelectedCategory('trang-chu');
        } else {
            setSelectedCategory(category);
        }
        setShowModal(false);
        setSearch('');
    };
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const {feedData, isLoading} = RssFeedByCategory(selectedCategory);

    useEffect(() => {
        if (search.trim() === '') {
            setSearchResults([]);
            return;
        }
        const dataSearch = feedData.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(dataSearch);
    }, [search, feedData]);

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleClickOutside = (event) => {
        if (event.target.classList.contains('modal-overlay')) {
            setShowModal(false);
            setSearch('');
        }
    };
    const handleCloseModal = () => {
        setShowModal(false);
        setSearch('');
    }

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
                setArticleData(items);
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
                        <div className="collapse navbar-collapse" id="navbarCollapse" style={{width: 1310}}>
                            <ul className="navbar-nav mr-auto">
                                {categories.map((category, categoryIndex) => {
                                    if (category.subcategories.length > 0) {
                                        return (
                                            <li key={categoryIndex}
                                                onMouseEnter={() => {
                                                    setActiveCategory(category.slug);
                                                    setActiveSubcategory(category.subcategories[0].slug);
                                                }}
                                                onClick={() => handleCategoryClick(category.slug)}
                                                className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                                                <Link className="nav-link dropdown-toggle"
                                                      to={`/${encodeURIComponent(category.slug)}`}
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
                                                                                    onClick={(event) => openCategory(event, subcategory.slug)}>{subcategory.name}
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
                                                                                    {articleData.map((item, itemIndex) => {
                                                                                        const link = item.link[0].replace('https://thethao247.vn/', '');
                                                                                        return (<div key={itemIndex}
                                                                                                     className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                                                                            <div
                                                                                                className="blog-box">
                                                                                                <div
                                                                                                    className="post-media">
                                                                                                    <Link
                                                                                                        to={`/${encodeURIComponent(category.slug)}/${encodeURIComponent(link)}`}
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
                                                                                                        to={`/${encodeURIComponent(category.slug)}/${encodeURIComponent(link)}`}
                                                                                                        title="">{item.title[0]}</Link>
                                                                                                    </h4>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>)
                                                                                    })}
                                                                                </div>
                                                                                <Link className="nav-link"
                                                                                      style={{float: "right"}}
                                                                                      to={`/${encodeURIComponent(subcategory.slug)}`}>Xem
                                                                                    thêm</Link>
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
                                            <li key={categoryIndex}
                                                onClick={() => handleCategoryClick(category.slug)}
                                                className="nav-item">
                                                <Link className="nav-link"
                                                      to={`/${encodeURIComponent(category.slug)}`}>{category.name}</Link>
                                            </li>
                                        )
                                    }
                                })
                                }
                            </ul>
                        </div>
                        <div className="search">
                            <form className="input-group">
                                <input type="text" className="form-control" placeholder="Tìm kiếm tại đây"
                                       value={search}
                                       onFocus={handleOpenModal} onChange={handleChange}/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary searchBtn"
                                            style={{background: '#0091e5 !important'}}><i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        {showModal && (
                            <div className="modal-overlay" onClick={handleClickOutside}>
                                <div className="modal_search">
                                    {searchResults.map((item, index) => {
                                        const link = item.link.replace('https://thethao247.vn/', '');
                                        const slug = !selectedCategory ? 'trang-chu' : selectedCategory;
                                        return (<div key={index} className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                                            <div className="card p-0 overflow-hidden shadow">
                                                <Link onClick={handleCloseModal}
                                                      to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}><img
                                                    src={item.imageUrl} alt={item.title}
                                                    className="card-img-top"/></Link>
                                                <div className="card-body">
                                                    <h5><Link onClick={handleCloseModal}
                                                                  to={`/${encodeURIComponent(slug)}/${encodeURIComponent(link)}`}
                                                                  title="">{item.title}</Link></h5>
                                                </div>
                                            </div>
                                        </div>);
                                    })}
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;
