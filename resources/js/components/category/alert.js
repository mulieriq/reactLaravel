import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class AlertSuccess extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Alert className='pb-0' variant='success'>
                <p>{this.props.message} </p>
            </Alert>
        )
    }

}

export default AlertSuccess