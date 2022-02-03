import React from "react";
import './rewardcard.css';
import swal from "sweetalert";
import { useNavigate } from "react-router";

const RewardCard = ({ rewardOptions, availablePoints}) => {
    const navigate = useNavigate()

    const handleClick = (itemCost) => {
        console.log('click')
        let cost = Number(itemCost)
        let points = availablePoints
        let delta = points - cost
        swal({
            title: "Are you sure?",
            text: "Once redeemed, you will not be able to recover your points!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              localStorage.setItem('availablePoints', delta)
              swal("Your sweet swiggety swag is on its way!", {
                icon: "success",
              });
            } else {
              swal("Your points are safe!");
            }
          })
          .finally(() => {
              navigate('/home')
              window.location.reload(true)
            })
        
        
    }

    return ( 
        <div className="reward-card"> 
            {rewardOptions.map((rewardOption) => {
              // console.log(rewardOption.imgURL)
              return (
                  <div className="reward-preview" key={rewardOption.id}>
                    <img src={rewardOption.imgURL} alt={rewardOption.id} />
                    <br />
                    <h3>{rewardOption.itemName}</h3>
                    <br />
                    <p>{rewardOption.itemCost} pts</p>
                    <button onClick={()=>handleClick(rewardOption.itemCost)}>Select</button>
                </div>
              )
})}
        </div>
     );
}
 
export default RewardCard;