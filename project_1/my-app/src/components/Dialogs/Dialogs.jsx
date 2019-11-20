import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
  return (
  	<div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/dialogs/1'>Yuriy</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/2'>Anton</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/3'>Irina</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>
          Message 1
        </div>
        <div className={classes.message}>
          Message 2
        </div>
        <div className={classes.message}>
          Message 3
        </div>
      </div>
    </div> 
	)
}

export default Dialogs;