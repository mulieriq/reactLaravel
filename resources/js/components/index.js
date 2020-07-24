import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
    return (
        <div className="container">
            <Header/>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Landing Page</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
