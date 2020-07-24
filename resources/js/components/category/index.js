import { Component } from "react";
import React from 'react';
import Add from './add';
import Listing from './listing'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
class Category extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <hr/>
                        <Link to="/category"className="btn btn-success" >Category</Link> &nbsp;
                        <Link to="/category/add" className="btn btn-primary">Add</Link>
                        <Route exact path="/category/" component={Listing} />
                        <Route exact path="/category/add/" component={Add} />
                    </div>
                </Router>

            </div>
        );
    }
}
export default Category;