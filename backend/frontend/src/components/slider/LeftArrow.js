import React from 'react';

const LeftArrow = (props,  { message}) => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <p>{message}</p>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;