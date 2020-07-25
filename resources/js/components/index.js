import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
    return (
        <div className="container-fluid">
            <div className="container"
            >
                <Header />
                <Footer />
            </div>

        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Router> <Index /></Router>, document.getElementById('app'));
}
