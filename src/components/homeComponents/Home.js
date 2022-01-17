import React from 'react';
import Logo from '../landingPageComponents/Logo';
import HamNav from './HamNav';
import Menubar from './Menubar';
import PointsContainer from './PointsContainer';

const Home = () => {
    return ( 
        <div className="home">
            <HamNav />
            <Logo />
            <PointsContainer />
            <Menubar />
        </div>
     );
}
 
export default Home;