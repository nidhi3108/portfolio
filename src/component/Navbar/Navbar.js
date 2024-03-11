import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll'

<<<<<<< Updated upstream
const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className="n-left">
        <div className="n-name">Click it</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType: "none"}}>
            <li><Link to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link to="education" spy={true} smooth={true}>Education</Link></li>
            <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
            <li><Link to="experience" spy={true} smooth={true}>Experience</Link></li>
            <li><Link to="project" spy={true} smooth={true}>Project</Link></li>
          </ul>
=======
            <div className="n-left">
                <div className="n-name">xyz</div>
                <Toggle/>
            </div>
            <div className="n-right">
               <div className="n-list">
                <ul style={{listStyleType:"none"}}>
                    <li>Home</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Project</li>
                </ul>
               </div>
               <button className="button n-button">Contact-us</button>
            </div>
>>>>>>> Stashed changes
        </div>
        <button className="button n-button"><Link to="contact" spy={true} smooth={true}>Contact-us</Link></button>
      </div>
    </div>
  )
}

export default Navbar