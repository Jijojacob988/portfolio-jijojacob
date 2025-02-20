import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest works</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <img src={work.w_img} alt="" />
              <p>{work.w_desc}</p>
              
              <div className="mywork-buttons">
                <button onClick={() => window.open(work.live_demo, "_blank")}>Live Demo</button>
                <button onClick={() => window.open(work.github, "_blank")}>GitHub</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore" onClick={() => window.open("https://github.com/Jijojacob988", "_blank", "noopener,noreferrer")}>
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
