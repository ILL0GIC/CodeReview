import React, { Component } from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbarstylinghere background'>
            <ul>
            	<li className="title">Group Five</li>
            	<li className="input button"><a href="" target="_blank">Login</a></li>
            	<li className="input button"><a href="" target="_blank">Sign Up</a></li>
            </ul>
		</div>
    );
}

export default NavBar;