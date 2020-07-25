import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class AlertError extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Alert className='pb-0' variant='danger'>
                <p>{this.props.message} </p>
            </Alert>
        )
    }

}

export default AlertError