import React from 'react';
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from  '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from  '@iconscout/react-unicons/icons/uil-linkedin'
import Github from  '@iconscout/react-unicons/icons/uil-github'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
const Footer=()=>{
    return (
     <div className="footer">
        <img src={Wave} alt=""  style={{width:'100%'}}/>
        <div className="f-content">
          <span>nidhivr310@gmail.com</span>
          <div className="f-icons">
           <NavLink to="https://www.linkedin.com/in/nidhi3108/" target="_blank"> <Linkedin color='white' size='3rem'/></NavLink>
          <NavLink to="https://github.com/nidhi3108" target="_blank"><Github color='white' size='3rem'/></NavLink>  
          </div>
        </div>
     </div>
    )
}
export default Footer