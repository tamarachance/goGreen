import React from 'react';
import Logo from './Logo';
import TagLine from './TagLine';
import LoginForm from './LoginForm';

const Login = () => {
    return ( 
        <div className='login'>
            <Logo />
            <TagLine />
            <LoginForm />
        </div>
     );
}
 
export default Login;