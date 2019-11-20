import React from 'react';
import classes from './Message.module.css';
import { NavLink } from 'react-router-dom';

const Message = (props) => {
  
  return (
    <div className={classes.message}>{props.message}</div>
	)
}

export default Message;