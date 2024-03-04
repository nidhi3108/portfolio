
import React, { useContext } from "react";
import "./Project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import lms from "../../img/lms.png";
import todo from "../../img/todo.jpg";
import podcast from "../../img/podcast.jpg";
import resume from "../../img/resumes.png";
import { themeContext } from "../../Context";
import { NavLink } from "react-router-dom";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return ( 
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white':''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={lms} alt="" />
          <button className="button n-button">View</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={todo} alt="" />
          <button className="button n-button">View</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={podcast} alt="" />
          <button className="button n-button">View</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={resume} alt="" />
          <button className="button n-button">View</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;