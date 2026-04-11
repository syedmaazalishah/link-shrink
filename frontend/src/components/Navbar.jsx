import React from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const handleLogIn = (e) => {
        navigate("/login")
    }
    const handleSignUp = (e) => {
        navigate("/signup")
    }
    return (
        <nav className="nav">
            <div className="navpart">
                <span className="brandname cursor-pointer hover:underline" onClick={()=>navigate("/")} >Shrink.It</span>
            </div>
            <div className="navpart">
                <ul className="navlinks">
                    <NavLink to="/"><li className="navlink">Home</li></NavLink>
                    <NavLink to="/shrink"><li className="navlink">Shrink</li></NavLink>
                    {/* <NavLink to="/contact"><li className="navlink">Contact</li></NavLink> */}
                    <NavLink to="/about"><li className="navlink">About</li></NavLink>
                </ul>
            </div>
            <div className="navpart">
                <button className="btn" onClick={handleLogIn}>Log In</button>
                <button className="btn" onClick={handleSignUp}>Sign Up</button>
            </div>
        </nav>
    )
}
export default Navbar