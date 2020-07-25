import { Component } from "react";
import React from 'react';
import Axios from "axios";
import AlertSuccess from "./alert";
import AlertError from "./error";
class Add extends Component {


    constructor() {
        super();
        this.onchangedCategoryname = this.onchangedCategoryname.bind(this);
        this.onSubmit = this.onsubmit.bind(this)
        this.state = {

            category_name: '',
            error_name: '',
            error: ''
        }
    }
    onchangedCategoryname(e) {
        this.setState({ category_name: e.target.value })
    }
    onsubmit(e) {
        e.preventDefault();
        console.log(this.state.category_name)
        const category = { category_name: this.state.category_name }
        Axios.post('http://127.0.0.1:8000/api/category/store/', category).then(this.setState({ error_name: 'success' })).catch(e => this.setState({error: e , error_name: 'error' }))
    }
    render() {
        return (
            <div>
                <hr />
                {this.state.error_name == 'success' ? <AlertSuccess message={'Category Added Successfuly'} /> : null}
                {this.state.error_name == 'error' ? <AlertError message={'Error Occured While Adding Data'} /> : null}
                <form onSubmit={e => this.onsubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="category_name">Catogries</label>
                        <input type="text" className="form-control" id="category_name" value={this.state.category_name} onChange={this.onchangedCategoryname} placeholder="Enter Categoty" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default Add;