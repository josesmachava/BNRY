import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip'

const LeftArrow = (props) => {
  const [count, setCount] = useState(0);
  const onclick = () =>{
   console.log("hello");
   setCount(count - 1)
   props.goToPrevSlide()
} 
  return (
    <div className="backArrow" onClick={onclick}>
      
      <i  data-tip data-for='previous' className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      <ReactTooltip id='previous' type='warning' effect='solid'>
        <span>{count}</span>
      </ReactTooltip>
    </div>
  );
}

export default LeftArrow;