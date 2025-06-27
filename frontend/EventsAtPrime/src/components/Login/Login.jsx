// components/Login/Login.jsx
import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="you@example.com" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="••••••••" />

        <button type="submit">Login</button>

        <p className="auth-footer">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
