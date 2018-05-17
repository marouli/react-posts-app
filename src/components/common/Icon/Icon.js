import React from 'react';
import './Icon.css';

function Icon({ faClassName }) {
  return (
    <div className="c-icon__container">
      <span className="c-icon__icon">
        <i className={`fa fa-${faClassName}`}></i>
      </span>
    </div>
  )
}

export default Icon;
