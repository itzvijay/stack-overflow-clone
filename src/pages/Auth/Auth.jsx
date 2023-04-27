import React from 'react'
import { useState } from 'react';
import icon from "../../assets/icon.png"
import AboutAuth from "./AboutAuth"
import "./Auth.css";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  }
  return (

    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className="auth-container-2">
        {!isSignup && <img src={icon} alt='stackOverFlow' className='login-logo' />}
        <form>
          {
            isSignup && (
              <label htmlFor="name">
                <h4>Display Name</h4>
                <input type="text" name="name" id="name" />
              </label>
            )
          }
          <label htmlFor="email">
            <h4>email</h4>
            <input type="email" name='email' id='email' />
          </label>
          <label htmlFor="password">
            <div style={{display:'flex' , justifyContent:"space-between"}}>
              <h4>Password</h4>
             {!isSignup && <p style={{color: "#007ac6", fontSize:"16px"}}>forgot Password</p>}
            </div>
            <input type="password" name='password' id='password' />
            {isSignup && <p>Passwords must have at least 8 characters <br/> and contain at least two of the following: <br/> uppercase letters, lowercase letters, numbers, and symbols.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor="check">
                <input type="checkbox" name="check" id="check" />
                <p style={{fontSize:"13px"}}>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</p>
              </label>
            )
          }
          <button type="submit" className='auth-btn'>{isSignup ? "Sign Up" : "Login"}</button>
          {isSignup && (
            <p style={{color: "#666767", fontSize:"13px"}}>By clicking “Sign up”, you agree to our <span style={{color:"#007ac6"}}>terms of <br/> service</span>, <span>privacy policy</span> and <span style={{color:"#007ac6"}}>cookie policy </span></p>
          )}
        </form>
        <p>
          {isSignup ? "already have an account?" : "Dont Have an account" }
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Login" : "Sign Up"}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth