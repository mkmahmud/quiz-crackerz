import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <div className="logo">
                <img src={logo} alt="" />
                <h2>Blossom Quiz</h2>
            </div>
            <div className="menus">
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/statistics'>Statistics</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/quizes'>Quizes</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;