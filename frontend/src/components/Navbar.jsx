import React from 'react'
import './Navbar.css'

const Navbar = () => {

    const handleLogIn = (e) =>{
        document.open("/login")
    }
    const handleSignUp = (e) =>{
        document.open("/signup")
    }


    return (
        <nav className="nav">
            <div className="navpart">
                <span className="brandname">LinkShrink</span>
            </div>
            <div className="navpart">
                <ul className="navlinks">
                    <a href="/"><li className="navlink">Home</li></a>
                    <a href="/shrink"><li className="navlink">Shrink</li></a>
                    <a href="/contact"><li className="navlink">Contact</li></a>
                    <a href="/about"><li className="navlink">About</li></a>
                    {/* <a href=""><li className="navlink">Home</li></a>
                <a href=""><li className="navlink">Home</li></a> */}
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