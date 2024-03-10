import Navbar from "./component/Navbar/Navbar";
import './App.css'
import Intro from "./component/Intro/Intro.js";
import Experience from "./component/experience/Experience.js";
import Project from "./component/Projects/Project";
import Skill from "./component/Skills/Skill";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Education from "./component/Education/Education.js";
import {themeContext} from "./Context";
import {useContext} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >


        <BrowserRouter>
        <Navbar/>
          <div id={"home"}>
            <Intro/>
          </div>
          <div id={"education"}>
            <Education id={"education"}/>
          </div>
          <div id={"skills"}>
            <Skill id={"skills"}/>
          </div>
          <div id={"experience"}>
            <Experience id={"experience"}/>
          </div>
          <div id={"project"}>
            <Project id={"project"}/>
          </div>
          <div id={"contact"}>
            <Contact id={"contact"}/>
          </div>
          <Footer/>

        </BrowserRouter>
      </div>
    </>

  );
}

export default App;
