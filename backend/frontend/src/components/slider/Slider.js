

import React from 'react';
import LeftArrow from './LeftArrow';
import Slide from './Slide';
import RightArrow from './RightArrow';
import axios from 'axios';
import "./Slider.css"





class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [],
      currentIndex: 0,
      translateValue: 0
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5001/')
      .then(res => {
        const photos = res.data;
        console.log(res.data)
        this.setState({ photos });
      })
  }
  goToPrevNumber = () => {
  
    return this.state.currentIndex;
  }
  goToPrevSlide = () => {
    if(this.state.currentIndex === 0)
      return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.photos.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
 
    
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
    
    
  }
 
  slideWidth = () => {
     return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.photos.map((image, i) => (
                
                <Slide key={i} image={image.url} legend={image.description}  />
            
                
              ))
            }
        </div>
        <LeftArrow 
         goToPrevSlide={this.goToPrevSlide}  message={"1"}
        />


        <RightArrow
         goToNextSlide={this.goToNextSlide} message={this.state.currentIndex}
        />
      </div>
    );
  }
}

export default Slider;