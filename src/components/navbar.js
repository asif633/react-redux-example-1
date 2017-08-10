import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="nav-link" to="/">Blog</Link>
            <Link className="nav-link" to="/youtube">Youtube</Link>
            <Link className="nav-link" to="/weather">Weather</Link>
        </nav>
    );
};