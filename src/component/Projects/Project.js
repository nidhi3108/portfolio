
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
import { useState } from "react";
import { useEffect } from "react";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [slidesPerView, setSlidesPerView] = useState(1);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    }

    handleResize(); // Call once to set initial state
    window.addEventListener("resize", handleResize); 
   
  }, []);

  // function handleResize() {
  //   if (window.innerWidth < 480) {
  //     setSlidesPerView(1);
  //   } else if (window.innerWidth < 768) {
  //     setSlidesPerView(2);
  //   } else if (window.innerWidth < 992) {
  //     setSlidesPerView(3);
  //   } else if (window.innerWidth < 1200) {
  //     setSlidesPerView(4);
  //   } else {
  //     setSlidesPerView(5);
  //   }
  // }
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
        // breakpoints={{
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 1
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     slidesPerView: 2
        //   },
        //   // when window width is >= 992px
        //   992: {
        //     slidesPerView: 4
        //   }
        // }}
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