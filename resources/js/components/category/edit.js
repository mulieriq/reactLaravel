import { Component } from "react";
import React from 'react';
import Axios from "axios";
class EditPage extends Component {
    constructor(props) {
        super(props);
        this.onchangedCategoryname = this.onchangedCategoryname.bind(this);
        this.onSubmit = this.onsubmit.bind(this)
        this.state = {
            category_name: ''
        }
    }
    onchangedCategoryname(e) {
        this.setState({ category_name: e.target.value })
    }

    componentDidMount(){
        Axios.get('http://127.0.0.1:8000/category/edit/'+this.props.match.params.id).then(res => this.setState({category_name:res.data.name}))

    }
    onsubmit(e) {
        e.preventDefault();
        console.log(this.state.category_name)
        const category = { category_name: this.state.category_name }
        Axios.put('http://127.0.0.1:8000/category/update/'+this.props.match.params.id, category).then(res => console.log(res.data))
    }
    render() {
        return (
            <div>
                <form onSubmit={e =>this.onsubmit(e)}>
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
export default EditPage;
