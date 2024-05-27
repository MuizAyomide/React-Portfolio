import React from "react";
import "./Works.css";
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
    <div className="work">
      <span className="work-title">My Portfolio</span>
      <span className="work-desc">
        As a frontend developer, I've had the opportunity to work on a diverse
        range of projects, each one showcasing my ability to translate designs
        into responsive, interactive, and visually appealing web applications.
        <br />Here are a few examples of my work:
      </span>
      <div className="work-images">
        <img src={portfolio1} alt="" className="work-image" />
        <img src={portfolio2} alt="" className="work-image" />
        <img src={portfolio6} alt="" className="work-image" />
        <img src={portfolio5} alt="" className="work-image" />
        <img src={portfolio4} alt="" className="work-image" />
        <img src={portfolio3} alt="" className="work-image" />
      </div>
      <div className="work-btn">See More</div>
    </div>
  );
};

export default Works;
