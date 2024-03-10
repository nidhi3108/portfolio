import React from 'react'
import './Navbar.css';
import {NavLink} from "react-router-dom";
import Toggle from '../Toggle/Toggle';
// import { NavLink } from 'react-router-dom';

const Navbar=()=>{
    return(
        <div className='n-wrapper'>
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
                    {/* <li><NavLink to="/contact"></NavLink></li> */}
                </ul>
               </div>
               <button className="button n-button">Contact-us</button>
            </div>
        </div>
    )
}

export default Navbar