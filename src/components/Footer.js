import React from "react";
import { FaHome, FaPlusCircle, FaStar} from 'react-icons/fa';
import { useNavigate } from "react-router";

const Footer = () => {

    const navigate = useNavigate();
    
    return ( 
        <div className="menubar">
                <FaHome onClick={()=> navigate('/home')}/>
                <FaPlusCircle onClick={()=> navigate('/upload')}/>
                <FaStar onClick={()=> navigate('/rewards')}/>
        </div>
     );
}
 
export default Footer;