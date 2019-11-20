import React from 'react';
import classes from './ItemDialog.module.css';
import { NavLink } from 'react-router-dom';

const ItemDialog = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
	)
}

export default ItemDialog;