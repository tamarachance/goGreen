import React from "react";
import './home.css';
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";
import NavHeader from '../NavHeader/NavHeader';
import NavSide from '../NavSide/NavSide';

const Home = (props) => {
    return (
                  

          <div className="home">
            <NavHeader />
            <NavSide isLoggedIn={props.isLoggedIn} menuClick={props.menuClick} setActive={props.setActive} isActive={props.isActive}/>
            <Logo menuClick={props.menuClick}/>
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