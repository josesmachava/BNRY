import React   from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import CreatePhoto from './components/create-photo.component';
import PhotoList from './components/photo-list.component';
import Slider from './components/slider/Slider';
import PageNotFound from './components/error/404';




const App = () => {

 
  
  return (
  <Router>

  <Switch>
    <Route path="/" component={ Slider } exact />
    <Route path='/create' component={CreatePhoto}   />
    <Route path='/list' component=  { PhotoList }  />
    <Route component=  { PageNotFound }  />
    </Switch>
    
  </Router>

 


  );
}

export default App;