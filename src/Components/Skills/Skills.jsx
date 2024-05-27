import React from "react";
import "./Skills.css";
import UIdesign from "../../assets/ui-design.png";
import WebDesing from "../../assets/website-design.png";
import Appdesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <div className="skills">
      <span className="skillTitle"> What I do </span>
      <span className="skills-descr">
        As a seasoned frontend developer, I have a deep understanding of HTML,
        CSS, and JavaScript, the core technologies that power the web. I
        leverage my expertise in these fundamental languages to build robust and
        responsive web applications that deliver optimal user experiences.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={UIdesign} alt="" />
          <div className="skillbartext">
            <h2>Frontend Frameworks</h2>
            <p>
              Experienced in working with a popular framework like React.js, and
              Ability to leverage the features of this framework to build
              scalable and maintainable web applications
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={WebDesing} alt="" />
          <div className="skillbartext">
            <h2>UI/UX Design</h2>
            <p>Collaboration with designers to translate design mockups into intuitive and visually appealing user interfaces
and Understanding of user experience principles to create seamless and engaging interactions</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={Appdesign} alt="" />
          <div className="skillbartext">
            <h2>Responsive Design</h2>
            <p>Expertise in implementing responsive design techniques to ensure optimal user experiences across devices, 
Proficient in using media queries, flexible grids, and mobile-first development approaches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
