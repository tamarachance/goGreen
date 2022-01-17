import React from 'react';
import { IconContext } from 'react-icons/lib';
import {FaHome, FaPlusCircle, FaStar} from 'react-icons/fa';

const Menubar = () => {
    return ( 
        <div className='menubar'>
         <IconContext.Provider value={{className: "menu-icons"}} >
           <FaHome />
         </IconContext.Provider>
         <FaPlusCircle style={{
              fontSize: 44,
              fill: "white",
              backgroundColor: "#006B54",
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "#006B54",
              borderRadius: 50            
           }} />
         <IconContext.Provider value={{className: "menu-icons"}} >
           <FaStar />
         </IconContext.Provider>
        </div>
     );
}
 
export default Menubar;