import React from "react";
import Logo from "./Logo";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="home">
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