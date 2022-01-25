import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Rewards from './components/Rewards';

import {useState, useEffect} from 'react';
import Upload from './components/Upload';

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
                <Route path="*" element={isLoggedIn ? <Home /> : < Login loginFunction={loginUser}/>}></Route>
                <Route path="register" element={<Register loginFunction={loginUser}/>}></Route>
                <Route path="home" element={< Home />}></Route>
                <Route path="upload" element={<Upload />}></Route>
                <Route path="rewards" element={< Rewards />}></Route>
            </Routes>
        </div>
     );
}
 
export default App;