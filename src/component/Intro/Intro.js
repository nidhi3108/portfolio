import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";

// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>

      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span style={{color: darkMode?'white':''}} >Hey! I am</span>
            <span>Nidhi Verma</span>
            <span style={{color: darkMode?'white':''}}>
            An accomplished Computer Science graduate with significant experience in WordPress development. Exhibited proficiency in problem-solving and teamwork, consistently delivering top-tier solutions.
            </span>
          </div>

          <button className="button i-button">
            Hire Me
          </button>
          <div className="i-icon">
          <NavLink to="https://github.com/nidhi3108" target="_blank"><img src={github} alt="" /></NavLink>
          <NavLink to="https://www.linkedin.com/in/nidhi3108/" target="_blank"> <img src={linkedin} alt="" /></NavLink>
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <img src={glassesimoji} alt="" />
          <div style={{top: "-4%",left: '68%'}} className='floating-div'>
            <FloatingDiv  image={crown} txt1='Front-end' txt2='Developer'/>
          </div>
          <div className="blur" style={{background:'rgb(236 210 255)'}}></div>
          <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
      </div>
    </>
  )
}
export default Intro