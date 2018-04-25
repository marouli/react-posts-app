import React, {Component} from 'react';
import './Icon.css';

function Icon({ faClassName }) {
  return (
    <div className="icon__container">
      <span className="icon__icon">
        <i className={`fa fa-${faClassName}`}></i>
      </span>
    </div>
  )
}

export default Icon;
