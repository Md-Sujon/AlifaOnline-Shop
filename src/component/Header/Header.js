import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div className='Header'>
            <nav>
            <h3 className="logo">AlifaOnline-Shop</h3>
            <Link to="/Home">Home</Link>
            <Link to="/Order">Order</Link>
            <Link to="/Admin">Admin</Link>
            <Link to="/Deals">Deals</Link>
            <Link to="/Login">Login</Link>
            
         </nav>
        </div>
    );
};

export default Header;