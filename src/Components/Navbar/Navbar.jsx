import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/tech logo.png";
import contact_icon from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from '../../assets/bars.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)


  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" style={{cursor: 'pointer'}} />
      <div className="desktop-menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menu-list"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="menu-list"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="menu-list"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="menu-list"
        >
          Clients
        </Link>
      </div>
      <button
      style={{cursor: 'pointer'}}
        className="btnn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact_icon} alt="" className="icon" />
        Contact Me
      </button>
      

      
      <img src={menu} alt="" className="mobile-menu" style={{cursor: 'pointer'}} onClick={()=>setShowMenu(!showMenu)} />
      <div className="menu" style={{display: showMenu? 'flex':'none'}}>
        <Link
          activeClass="active"
          
          to="intro"
          spy={true}
          
          smooth={true}
          offset={-100}
          duration={500}
          className="list"
          onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="list"
          onClick={()=>setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-30}
          duration={500}
          className="list"
          onClick={()=>setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="list"
          onClick={()=>setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="list"
          onClick={()=>setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
