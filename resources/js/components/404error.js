import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AlertError from './category/error'
class Error404 extends Component {

    render() {
        return (
            <div>
                <hr/>
                <div className='alert alert-danger'>
                    404 Page Not found . <Link to='/'>Back Home</Link>
                </div>
            </div>
        )
    }
}

export default Error404