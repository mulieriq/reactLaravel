import { Component } from "react";
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from "./about";
import Home from "./home";
import Category from "./category";
import Add from "./category/add";
import EditPage from "./category/edit";
import Error404 from "./404error";
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">React Laravel</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categorypage">Categories</Link>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className='row'>
                    <div className='col-md-12'>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/categorypage" component={Category} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/categorypage/add/" component={Add} />
                            <Route exact path="/categorypage/edit/:id" component={EditPage} />
                            <Route exact path="/*" component={Error404} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;