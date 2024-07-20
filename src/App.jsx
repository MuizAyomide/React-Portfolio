import React from "react";
import './App.css'
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Works from "./Components/Works/Works";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import video from "./assets/video-2.mp4"

const App = () => {
  return (
    
    <div className="app">
      <>
      <video autoPlay loop muted className="bg-vid">
    <source src={video} type="video/mp4" />
  </video>
        <Navbar />
        <Intro />
        
        <Skills />
        
        <Works />
        <Contact />
        <Footer />
      </>
    </div>
  );
};

export default App;
