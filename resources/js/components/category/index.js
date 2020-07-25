import { Component } from "react";
import React from 'react';
import Add from './add';
import Listing from './listing'
import { Link, Route } from 'react-router-dom';
import EditPage from "./edit";
class Category extends Component {
    render() {
        return (
            <div>
                <div>
                    <hr />
                    <Link to="/categorypage" className="btn btn-success" >Category</Link> &nbsp;
                    <Link to="/categorypage/add" className="btn btn-primary">Add</Link>
                    <Route exact path="/categorypage/" component={Listing} />
                    <Route exact path="/categorypage/add/" component={Add} />
                    <Route exact path="/categorypage/edit/:id" component={EditPage} />
                </div>
            </div>
        );
    }
}
export default Category;