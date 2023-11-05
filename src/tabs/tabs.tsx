import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const Tabs = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="#/home">Home</a>
                    
                </li>
                <li>
                <a href="#/about">About</a>
                </li>
            </ul>
            <Routes>
                <Route path="/home" element = {<Home />}></Route>
                <Route path="/about" element = {<About />}></Route>

            </Routes>
        </div>
    )
};

export default Tabs;