import React from 'react';

const HowItWorksItem = (props) => {
  const { title, icon, text } = props;
  return (
    <div className='how-it-works__item'>
      <i className={icon} ></i>
      <h3 className='how-it-works__title'>{title}</h3>
      <p className='how-it-works__text'>{text}</p>
    </div>
  )
}

export default HowItWorksItem;