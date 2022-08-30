import React from 'react'
import { Link, useLocation} from "react-router-dom";
import PropTypes from 'prop-types';



function Navbar(props) {
// location is used to add active class to the nav component whenever the navheading is clicked
let location=useLocation();


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    {/* navbar brand */}
                    <Link className="navbar-brand" to="/">{props.brand}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">



                            <li className="nav-item">
                                
                                <Link className={ `nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
                            </li>


                            <li className="nav-item">
                                <Link className={ `nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
                            </li>


                            <li className="nav-item dropdown">


                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>


                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>



                            </li>


                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>



                        </ul>

                    {/* search Box */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    brand:PropTypes.string.isRequired
  };
export default Navbar
