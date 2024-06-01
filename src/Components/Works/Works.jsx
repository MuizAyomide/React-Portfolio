import React from "react";
import "./Works.css";
import portfolio1 from '../../assets/admin-dashboard.png'
import portfolio2 from '../../assets/delivery-website.png'
import portfolio3 from '../../assets/ecommerce.png'
import portfolio4 from '../../assets/university-website.png'
import portfolio5 from '../../assets/chat-app.png'
import portfolio6 from '../../assets/educity.png'


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
        <div className="image-container">
        <img src={portfolio1} alt="" className="work-image"  />
        <a className="image-link" href="" target="_blank">Website</a>
        </div>
        <div className="image-container">
        <img src={portfolio1} alt="" className="work-image"  />
        <a className="image-link" href="" target="_blank">Website</a>
        </div>
        <div className="image-container">
        <img src={portfolio1} alt="" className="work-image"  />
        <a className="image-link" href="" target="_blank">Website</a>
        </div>
        <div className="image-container">
        <img src={portfolio1} alt="" className="work-image"  />
        <a className="image-link" href="" target="_blank">Website</a>
        </div>
        <div className="image-container">
        <img src={portfolio1} alt="" className="work-image"  />
        <a className="image-link" href="" target="_blank">Website</a>
        </div>
        <div className="image-container">
        <img src={portfolio1} alt="" className="work-image"  />
        <a className="image-link" href="" target="_blank">Website</a>
        </div>
      </div>
      <div className="work-btn">See More</div>
    </div>
  );
};

export default Works;
