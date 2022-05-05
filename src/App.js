import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes} from "react-router-dom"
import Music from "./components/Music/music";
import News from "./components/News/news";
import Photo from "./components/Photo/photo";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Routes path={"/dialogs"} component={Dialogs}/>
                    <Routes path={"/profile"} component={Profile}/>
                    <Routes path={"/music"} component={Music}/>
                    <Routes path={"/news"} component={News}/>
                    <Routes path={"/photo"} component={Photo}/>


                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
