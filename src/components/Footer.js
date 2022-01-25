import React from "react";
import { FaHome, FaPlusCircle, FaStar} from 'react-icons/fa';
import { useNavigate } from "react-router";

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/upload')
    }
    return ( 
        <div className="menubar">
            <FaHome />
            <FaPlusCircle 
                onClick={handleClick}
            />
            <FaStar />
        </div>
     );
}
 
export default Footer;