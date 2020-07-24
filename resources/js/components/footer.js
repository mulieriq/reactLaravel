import { Component } from "react";
import React from 'react';
import Alert from 'react-bootstrap/Alert';
class Footer extends Component{
    render() {
        return (
            <Alert dismissible variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again.
            </p>
          </Alert>
        );
    }
}
export default Footer;