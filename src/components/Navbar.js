import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Clock from './Clock';
export default class Navbar extends Component {
    render() {
        return (
            <>
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                    <div className="container-fluid">
                        <Link className="navbar-brand font-weight-bold" to="/">E<span className="text-warning">~</span>Gupt<span className="text-warning">Char</span></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                <p className="text-white nav-link m-0"><Clock/></p>
                                </li>

                            </ul>
                            
                            
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
