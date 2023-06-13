import './App.css';
import Header from "./components/common/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/Footer";
import {BrowserRouter as Router, Routes, Route, useParams} from "react-router-dom";
import NewsDetails from "./components/pages/singlePage/NewsDetails";
import SpecificPage from "./components/pages/singlePage/SpecificPage";

function App() {
    return (
        <div id="wrapper">
            <Router>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/news_details/:link' element={<NewsDetails/>}/>
                    <Route exact path='/category/:slug' element={<SpecificPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
