import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import imageSrc from '../components/chris.JPG';

const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    // Add event listener to apply animation on image load
    image.addEventListener('load', handleImageLoad);

    // Cleanup function to remove event listener
    return () => {
      image.removeEventListener('load', handleImageLoad);
    };
  }, []);

  const handleImageLoad = () => {
    const image = imageRef.current;

    // Apply styling and animation to the image
    image.style.borderRadius = '50%';
    image.style.width = '300px';
    image.style.height = '300px';
  };

  const handleImageClick = () => {
    const image = imageRef.current;

  };

  return (
    <div className="landing-page">
      <div className="text-container">
        <h1>Software Developer 👋</h1>
        <p id = "title">Hi, I'm Chris Solorzano. Recent Computer Science graduate based in San Francisco. 📍</p>
        <div className="icon-container">
          <FaLinkedin className="icon" onClick={() => window.open('www.linkedin.com/in/chrisxsolo', '_blank')} />
          <FaGithub className="icon" onClick={() => window.open('https://github.com/chrisxsolo', '_blank')} />
        </div>
      </div>
      <div className="image-container">
        <img ref={imageRef} className="image" src={imageSrc} alt="Image" onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Home;
