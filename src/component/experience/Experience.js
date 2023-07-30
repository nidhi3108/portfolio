import React, { useContext } from "react";
import "./Experience.css";
import heartimoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from '../experience/NidhiVermaResume.pdf'
import { themeContext } from "../../Context";
const Experience = () => {
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="leftexp">
        <span style={{color: darkMode?'white':''}}>My </span>
        <span>Experience</span>
        <span style={{color: darkMode?'white':''}}>
          Lorem ipsum dolor sit amet  elit. Molestias
          reiciendis asperiores eaque voluptatem accusamus velit, vitae
          <br/>
          nesciunt neque, molestiae, corrupti ratione! Tempora, rerum impedit.
          Sequi id maiores mollitia amet. Sed.
        </span>
        <a href={Resume} download>

        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div className="rightcard">
        <div style={{left:'14rem'}}>
          <Card 
          emoji={heartimoji}
          heading={'Design'}
          detail={'Figma,Skecth,Photoshop,Adobe'}
          />

        </div>
         
        <div style={{top:"12rem",left:"-4rem"}}>
          <Card 
          emoji={glasses}
          heading={'Developer'}
          detail={'Html,Css,Javascript,React'}
          />

        </div>
        <div style={{top:"19rem",left:"12rem"}}>
          <Card 
          emoji={humble}
          heading={'UI/UX'}
          detail={'Lore ipsum dummy content use in section in this'}
          />

        </div>
        <div className="blur s-blur" style={{background: "var(--purple)"}}></div>      </div>

    </div>
  );
};
export default Experience;
