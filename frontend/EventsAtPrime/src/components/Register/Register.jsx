// components/Register/Register.jsx
import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h2>Register</h2>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="John Doe" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="you@example.com" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="••••••••" />

        <button type="submit">Create Account</button>

        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
