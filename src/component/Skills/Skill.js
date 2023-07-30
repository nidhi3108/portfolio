import React ,{useContext} from "react"
import  "./Skill.css"
import { themeContext } from "../../Context";

import {BsPatchCheckFill} from 'react-icons/bs'

const Skill=  ()=>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return(
        <>
        <section className="skill">
            <div className="heading">
            <span style={{color: darkMode?'white':''}}>What Skill I have</span>
            <br/>
            <span>My Skills</span>
            </div>

            <div className="container skill_container">
                <div className="skill_frontend">
                    <h3>Frontend Developement</h3>
                    <div className="skill_content">
                       
                        <article className="skill_details">
                          
                          <p><BsPatchCheckFill/>CSS</p>
                          <small className="text-light">Intermediate</small>
                        </article>
                        <article className="skill_details">
                          
                          <p><BsPatchCheckFill/>JavaScript</p>
                          <p className="text-light">Intermediate</p>
                        </article>
                        <article className="skill_details">
                          
                          <p><BsPatchCheckFill/>React</p>
                          <small className="text-light">Intermediate</small>
                        </article>
                        <article className="skill_details">
                          
                          <p><BsPatchCheckFill/>Bootstrap</p>
                          <small className="text-light">Intermediate</small>
                        </article>
                        <article className="skill_details">
                      
                          <p>    <BsPatchCheckFill/>Shopify</p>
                          <small className="text-light">Intermediate</small>
                        </article>
                        <article className="skill_details">
                          
                          <p><BsPatchCheckFill/>Wordpress</p>
                          <small className="text-light">Intermediate</small>
                        </article>
                    </div>
                </div>
                <div className="skill_backend">
                <h3>Backend Developement</h3>
                    <div className="skill_content">
                        <article className="skill_details">
                         
                          <p> <BsPatchCheckFill/>Node.js</p>
                          <small className="text-light">skilled</small>
                        </article>
                        <article className="skill_details">
                          
                          <p><BsPatchCheckFill/>Express.js</p>
                          <small className="text-light">Intermediate</small>
                        </article>
                        <article className="skill_details">
                          
                          <p><BsPatchCheckFill/>Mongodb</p>
                          <small className="text-light">Intermediate</small>
                        </article>
                       
                    </div>
                </div>
            </div>
        </section>
        </>
    )
 }
 export default Skill