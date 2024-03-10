import React, { useContext } from "react";
import "./Experience.css";
import heartimoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from '../experience/NidhiVerma.pdf'
import { themeContext } from "../../Context";
import { NavLink } from "react-router-dom";
const Experience = () => {
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="leftexp">
        <span style={{color: darkMode?'white':''}}>My </span>
        <span>Experience</span>
        <span style={{color: darkMode?'white':''}}>
        I began with a MERN stack summer training during college, followed by a 3-month frontend development internship.
          <br/>
          Currently, I'm a Junior Frontend Developer at BeeSolver Technology Pvt. Ltd., contributing to innovative solutions.
        </span>
        <NavLink to={Resume} target="_blank" download>

        <button className="button s-button">Download CV</button>
        </NavLink>
        <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div className="rightcard">
        <div style={{left:'14rem'}}>
          <Card 
          emoji={heartimoji}
          heading={'Jr. Frontend Developer'}
          detail={'Beesolver Technology Pvt Ltd'}
          description={"Collaborated with in-house web designers to create innovative UI design."}
          />

        </div>
         
        <div style={{top:"12rem",left:"-4rem"}}>
          <Card 
          emoji={glasses}
          heading={'Web Developer Intern'}
          detail={'Netgains-it & digital marketing'}
          description={"Work on developing web applications on Shopify and WordPress to meet client needs"}
          />

        </div>
        <div style={{top:"19rem",left:"12rem"}}>
          <Card 
          emoji={humble}
          heading={'Summer Trainne - MERN Stack'}
          detail={'Digipodium Pvt Ltd'}
          description={'Acquiring skills for MERN stack development.'}
          />

        </div>
        <div className="blur s-blur" style={{background: "var(--purple)"}}></div>      </div>

    </div>
  );
};
export default Experience;
