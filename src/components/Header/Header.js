import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menus">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Statics</li>
                    <li>Contact</li>
                    <li>Quizes</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;