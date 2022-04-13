import React from 'react'
import logo from '../../Assets/images/logo.svg'
import Hamburger from '../../Components/Header/Hamburger'
import CloseIcon from '../../Components/Header/CloseIcon'
import { useState } from 'react'

function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const ToggleNav = () => setNavOpen(p => !p)

    return (
        <header>
            <div className="site-logo">
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <nav className={`${navOpen ? '' : 'closed'}`}>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                </ul>
                <hr />
                <div className="register">
                    <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
            <div className="hamburgerMenu">
                <button onClick={ToggleNav}>
                    {navOpen ? <CloseIcon /> : <Hamburger className="menu" />}
                </button>
            </div>
        </header>
    )
}

export default Header
