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
import { BrowserRouter, Routes,Route } from "react-router-dom";
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
      {/* <BrowserRouter> */}
    {/* <Header/> */}
    {/* <Routes>
      <Route element={<Navbar/>} path="/"/>
      <Route element={<Intro/>} path="/intro"/>
      <Route element={<Education/>} path="education"/>
      <Route element={<Skill/>} path="/skill"/>
      <Route element={<Experience/>} path="/experience"/>
      <Route element={<Project/>} path="/project"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<Footer/>} path="/footer"/>
    </Routes>
    </BrowserRouter> */}
    </div>
  
  );
}

export default App;
