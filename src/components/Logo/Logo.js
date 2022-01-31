import React from 'react';
import { useState } from 'react';
import './logo.css';
import { FaBars } from 'react-icons/fa';

const Logo = (props) => {

    return ( 
        <div className="logo">
            <h2>goGreen</h2>
            <FaBars onClick={props.menuClick}/>
        </div>
     );
}
 
export default Logo;