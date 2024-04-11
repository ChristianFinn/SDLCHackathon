import React, { useState } from 'react';
import "./index.css";

function LoginForm() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login Submitted");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here
    console.log("Register Submitted");
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-header">
          <h1>Welcome</h1>
          <p>Please sign in to your account</p>
        </div>
        <div className="button-group">
          <button onClick={() => setLoginFormVisible(true)} type="button" className={`button login-button ${isLoginFormVisible ? 'active' : ''}`}>Login</button>
          <button onClick={() => setLoginFormVisible(false)} type="button" className={`button register-button ${!isLoginFormVisible ? 'active' : ''}`}>Register</button>
        </div>
        {isLoginFormVisible ? (
          <LoginFormFields handleSubmit={handleLoginSubmit} />
        ) : (
          <RegisterFormFields handleSubmit={handleRegisterSubmit} />
        )}
      </div>
    </div>
  );
}

function LoginFormFields({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="Username" required />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="******************" required />
      </div>
      <div className="form-footer">
        <button id="login-button" type="button" className="submit-button">Sign In</button>
        <a href="#">Forgot Password?</a>
      </div>
    </form>
  );
}

function RegisterFormFields({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="newUsername">Username</label>
        <input id="newUsername" type="text" placeholder="Username" required />
      </div>
      <div className="input-group">
        <label htmlFor="newEmail">Email</label>
        <input id="newEmail" type="email" placeholder="Email" required />
      </div>
      <div className="input-group">
        <label htmlFor="newPassword">Password</label>
        <input id="newPassword" type="password" placeholder="******************" required />
      </div>
      <div className="form-footer">
        <button type="submit" className="register-button">Register</button>
      </div>
    </form>
  );
}

export default LoginForm;
