import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
    return (
        <div className="container">
            <Header />
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
