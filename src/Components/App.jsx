import React from 'react';

import '../Css/App.css'; // Adjust the path to match the directory structure
import Navbar from './Navbar'; // Adjust the path as needed
import FullscreenBackground from './FullscreenBackground'; // Change to FullscreenBackground
import Container from './Container'; // Adjust this path





function App() {
  return (
    <div className="App">
      <Navbar />
      <FullscreenBackground />
      <Container />

      {/* Other components and content */}
    </div>
  );
}

export default App;
