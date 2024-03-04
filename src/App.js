import Navbar from "./component/Navbar/Navbar";
import './App.css'
import Intro from "./component/Intro/Intro.js";
import Experience from "./component/experience/Experience.js";
import Project from "./component/Projects/Project";
import Skill from "./component/Skills/Skill";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Education from "./component/Education/Education.js";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar/>
      <Intro/>
      <Education/>
      <Skill/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
   
    </div>
  
  );
}

export default App;
