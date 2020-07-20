import { Component } from "react";
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from "./about";
import Home from "./home";


class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />

                </div>


            </Router>


        );
    }
}
export default Header;