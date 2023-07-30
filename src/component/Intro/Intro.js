import React, { NavLink, useContext } from 'react'
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
              Full stack developer with high level of experience in we designing and mern stack developement
            </span>
          </div>

          <button className="button i-button">
            Hire Me
          </button>
          <div className="i-icon">


            <img src={github} alt="" />

            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <img src={glassesimoji} alt="" />
          <div style={{top: "-4%",left: '68%'}}>
            <FloatingDiv  image={crown} txt1='Web' txt2='Developer'/>
          </div>
          <div style={{top: "18rem",left: '0rem'}}>
            <FloatingDiv  image={thumbup} txt1='Best Design' txt2='Award'/>
          </div>
          {/* blur divs */}
          <div className="blur" style={{background:'rgb(236 210 255)'}}></div>
          <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
      </div>
    </>
  )
}
export default Intro