import React from 'react'
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
const Navbar=()=>{
    return(
        <div className='n-wrapper'>

            <div className="n-left">
                <div className="n-name">Nidhi</div>
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
        </div>
    )
}

export default Navbar