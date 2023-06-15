import {categoriesData} from "../../category_data/CategoryList";
import RssFeedByCategory from "../../rss/RssFeedByCategory";
import React, {useEffect, useState} from "react";

const findCategoryBySlug = (categories, categoryName) => {
    for (const category of categories) {
        if (category.name === categoryName) {
            return category;
        } else if (category.subcategories?.length > 0) {
            const subcategory = findCategoryBySlug(category.subcategories, categoryName);
            if (subcategory) {
                return subcategory;
            }
        }
    }
    return null;
};

const SearchBar = ({category}) => {
    const categories = categoriesData;
    const selectedCategory = findCategoryBySlug(categories, category);

    const slug = selectedCategory ? selectedCategory.slug : '';
    const {feedData,isLoading} = RssFeedByCategory(slug);
    console.log(feedData);

    // SearchBar
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        const dataSearch = feedData.filter(item =>
            item.title.join('').toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(dataSearch);
    }, [search]);

    return (
        <section>
            <div className="row justify-content-center">
                <form className="input-group">
                    <input type="text" className="form-control" placeholder="Tìm kiếm tại đây" value={search} onChange={handleChange}/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary searchBtn"
                                style={{background: '#0091e5 !important'}}><i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>

                {searchResults.map(item => (
                    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className="card p-0 overflow-hidden h-100 shadow">
                            <img src={item.imageUrl} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default SearchBar;
