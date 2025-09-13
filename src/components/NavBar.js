import { NavLink } from "react-router-dom";
import '../styles/NavBar.css'

export default function NavBar () {
    return (
        <nav className="navbar">
            <NavLink to="/" className="logo">
                SKILL<span>SWAP</span>
            </NavLink>
            <div className="links">
                <NavLink to="/" className="link">HOME</NavLink>
                <NavLink to="/browse" className="link">BROWSE SKILLS</NavLink>
                <NavLink to="/my-skills" className="link">MY SKILLS</NavLink>
                <NavLink to="/messages" className="link">MESSAGES</NavLink>
                <NavLink to="/credits" className="link">CREDITS</NavLink>
            </div>
            <div className="auth">
                <button className="auth-btn">LOGIN</button>
                <button className="auth-btn">SIGN UP</button>
            </div>
        </nav>
    )
}
