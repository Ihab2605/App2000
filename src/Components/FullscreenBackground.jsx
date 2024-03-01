import React, { useEffect } from 'react';
import backgroundImg from '../GYM.jpg'; // Ensure this path is correct

const FullscreenBackground = () => {
  useEffect(() => {
    const fadeInElement = (element, delay) => {
      setTimeout(() => {
        let opacity = 0;
        const fadeInInterval = setInterval(() => {
          opacity += 0.05; // Simplified for readability
          element.style.opacity = opacity;
          if (opacity >= 1) {
            clearInterval(fadeInInterval);
          }
        }, 50);
      }, delay);
    };

    // Fade in elements
    const firstPart = document.getElementById('first-part');
    const secondPart = document.getElementById('second-part');
    const at = document.getElementById('at');
    const button = document.querySelector('.slogan .btn');

    fadeInElement(firstPart, 500);
    fadeInElement(secondPart, 2000); // Start 1.5s after
    fadeInElement(at, 3500); // Start 3s after
    fadeInElement(button, 4500); // Start 4.5s after to ensure button fades in last

     // Function to handle the jumping animation
     const handleJumping = () => {
      button.classList.add('jumping');

      // Wait for the first jump to finish then start the second jump
      setTimeout(() => {
        button.classList.remove('jumping');

        // Delay the second jump slightly
        setTimeout(() => {
          button.classList.add('jumping');

          // Remove 'jumping' class after the second jump completes
          setTimeout(() => {
            button.classList.remove('jumping');
          }, 1000); // Matches the duration of the jump animation
        }, 50); // Short delay before the second jump starts
      }, 1000); // Matches the duration of the jump animation
    };

    // Start the jumping effect a couple of seconds after the button has fully appeared
    setTimeout(() => {
      handleJumping();
      // Repeat the jumping effect every 4 seconds
      const jumpInterval = setInterval(handleJumping, 4000); // Adjust timing as needed

      // Cleanup
      return () => clearInterval(jumpInterval);
    }, 6000); // Adjust timing based on when you want the jumping to start

  }, []);

  return (
    <div className="fullscreen-bg">
      <img src={backgroundImg} alt="Background Image" />
      <div className="slogan">
        <h2 id="first-part">Find your Zen,</h2>
        <h2 id="second-part">Build your Zone</h2>
        <h3 id="at">At ZenZone Fitness</h3>
        <a href="#become-a-member" className="btn">Become a Member</a>
      </div>
    </div>
  );
};

export default FullscreenBackground;
