import React, { useEffect, useRef } from 'react';
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
    image.style.borderRadius = '100%';
    image.style.width = '65%';
    image.style.height = '65%';
    image.style.transition = 'all 0.5s ease';
  };

  const handleImageClick = () => {
    const image = imageRef.current;

    // Apply animation on image click
    image.style.transform = 'rotate(360deg)';
  };

  return (
    <div className="landing-page">
      <div className="text-container">
        <h1>Software Developer 👋</h1>
        <p>Hi, I'm Chris Solorzano. Recent Computer Science Graduate based in San Francisco. 📍</p>
      </div>
      <div className="image-container">
        <img ref={imageRef} className="image" src={imageSrc} alt="Image" onClick={handleImageClick} />
      </div>
    </div>
  );
};

export default Home;
