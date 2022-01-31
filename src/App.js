import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import {useState, useEffect} from 'react';
import Upload from './components/Upload/Upload';
import Rewards from './components/Rewards/Rewards';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const loginUser = () => setIsLoggedIn(!isLoggedIn)

    const [isActive, setActive] = useState("true");
    const menuClick = () => setActive(!isActive)

    useEffect(() => {
        if(localStorage.getItem('id')) {
            setIsLoggedIn(true)
        }
    }, [])

    return ( 
        <div className='App'>
            <Routes>
               
                <Route path="*" element={isLoggedIn ? <Home isLoggedIn={loginUser} status={isLoggedIn} menuClick={menuClick} setActive={setActive} isActive={isActive}/> : < Login loginFunction={loginUser}/>}></Route>
                <Route path="rewards" element={isLoggedIn ? <Rewards isLoggedIn={loginUser} status={isLoggedIn} menuClick={menuClick} setActive={setActive} isActive={isActive}/> : < Login loginFunction={loginUser}/>}></Route>
                <Route path="upload" element={isLoggedIn ? <Upload isLoggedIn={loginUser} status={isLoggedIn} menuClick={menuClick} setActive={setActive} isActive={isActive}/> : < Login loginFunction={loginUser}/>}></Route>
                <Route path="register" element={<Register loginFunction={loginUser}/>}></Route>
                
            </Routes>
        </div>
     );
}
 
export default App;