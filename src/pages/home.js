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
        <img src={process.env.PUBLIC_URL + '/about.jpeg'} alt="About Image" className="about-image" />
        </div>
        <div className="text-box">
          <h2 className="about-title">About Me</h2>
          <h3 className="about-subtitle">A dedicated and passionate computer science graduate based in San Francisco, California 📍</h3>
          <p className="about-paragraph">As an accomplished computer science graduate, I possess a diverse skill set in both front-end and back-end development. My expertise includes proficiency in HTML, CSS, JavaScript, React, Java, C++, MongoDB, and more. With a passion for designing visually appealing websites, my focus lies in creating and maintaining responsive platforms that offer seamless user experiences. Beyond my technical abilities, I am a highly collaborative team player, thriving in environments that encourage cross-functional cooperation. By combining my technical acumen with my strong interpersonal skills, I am committed to delivering exceptional results and contributing to the success of any project.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
