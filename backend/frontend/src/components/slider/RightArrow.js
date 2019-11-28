import React , { useState }  from 'react';
import ReactTooltip from 'react-tooltip'



const RightArrow = (props,) => {
 
const [count, setCount] = useState(2);
const onclick = () =>{
  console.log("hello");
   setCount(count + 1)
   props.goToNextSlide()
} 
console.log('====================================');
  console.log({count});
  console.log('====================================');
  
  return (
    <div className="nextArrow"   onClick={onclick}>
   

      <i  data-tip data-for='next' className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      <ReactTooltip id='next' type='warning' effect='solid'>
     
        <span>{count } </span>
      </ReactTooltip>
    </div>
  );
}

export default RightArrow;