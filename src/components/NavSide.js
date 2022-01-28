import React from "react";
import { Link } from "react-router-dom";

const NavSide = () => {
    const userID = localStorage.getItem('name')
    const email = localStorage.getItem('email')

    return ( 
        <div className="NavSide">
            <Logo />
            <h2>{userID}</h2>
            <h3>{email}</h3>

            <nav>
                <Link>About</Link>
                <Link>FAQ</Link>
                <Link>Contact Us</Link>
            </nav>

            <button onClick={()=> console.log('User wants to sign out.')}>Sign Out</button>
        </div>
     );
}
 
export default NavSide;