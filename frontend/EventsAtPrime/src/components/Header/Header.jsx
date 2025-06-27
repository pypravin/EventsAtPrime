// components/Header/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="logo">🎉 Events@Prime</h1>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
