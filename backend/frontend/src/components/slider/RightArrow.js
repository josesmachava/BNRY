import React from 'react';
import ReactTooltip from 'react-tooltip'

const RightArrow = (props, { message}) => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
    <a data-tip="React-tooltip"> ◕‿‿◕ </a>

      <i  data-tip data-for='sadFace' className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      <ReactTooltip id='sadFace' type='warning' effect='solid'>
        <span>{message}</span>
      </ReactTooltip>
    </div>
  );
}

export default RightArrow;