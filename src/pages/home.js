import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPython, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="landing-page">
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
<div id="about" className="about-container">
  <div className="image-box">
    <img src={process.env.PUBLIC_URL + '/about.jpeg'} alt="About Image" className="about-image" />
  </div>
  <div className="text-box">
    <h2 className="about-title">About Me</h2>
    <h3 className="about-subtitle">A dedicated and passionate computer science graduate based in San Francisco, California 📍</h3>
    <p className="about-paragraph">As an accomplished computer science graduate, I possess a diverse skill set in both front-end and back-end development. My expertise includes proficiency in HTML, CSS, JavaScript, React, Java, C++, MongoDB, and more. With a passion for designing visually appealing websites, my focus lies in creating and maintaining responsive platforms that offer seamless user experiences. Beyond my technical abilities, I am a highly collaborative team player, thriving in environments that encourage cross-functional cooperation. By combining my technical acumen with my strong interpersonal skills, I am committed to delivering exceptional results and contributing to the success of any project.</p>
  </div> 
</div>
  <section id="portfolio" class="section">
  <div class="portfolio-container">
    <div class="portfolio-title">
      <h2>Portfolio</h2>
      <p>Check out some of my projects</p>
    </div>
    <div class="projects-container">
      <div class="project">
        <h3>Expense Tracker</h3>
        <div class="project-image">
        <img src={process.env.PUBLIC_URL + '/expense.png'} alt="Expense Image" className="expense-image" />
        </div>
        <div class="project-buttons">
  <div class="button-row">
    <button>React</button>
    <button>Next.js</button>
    <button>Prisma</button>
  </div>
  <div class="button-row">
    <button>PostgresSQL</button>
    <button>Javascript</button>
  </div>
</div>
        <div class="project-actions">
          <a href="https://github.com/chrisxsolo/expensetracker" target="_blank"><i class="fab fa-github"></i> GitHub</a>
          <a href="https://expensetracker-kohl-gamma.vercel.app/" target="_blank">Live Demo</a>
        </div>
      </div>
      <div class="project">
        <h3>Photography Blog</h3>
        <div class="project-image">
        <img src={process.env.PUBLIC_URL + '/blog.png'} alt="Expense Image" className="blog-image" />
        </div>
        <div class="project-buttons">
  <div class="button-row">
    <button>React</button>
    <button>Next.js</button>
    <button>Prisma</button>
  </div>
  <div class="button-row">
    <button>PostgresSQL</button>
    <button>Javascript</button>
  </div>
</div>
        <div class="project-actions">
          <a href="https://github.com/chrisxsolo/blog" target="_blank"><i class="fab fa-github"></i> GitHub</a>
          <a href="https://blog-six-psi-28.vercel.app/" target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </section>
  );
};

export default Home;
