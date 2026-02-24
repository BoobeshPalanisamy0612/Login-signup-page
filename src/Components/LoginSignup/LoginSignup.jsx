import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import './LoginSignup.css';

const LoginSignup = () => {

    const [action, setAction] = useState('');

    const signupLink = () => {
        setAction('active');
    }

    const loginLink = () => {
        setAction('');
    }

    return (
        <div className = {`wrapper ${action}`}>
            <div className = 'form-box login'>
                <form action = ''>
                    <h1>Log In</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type='submit'>Log In</button>
                    <div className="signup-link">
                        <p>Don't Have an account? <a href="#" onClick={signupLink}>Sign Up</a></p>
                    </div>
                </form>
            </div>
            <div className = 'form-box signup'>
                <form action = ''>
                    <h1>Sign Up</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" 
                        placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />I agree to the terms & conditions</label>
                    </div>
                    <button type='submit'>Sign Up</button>
                    <div className="signup-link">
                        <p>Already Have an account? <a href="#" onClick={loginLink}>Log In</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default LoginSignup;