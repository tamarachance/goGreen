import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import Logo from './Logo';

const Login = (props) => {

    const navigate = useNavigate();

    const initialValues = {
        email:" ",
        password:" "
    }

    const onSubmit = (values) => {
        console.log(`User has successfully logged in.`)
        props.loginFunction();
        navigate('/home');
    }

    const handleClick = () => {navigate('/register')}

    const validate = (values) => {
        const errors = {}
        if(!values.email) {
            errors.email = "Email required"
        }
        if(!values.password) {
            errors.password = "Password required"
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return ( 
        
        <div className='login'>
            <Logo />
            <p className="tagline">Saving the Planet Through Sustainable Actions</p>
            <form className="login-form" onSubmit={formik.handleSubmit}>
                Email Address:
                <input 
                    type="text" 
                    name="email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    placeholder='Email Address'
                />
                Password:
                <input 
                    type="text" 
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Password"
                />
                <button type="submit" disabled={!formik.isValid}>Log In</button>
                <button type="click" onClick={handleClick}>Sign Up</button>
            </form>
            <div className='errorMessage'>
                {formik.errors.email ? <div> {formik.errors.email} </div> : null}
                {formik.errors.password ? <div> {formik.errors.password} </div> : null}
            </div>
        </div>
         
     );
}
 
export default Login;