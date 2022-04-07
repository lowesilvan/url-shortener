import React from 'react'
import logo from '../../Assets/images/logo.svg'
import Hamburger from '../../Components/Header/Hamburger'
import CloseIcon from '../../Components/Header/CloseIcon'

function Header() {
    return (
        <header>
            <div>
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Features</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Resources</a></li>
                </ul>
                <hr />
                <div className="register">
                    <ul>
                        <li><a href="/">Login</a></li>
                        <li><a href="/">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
            <div className="hamburgerMenu">
                <button>
                    <Hamburger className="menu" />
                    <CloseIcon className="close" />
                </button>
            </div>
        </header>
    )
}

export default Header
