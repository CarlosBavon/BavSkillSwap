import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        SKILL<span>SWAP</span>
      </NavLink>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Sidebar Menu */}
      <div className={`links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" className="link" onClick={() => setIsOpen(false)}>
          HOME
        </NavLink>
        <NavLink to="/browse" className="link" onClick={() => setIsOpen(false)}>
          BROWSE SKILLS
        </NavLink>
        <NavLink
          to="/my-skills"
          className="link"
          onClick={() => setIsOpen(false)}
        >
          MY SKILLS
        </NavLink>
        <NavLink
          to="/messages"
          className="link"
          onClick={() => setIsOpen(false)}
        >
          MESSAGES
        </NavLink>
        <NavLink
          to="/credits"
          className="link"
          onClick={() => setIsOpen(false)}
        >
          CREDITS
        </NavLink>
      </div>

      <div className="auth">
        <NavLink to="/login" className="auth-btn">
          LOGIN
        </NavLink>
        <NavLink to="/signup" className="auth-btn">
          SIGN UP
        </NavLink>
      </div>
    </nav>
  );
}
