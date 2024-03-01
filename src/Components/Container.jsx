import React, { useEffect } from 'react';
import logo from '../logo.png'; 

const Container = () => {
  useEffect(() => {
    const fadeInElement = (element, delay) => {
      setTimeout(() => {
        let opacity = 0;
        const fadeInInterval = setInterval(() => {
          opacity += 0.05 * (1 - opacity); // Easing effect
          element.style.opacity = opacity;
          if (opacity >= 1) {
            clearInterval(fadeInInterval);
          }
        }, 50);
      }, delay);
    }

    const firstPart = document.getElementById('first-part');
    const secondPart = document.getElementById('second-part');
    const at = document.getElementById('at');
    const button = document.querySelector('.slogan .btn');

    firstPart.style.opacity = 0;
    secondPart.style.opacity = 0;
    at.style.opacity = 0;
    button.style.opacity = 0;

    fadeInElement(firstPart, 500);
    setTimeout(() => {
      fadeInElement(secondPart, 0);
    }, 2000);
    setTimeout(() => {
      fadeInElement(at, 0);
    }, 3500);
    setTimeout(() => {
      fadeInElement(button, 0);
    }, 3500);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Why should you choose <img src={logo} alt="Navbar Logo" className="inline-logo" />  ?</h1>
      </div>
      <div className="content">
        <div className="box">
          <h2>✔ zafar</h2>
          <p>Some text about the equipment.</p>
        </div>
        <div className="box">
          <h2>✔ har</h2>
          <p>Some text about the environment.</p>
        </div>
        <div className="box">
          <h2>✔ liten</h2>
          <p>Some text about the membership.</p>
        </div>
        <div className="box">
          <h2>✔ ZEBB</h2>
          <p>Some text about the pricing.</p>
        </div>
      </div>
    </div>
  );
}

export default Container;
