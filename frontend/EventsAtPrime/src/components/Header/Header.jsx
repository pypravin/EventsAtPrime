// components/Header/Header.jsx
import { Link } from "react-router-dom"; // ✅ Corrected
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="logo">EventsAtPrime</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
