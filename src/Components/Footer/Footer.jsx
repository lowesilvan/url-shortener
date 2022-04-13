import React from 'react'
import facebook from '../../Assets/images/icon-facebook.svg'
import twitter from '../../Assets/images/icon-twitter.svg'
import pinterest from '../../Assets/images/icon-pinterest.svg'
import instagram from '../../Assets/images/icon-instagram.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-head"><h1>Shortly</h1></div>
            <div className="footer-grid">
                <div className="footer-item">
                    <h4>Features</h4>
                    <ul>
                        <li><a href="#">Link Shortening</a> </li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Blogs</a> </li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a> </li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <div><a href="#"><img src={facebook} alt="facebook icon" className="footer-icon" /></a></div>
                    <div><a href="#"><img src={twitter} alt="twitter icon" className="footer-icon" /></a></div>
                    <div><a href="#"><img src={pinterest} alt="pinterest icon" className="footer-icon" /></a></div>
                    <div><a href="#"><img src={instagram} alt="instagram icon" className="footer-icon" /></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
