import { Component } from "react";
import React from 'react';
import Axios from "axios";
import { Link } from "react-router-dom";
import Pagination from 'react-js-pagination';

class Listing extends Component {

    constructor() {
        super()
        this.state = {
            categories: [],
            activePage: 1,
            itemCountPerPage: 1,
            totalItemsCount: 1
        }
        this.handlePageChange = this.handlePageChange.bind(this)
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:8000/category').then(response => {
            this.setState(
                {
                    categories: response.data.data,
                    itemCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                }
            )
        })
    }
    onDelete(id) {
        Axios.delete('http://127.0.0.1:8000/category/delete/' + id).then(r => {
            var categories = this.state.categories
            for (var i = 0; i < categories.length; i++) {
                if (categories[i].id == id) {
                    categories.slice(i, 1);
                    this.setState({ categories: categories })
                }
            }
        })
    }

    handlePageChange(pageNumber) {
        console.log(`active page ${pageNumber}`)
        //this.setState({ activePage: pageNumber })
        Axios.get('http://127.0.0.1:8000/category?page=' + pageNumber).then(response => {
            this.setState(
                {
                    categories: response.data.data,
                    itemCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page
                }
            )
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
                <div className='d-flex justify-content-center'>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={3}
                        onChange={this.handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
                </div>
                <div>
                </div>
            </div>
        );
    }
}
export default Listing;