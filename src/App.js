import logo from './logo.svg';
import './App.css';
import Header from "./components/common/Header";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/Footer";

function App() {
    return (
        <div id="wrapper">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
