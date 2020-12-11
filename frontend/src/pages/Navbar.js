import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logout, useAuthState } from '../context';

const Navbar = () => {
    const { isAuthenticated } = useAuthState()

    const authLinks = (
        <li className="nav-item">
            <a className='nav-link' onClick={logout} href='#!'>Logout</a>
        </li>
    );


    const guestLinks = (
        <Fragment>
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/login'>Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to='/signup'>Sign Up</NavLink>
            </li>
        </Fragment>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/'>Dj/React Auth System</Link>
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to='/'>Home</NavLink>
                    </li>
                    { <Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment> }
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;