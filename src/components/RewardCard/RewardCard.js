import React from "react";
import './rewardcard.css';
import image from "../../assets/comingSoon.jpg";

const RewardCard = ({ rewardOptions}) => {
    
    return ( 
        <div className="reward-card"> 
            {rewardOptions.map((rewardOption) => (
                <div className="reward-preview" key={rewardOption.id}>
                    <img src={image} alt=" " />
                    <br />
                    <h3>{rewardOption.itemName}</h3>
                    <br />
                    <p>{rewardOption.itemCost}</p>
                    <button>Select</button>
                </div>
            ))}
        </div>
     );
}
 
export default RewardCard;