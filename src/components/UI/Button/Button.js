import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button Running');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
//! Here is Button component re-evaluated every time the props.onClick are changed
//! Because the props.onClick holds the function(its primitive type) so it is re-evaluated every time event its props not changed\
//! example: props.onClick() !== props.previous.onClick() are not same eventhough they hold the same function 

// ! React.memo => is useless where component receives props as object, Array or funtion
export default React.memo(Button);
