import React from "react";
import Logo from "./Logo";
import Footer from "./Footer";
import NavHeader from './NavHeader';
import { Routes, Route } from "react-router";

const Home = () => {
    return (
                  

          <div className="home">
            {/* <NavHeader /> */}
            <Logo />
            <div className="points-container">
              <h2>Available Points:</h2>
              <h1>USER.POINTS WOULD GO HERE</h1>
            </div>
            <div 
              className="points-container"
              style={{top: 352}}
            >
              <h2>Total Points Earned:</h2>
              <h1>USER.POINTS ADDED UP WOULD GO HERE</h1>

            </div>
            <Footer />
          </div>

        
        
      );
}
 
export default Home;