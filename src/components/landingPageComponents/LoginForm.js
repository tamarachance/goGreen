const LoginForm = () => {
    return ( 
        <div className="login-form" action="login">
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>
            <button>Log In</button>
            <button>Sign Up</button>
        </div>
     );
}
 
export default LoginForm;