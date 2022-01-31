import React from "react";
import './navheader.css'
const NavHeader = () => {
    const userID = localStorage.getItem('name');

    return ( 
        <header className="nav-header">
            <h2>Welcome back, {userID}</h2>
            <nav>
                <ul><a href="http://localhost:3000/about">About</a></ul>
                <ul><a href="http://localhost:3000/home">Home</a></ul>
                <ul><a href="http://localhost:3000/rewards">Rewards</a></ul>
                <ul><a href="http://localhost:3000/upload">Upload</a></ul>
                <ul><a href="http://localhost:3000/faq">FAQ</a></ul>
                <ul><a href="http://localhost:3000/contact">Contact Us</a></ul>
            </nav>
            <button onClick={()=> console.log("The user wants to sign out")}>Sign Out</button>
        </header>
     );
}
 
export default NavHeader;