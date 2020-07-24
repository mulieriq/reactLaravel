import { Component } from "react";
import React from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";

class Listing extends Component {

    constructor() {
        super()
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/category').then(response => {
            this.setState(
                { categories: response.data }
            )
        })
    }
    onDelete(id) {
        Axios.delete('http://127.0.0.1:8000/category/delete/'+id).then(r =>{

        var categories = this.state.categories

        for (var i=0 ; i<categories.length;i++){
            if(categories[i].id == id){
                categories.slice(i,1);
                this.setState({categories:categories})
            }

        }
    })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map((element) => {
                                return (
                                    <tr>
                                        <th scope="row">{element.id}</th>
                                        <td>{element.name}</td>
                                        <td>{element.active == 1 ? "Active" : "Inactive"}</td>
                                        <td>{element.created_at}</td>
                                        <td>{element.updated_at}</td>
                                        <td><Link to={`/categorypage/edit/${element.id}`} >Edit</Link> | <a href="#" onClick={this.onDelete.bind(this, element.id)}>Delete</a> </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}
export default Listing;