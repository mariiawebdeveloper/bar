import React from 'react';
import {Route, Routes} from "react-router";
import Header from "./components/header/Header";
import Body from "./components/mainPage/BodyMain";
import About from "./components/aboutUs/About";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";


function App() {
    return (
        <div className="">
            <header>
                <Header/>
            </header>
            <body>
            <Routes>
                <Route path={"/"} element={<Body/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/menu"} element={<Menu/>}/>
            </Routes>
            </body>

            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
