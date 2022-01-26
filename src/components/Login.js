import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import Logo from './Logo';
import axios from 'axios';

const Login = (props) => {

    const navigate = useNavigate();

    const initialValues = {
        email:" ",
        password:" "
    }

    const onSubmit = (values) => {
        axios.post("http://localhost:4000/login", values)
            .then(res => {
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('name', res.data.name)
                localStorage.setItem('id', res.data.id)
                props.loginFunction();
                navigate('/home');
            })
            .catch(err => console.log(err.response.data))
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