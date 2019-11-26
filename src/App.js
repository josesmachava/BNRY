import React   from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CreatePhoto from './components/create-photo.component';
import PhotoList from './components/photo-list.component';

function App() {

 
  
  return (
    <div className="App">
    <Carousel infiniteLoop={true}>
  
    </Carousel>
    <PhotoList></PhotoList>
  

    <CreatePhoto></CreatePhoto>
</div>

  );
}

export default App;