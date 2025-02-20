import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1>I'm <span> Jijo Jacob</span> </h1>
      <h2 className="animated-titles">
        <span>Full Stack Developer</span>
        <span>Store Manager</span>
        <span>Options Trader</span>
        <span>Web Designer</span>
        <span>Investor</span>
      </h2>
      <p>I am a full-stack developer from Kerala, India, with experience in freelance web development and a background in stock trading and management.</p>

      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
