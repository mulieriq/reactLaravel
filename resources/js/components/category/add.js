import { Component } from "react";
import React from 'react';
import Axios from "axios";
class Add extends Component {


    constructor() {
        super();
        this.onchangedCategoryname = this.onchangedCategoryname.bind(this);
        this.onSubmit = this.onsubmit.bind(this)
        this.state = {
            category_name: ""
        }
    }
    onchangedCategoryname(e) {
        this.setState({ category_name: e.target.value })
    }
    onsubmit(e) {
        e.preventDefault();
        const category = { category_name: this.state.category_name }
        Axios.post('http://127.0.0.1:8000/category/store', category).then(res => console.log(res.data))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Catogries</label>
                        <input type="text" className="form-control" id="category_name" value={this.state.category_name} onChange={this.onchangedCategoryname} aria-describedby="emailHelp" placeholder="Enter Categoty" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default Add;