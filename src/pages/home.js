import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPython, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="landing-page">
      <div className="image-text-container">
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + '/chris.JPG'} alt="Profile Image" className="image" />
        </div>
        <div className="text-container">
          <h1>Software Developer 👋</h1>
          <p id="title">Hi, I'm Chris Solorzano. A passionate computer science graduate based in San Francisco, California 📍</p>
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/chris-solorzano/">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://github.com/">
              <FaGithub className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="tech-stack-container">
        <h2 className="tech-stack-wording">Tech Stack</h2>
        <div className="tech-stack-line"></div>
        <div className="tech-stack-icons">
          <FaHtml5 className="tech-icon" />
          <FaCss3 className="tech-icon" />
          <FaJs className="tech-icon" />
          <FaReact className="tech-icon" />
          <FaJava className="tech-icon" />
          <FaPython className="tech-icon" />
        </div>
      </div>
      <div className="about-container">
        <div className="image-box">
          {/* Add your image here */}
        </div>
        <div className="text-box">
          <h2 className="about-title">About Me</h2>
          <h3 className="about-subtitle">Subtitle</h3>
          <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, dolor eu hendrerit placerat, dolor tortor facilisis quam, sed pulvinar velit risus sed turpis. Morbi lacinia euismod lectus, ac consectetur libero mollis sit amet.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
