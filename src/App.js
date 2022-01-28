import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import {useState, useEffect} from 'react';
import Upload from './components/Upload';
import Rewards from './components/Rewards';
import NavHeader from './components/NavHeader';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const loginUser = () => setIsLoggedIn(!isLoggedIn)

    useEffect(() => {
        if(localStorage.getItem('id')) {
            setIsLoggedIn(true)
        }
    }, [])

    return ( 
        <div className='App'>
            <Routes>
                <NavHeader />

                <Route path="*" element={isLoggedIn ? <Home /> : < Login loginFunction={loginUser}/>}></Route>
                <Route path="rewards" element={isLoggedIn ? <Rewards /> : < Login loginFunction={loginUser}/>}></Route>
                <Route path="upload" element={isLoggedIn ? <Upload /> : < Login loginFunction={loginUser}/>}></Route>
                <Route path="register" element={<Register loginFunction={loginUser}/>}></Route>
                
            </Routes>
        </div>
     );
}
 
export default App;