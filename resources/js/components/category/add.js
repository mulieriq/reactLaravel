import { Component } from "react";
import React from 'react';
class Add extends Component {
    render() {
        return (
            <div>

                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Catogries</label>
                        <input type="text" className="form-control" id="category_name" aria-describedby="emailHelp" placeholder="Enter Categoty" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default Add;