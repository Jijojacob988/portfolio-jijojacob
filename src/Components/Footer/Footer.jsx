import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import logo from '../../assets/Jij.png'
import user_icon from '../../assets/user_icon.svg'
import fb_icon from '../../assets/icon_facebook.svg'
import insta_icon from '../../assets/icon_instagram.svg'
import linkedin_icon from '../../assets/icon_linkedin.svg'

import twitter_icon from '../../assets/icon_twitter.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" />
            <p>"It always seems impossible until it’s done." </p>
        </div>
        <div className="footer-top-right">
    <h1>Stay Connected With Me!</h1>
    <div className="footer-icons">
    <a href="https://www.linkedin.com/in/jijojacob988" target="_blank" rel="noopener noreferrer">
        <img src={linkedin_icon} alt="LinkedIn" />
    </a>
    <a href="https://www.instagram.com/jijojacob_?igsh=MnhqYnh2dWQ3ZDNn" target="_blank" rel="noopener noreferrer">
        <img src={insta_icon} alt="Instagram" />
    </a>
    <a href="https://www.facebook.com/share/1BE1iHMebC/" target="_blank" rel="noopener noreferrer">
        <img src={fb_icon} alt="Facebook" />
    </a>
    <a href="https://x.com/Jijojacob_?t=jYdFsHyJA0FzoWK3PrE-bg&s=09" target="_blank" rel="noopener noreferrer">
        <img src={twitter_icon} alt="Twitter" />
    </a>
</div>

</div>

        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Jijo Jacob | Built with 💚</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
