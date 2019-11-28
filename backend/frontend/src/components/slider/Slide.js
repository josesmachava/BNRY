
import React, { Fragment } from 'react'

const Slide = ({ image, legend}) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    backgroundSize: 'contain',
    
  
    
  }
  const legendStyles = {
    display: 'block',
    marginTop: '570px',
    backgroundColor: 'whitesmoke',
    height: 'auto',
    padding: '20px',
  }
  return <div className="slide" style={styles}> <span style={legendStyles}>{legend}</span></div> 
}

export default Slide