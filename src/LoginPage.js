import React, { useState } from 'react';
import "./index.css"

function LoginForm() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-header">
          <h1>Welcome</h1>
          <p>Please sign in to your account</p>
        </div>
        <div className="button-group">
          <button onClick={() => setLoginFormVisible(true)} className={`button login-button ${isLoginFormVisible ? 'active' : ''}`}>Login</button>
          <button onClick={() => setLoginFormVisible(false)} className={`button register-button ${!isLoginFormVisible ? 'active' : ''}`}>Register</button>
        </div>
        {isLoginFormVisible ? (
          <LoginFormFields />
        ) : (
          <RegisterFormFields />
        )}
      </div>
    </div>
  );
}

function LoginFormFields() {
  return (
    <>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="******************" />
      </div>
      <div className="form-footer">
        <button type="button" className="submit-button">Sign In</button>
        <a href="#">Forgot Password?</a>
      </div>
    </>
  );
}

function RegisterFormFields() {
  return (
    <>
      <div className="input-group">
        <label htmlFor="newUsername">Username</label>
        <input id="newUsername" type="text" placeholder="Username" />
      </div>
      <div className="input-group">
        <label htmlFor="newEmail">Email</label>
        <input id="newEmail" type="email" placeholder="Email" />
      </div>
      <div className="input-group">
        <label htmlFor="newPassword">Password</label>
        <input id="newPassword" type="password" placeholder="******************" />
      </div>
      <div className="form-footer">
        <button type="button" className="register-button">Register</button>
      </div>
    </>
  );
}

export default LoginForm;
