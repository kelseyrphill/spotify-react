import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import '../App.css';
import Home1 from './Home1';
import Create from './Create';
import Welcome from './Welcome'
import Login from './Login';
import Forgot from "./Forgot";
import Search from './Search';
import Library from "./Library";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home1 />} />
                <Route path="/create" element={<Create />} />
                <Route path="/login" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="/library" element={<Library />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Router>
    );
}