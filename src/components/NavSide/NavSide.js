import React from "react";
import { useState } from 'react';
import './navside.css';
import Logo from '../Logo/Logo';


const NavSide = (props) => {

    const userID = localStorage.getItem('name')
    const email = localStorage.getItem('email')

  
    const logout = () => {
      props.setActive(!props.isActive)
      localStorage.removeItem('user')
      localStorage.removeItem('username')
      props.isLoggedIn()
    }

    return ( 
        <div className="nav-slide" id={`${props.isActive ? "hidden": " "}`}>
            <Logo menuClick={props.menuClick}/>
            <div className="content-container">
                <div>
                    <h2>Welcome back, {userID}</h2>
                    <h3>{email}</h3>
                </div>
                <nav>
                    <ul><a href="http://localhost:3000/about">About</a></ul>
                    <ul><a href="http://localhost:3000/faq">FAQ</a></ul>
                    <ul><a href="http://localhose:3000/contact">Contact Us</a></ul>
                </nav>

                <button onClick={logout}>Sign Out</button>
            </div>
        </div>
     );
}
 
export default NavSide;