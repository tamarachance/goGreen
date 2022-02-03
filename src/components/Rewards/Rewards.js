import React from "react";
import './rewards.css';
import { useState } from "react";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import RewardCard from "../RewardCard/RewardCard";
import NavHeader from '../NavHeader/NavHeader';
import NavSide from '../NavSide/NavSide';
import tumbler from './assets/thermalTumbler.jpeg'
import cap from './assets/goGreenCap.jpeg'
import journal from './assets/spiralJournal.jpeg'
import tote from './assets/reusableTote.jpeg'

const Rewards = (props) => {
    let availablePoints = props.availablePoints
    let setAvailablePoints = props.setAvailablePoints

    const [rewardOptions, setRewardOptions] = useState([
        { id: 1, imgURL: tumbler, itemName: "Thermal Tumbler", itemCost: 1500 },
        { id: 2, imgURL: cap, itemName: "goGreen Cap", itemCost: 500 },
        { id: 3, imgURL: journal, itemName: "Journal", itemCost: 1000 },
        { id: 4, imgURL: tote, itemName: "Reusable Tote", itemCost: 2500 },
    ])

    return ( 
        <div className="rewards">
            <NavHeader />
            <NavSide isLoggedIn={props.isLoggedIn} menuClick={props.menuClick} setActive={props.setActive} isActive={props.isActive}/>
            <Logo menuClick={props.menuClick}/>
            <div className="rewards-container">
                <RewardCard rewardOptions={rewardOptions} availablePoints={availablePoints} setAvailablePoints={setAvailablePoints}/>
            </div>
            <Footer />
        </div>
     );
}
 
export default Rewards;