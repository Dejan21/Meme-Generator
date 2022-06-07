import React from 'react';
import './Header.css'

function Header () {
    return (
        <header className="Header">
            <img src="../images/troll-face.png" className='header--image' alt=""/>
            <h2 className='header--title'>Header component</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    );
};

export default Header;
