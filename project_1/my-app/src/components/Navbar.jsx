import React from 'react';
import classes from './Navbar.module.css';
console.log(classes);

const Navbar = () => {
  return <nav className={classes.nav}>
  <div className={classes.item}>
    <a>Messages</a>
  </div>
  <div className={classes.item}>
    <a>Profile</a>
  </div>
  <div className={`${classes.item} ${classes.active}`}>
    <a>News</a>
  </div>
  <div className='item'>
    <a href='#'>Muzic</a>
  </div>
</nav>
}

export default Navbar;