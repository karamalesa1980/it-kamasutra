import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/dialogs" activeClassName={classes.active_link}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.active_link}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/news" activeClassName={classes.active_link}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to='/muzic' activeClassName={classes.active_link}>Muzic</NavLink>
    </div>
  </nav>
}

export default Navbar;