import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
  	<div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        <div className={classes.dialog + ' ' + classes.active}>
          Yuriy
        </div>
        <div className={classes.dialog}>
          Anton
        </div>
        <div className={classes.dialog}>
          Irina
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