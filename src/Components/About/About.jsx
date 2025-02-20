import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/prof.jpg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
            <p>I am a passionate fullstack developer dedicated to crafting intuitive and engaging web experiences. With a strong foundation in modern web technologies, I focus on building seamless, responsive, and performance-driven applications.</p>  
<p>My journey in web development is fueled by continuous learning and innovation. I strive to create digital solutions that not only look great but also provide a smooth and efficient user experience.</p>

            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                
                <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Next Js</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default About
