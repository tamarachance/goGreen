import React from "react";
import { useState } from "react";
import image from "../assets/comingSoon.jpg";
import Footer from "./Footer";
import Logo from "./Logo";
import RewardCard from "./RewardCard";


const Rewards = () => {

    const [rewardOptions, setRewardOptions] = useState([
        { id: 1, itemImage: {image}, itemName: "Hot/Cold Tumbler", itemCost: "1500 pts" },
        { id: 2, itemImage: {image}, itemName: "Reusable Straw", itemCost: "500 pts" },
        { id: 3, itemImage: {image}, itemName: "Journal", itemCost: "1000 pts" },
        { id: 4, itemImage: {image}, itemName: "goGreen T-Shirt", itemCost: "2500 pts" },
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