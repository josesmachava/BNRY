

import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';


let styles = {
  margin: 'auto',
  width: '500px',
  height: '100px'

};
const Slider = () => {
    const [data, setData] = useState({photos: [] });
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://localhost:5001',
        );
        setData(result.data);
      };
      fetchData();
    }, []);
    return (
      
      <div style={styles}>
       
        <Carousel infiniteLoop={true}>
        

         {data.photos.map(photo => (
                  <div key={photo.id}>
            <img src={photo.url} alt={photo.description} />
            <p className="legend">{photo.description}</p>
          </div>
        ))}
        </Carousel>
        <NavLink to='/create'>Add New Photo</NavLink>
        </div>
        

    
    );
  }
export default Slider;