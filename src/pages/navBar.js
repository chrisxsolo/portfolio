import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    // Add slide class to the modal element
    const modal = document.getElementById('nav-modal');
    modal.classList.add('slide');
  };

  return (
    <nav id="navbar" className="navbar">
      <div className="logo">Chris.dev</div>
      <div className={`hamburger ${isModalOpen ? 'open' : ''}`} onClick={toggleModal}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="nav-modal" className={`nav-modal ${isModalOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><a href="#">Projects</a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
