import React from "react";
import classes from "./styles/Banner.module.css";
import banner1 from "../materials/Banner1.svg";
import banner2 from "../materials/Banner2.svg";
import banner3 from "../materials/Banner3.svg";  

const banners = [banner1, banner2, banner3];

function Banner() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 5000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    return (
      <div className={classes.bannerContainer}>
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className={index === currentIndex ? classes.active : ""}
          />
        ))}
      </div>
    );
  }

export default Banner;