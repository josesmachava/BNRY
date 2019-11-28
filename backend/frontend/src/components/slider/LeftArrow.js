import React from 'react';
import ReactTooltip from 'react-tooltip'

const LeftArrow = (props,  { message}) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      
      <i  data-tip data-for='sadFace' className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      <ReactTooltip id='sadFace' type='warning' effect='solid'>
        <span>{message}</span>
      </ReactTooltip>
    </div>
  );
}

export default LeftArrow;