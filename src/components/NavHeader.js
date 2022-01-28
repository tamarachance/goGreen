import React from "react";
import { Link } from "react-router-dom";
const NavHeader = () => {
    const userID = localStorage.getItem('name');

    return ( 
        <div className="nav-header">
            <h2>Welcome back, {userID}</h2>
            <nav>
                <Link>About</Link>
                <Link>Rewards</Link>
                <Link>FAQ</Link>
                <Link>Contact Us</Link>
            </nav>
            <button onClick={()=> console.log("The user wants to sign out")}>Sign Out</button>
        </div>
     );
}
 
export default NavHeader;