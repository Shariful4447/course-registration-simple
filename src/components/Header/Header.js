import React from 'react';
import logo from '../../images/Udemy.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/Busness">Buisness course</a>
                <a href="/Commerce">Commerce course</a>
                <a href="/Finance">Finance course</a>
            </nav>
            
        </div>
    );
};

export default Header;