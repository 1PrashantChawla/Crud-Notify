import React from 'react'
import { Link, useLocation, useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';



function Navbar(props) {
// location is used to add active class to the nav component whenever the navheading is clicked
let navigate=useNavigate();
let location=useLocation();
const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');

}


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
                                
                                <Link className={ `nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">My Notes</Link>
                            </li>


                            <li className="nav-item">
                                <Link className={ `nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
                            </li>





                           



                        </ul>

                    {/* Login signup buttons */}
                      {!localStorage.getItem('token')? <form className="d-flex" >
                            <Link className='btn btn-primary mx-2' to="/login" role="button">Login</Link>
                            <Link className='btn btn-primary mx-2' to="/signup" role="button">Signup</Link>
                        </form> :  <button className='btn btn-primary mx-2' onClick={handleLogout}  role="button">Logout</button>}

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
