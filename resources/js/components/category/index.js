import { Component } from "react";
import React from 'react';
import Add from './add';
import Listing from './listing'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
class About extends Component {
    render() {
        return (
            <div>
                <Router> 
                    <div>
                        <Link to="category">Category</Link>
                        <Link to="categoty/add">Add</Link>
                        <Route exact path="/category" component={Listing} />
                        <Route exact path="/category/add" component={Add} />
                    </div>
                </Router>
            </div>
        );
    }
}
export default About;