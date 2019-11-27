
import React from 'react'

const Slide = ({ image, legend }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}><p>{legend} </p></div>
}

export default Slide