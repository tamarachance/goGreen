import React from "react";
import { useState } from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import RewardCard from "./RewardCard";


const Rewards = () => {

    const [rewardOptions, setRewardOptions] = useState([
        { id: 1, itemName: "Hot/Cold Tumbler", itemCost: "1500 pts" },
        { id: 2, itemName: "Reusable Straw", itemCost: "500 pts" },
        { id: 3, itemName: "Journal", itemCost: "1000 pts" },
        { id: 4, itemName: "goGreen T-Shirt", itemCost: "2500 pts" },
    ])

    return ( 
        <div className="rewards">
            <Logo />
            <div className="rewards-container">
                <RewardCard rewardOptions={rewardOptions}/>
            </div>
            <Footer />
        </div>
     );
}
 
export default Rewards;