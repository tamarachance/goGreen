import React from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import RewardCard from "./RewardCard";


const Rewards = () => {
    return ( 
        <div className="rewards">
            <Logo />
            <div className="rewards-container">
                <RewardCard />
            </div>
            <Footer />
        </div>
     );
}
 
export default Rewards;