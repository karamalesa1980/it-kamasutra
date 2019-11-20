import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import ItemDialog from './ItemDialog/ItemDialog';


 

const Dialogs = (props) => {
  return (
  	<div className={classes.dialogs}>
      <div className={classes.dialogItem}>
        <ItemDialog name='Yuriy' id='1'/>
        <ItemDialog name='Anton' id='2'/>
        <ItemDialog name='Marina' id='3'/>
        <ItemDialog name='Irina' id='4'/>
        <ItemDialog name='Igor' id='5'/>
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