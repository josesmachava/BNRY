import React   from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CreatePhoto from './components/create.photo.component';

function App() {

 
  
  return (
    <div className="App">
    <Carousel infiniteLoop={true}>
    <div>
        <img src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="https://images.unsplash.com/photo-1491921125492-f0b9c835b699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="https://images.unsplash.com/photo-1562178240-396a314759b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
<CreatePhoto></CreatePhoto>
</div>

  );
}

export default App;