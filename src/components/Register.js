import React from 'react';
import { useFormik } from 'formik';
import Logo from './Logo';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Register = (props) => {

    const navigate = useNavigate();

    const initialValues = {
        name:" ",
        email: " ",
        password:" "
    }

    const onSubmit = (values) => {
        axios.post("http://localhost:4000/register", values)
            .then(res => {
                //console.log(res.data)
                localStorage.setItem('email', res.data[0][0].email)
                localStorage.setItem('name', res.data[0][0].name)
                localStorage.setItem('id', res.data[0][0].id)
                props.loginFunction();
                navigate('/home');
            })
            .catch(err => console.log(err.response.data))
        
    }

    const validate = (values) => {
        const errors = {}
        if(!values.name) {
            errors.name = "Name required"
        }
        if(!values.password) {
            errors.password = "Password required"
        }
        if(!values.email) {
            errors.email = "Email required"
        } else if(!values.email.includes('@')) {
            errors.email = "Please enter a valid email address. "
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
            <p className="tagline">Sign up for an account to start earning rewards today!</p>
            <form className="login-form" onSubmit={formik.handleSubmit}>
                Enter your name:
                <input 
                    type="text" 
                    name="name" 
                    onChange={formik.handleChange} 
                    value={formik.values.name} 
                    placeholder='Name'
                />
                Enter your Email Address:
                <input 
                    type="text" 
                    name="email" 
                    onChange={formik.handleChange} 
                    value={formik.values.email} 
                    placeholder='Email'
                />
                Create a Password:
                <input 
                    type="text" 
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder="Password"
                />
                <button type="submit" disabled={!formik.isValid}>Sign Up</button>
            </form>
            <div className='errorMessage'>
                {formik.errors.name ? <div> {formik.errors.name} </div> : null}
                {formik.errors.password ? <div> {formik.errors.password} </div> : null}
                {formik.errors.email ? <div> {formik.errors.email} </div> : null}
            </div>
        </div>
         
     );
}
 
export default Register;