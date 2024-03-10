import React, { useContext } from "react";
import "./Education.css";
import heartimoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
// import Resume from '../experience/NidhiVermaResume.pdf'
import { themeContext } from "../../Context";
const Education = () => {
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="leftexp">
        <span style={{color: darkMode?'white':''}}>My </span>
        <span>Education</span>
        <span style={{color: darkMode?'white':''}}>
        I earned a B.Tech in Computer Science and Engineering from Dr. APJ Abdul Kalam Technical University in Lucknow in 2023. Previously, I completed my Higher Secondary (12th Grade) in Mahmudabad in 2018, achieving 84%.
        <br/>
        I began my academic journey with Secondary (10th Grade) education in Mahmudabad in 2016, securing 91%.
      
        </span>
        {/* <a href={Resume} download>

        <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blurl" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div className="rightcard">
        <div style={{left:'14rem'}}>
          <Card className="card"
          emoji={heartimoji}
          heading={'B.Tech in CSE'}
          detail={'R.R. Institute Of Modern Technology'}
          description={'07/2019-07/2023'}
          />

        </div>
         
        <div style={{top:"12rem",left:"-4rem"}}>
          <Card className="card"
          emoji={glasses}
          heading={'Senior Secondary Education'}
          detail={'Sita Inter College'}
          description={'07/2017-07/2018'}
          />

        </div>
        <div style={{top:"19rem",left:"12rem"}}>
          <Card className="card"
          emoji={humble}
          heading={'Secondary Education'}
          detail={'Ram Janki Inter College'}
          description={'07/2015-07/2016'}
          />

        </div>
        <div className="blur s-blur" style={{background: "var(--purple)"}}></div>      </div>

    </div>
  );
};
export default Education;
