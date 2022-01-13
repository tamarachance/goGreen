import React from 'react';
import Logo from '../landingPageComponents/Logo';
import HamNav from './HamNav';
import Menubar from './Menubar';

const Home = () => {
    return ( 
        <div className="home">
            <HamNav />
            <Logo />
            <Menubar />
        </div>
     );
}
 
export default Home;