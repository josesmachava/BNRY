

import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import LeftArrow from './LeftArrow';
import Slide from './Slide';
import RightArrow from './RightArrow';






const Slider = () => {
    const [data, setData] = useState({photos: [] });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
   
    
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:5001',
        );
        setData(result.data);
      };
      fetchData();
    }, []);

    const goToPrevSlide = () => {
    
    }
    
    const goToNextSlide = () => {
      setCurrentIndex(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }));
    }
    
    return (
      <div className="slider">
      <div className="slider-wrapper"
      style={{
        transform: `translateX(${setTranslateValue}px)`,
        transition: 'transform ease-out 0.45s'
      }}>
      {
        data.photos.map((image, i) => (
        
          <Slide key={i} image={image.url}  legend={image.description}/>
          
          
        ))
      }

      </div>



        <LeftArrow  goToPrevSlide={goToPrevSlide}   	/>
        <RightArrow goToNextSlide={goToNextSlide}    />
      </div>
    );
  }
export default Slider;