import React from 'react'
import './Intro.css'
import { Link } from 'react-scroll'
import hire_me from '../../assets/hireme.png'
import image from '../../assets/my-image.png'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro-content">
        <span className="greeting">Hello,</span>
        <span className="introduction">
            I'm <span className='intro-name'>Akinrinola Muiz Ayomide</span> <br />
           <span className='title'> A FrontEnd Developer</span>
        </span>
        <p className='intro-text'>  A skilled Frontend Developer with experience for crafting exceptional visually appealing and user friendly websites.</p>
        <Link ><button className='btn'><img src={hire_me} alt="" className="icon"/>Hire Me</button></Link>
      </div>
      <div className="image">
      <img src={image} alt=""/>
      </div>
    </div>
  )
}

export default Intro
