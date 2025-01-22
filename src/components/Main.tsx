import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import linkedinImg from '../assets/images/linkedin_img.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={linkedinImg} alt="Avatar" style={{ filter: 'grayscale(100%)' }} />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/iTsThermo" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/vansh-kanojia/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Vansh Kanojia</h1>
          <p>Full Stack Software Engineer & Cyber Security Professional</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/iTsThermo" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/vansh-kanojia/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;