import { Component } from "react";
import React from 'react';
import Axios from "axios";
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

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Updated At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map((element) => {
                                return (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{element.active}</td>
                                        <td>{element.name}</td>
                                        <td>{element.created_at}</td>
                                        <td>{element.updated_at}</td>
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