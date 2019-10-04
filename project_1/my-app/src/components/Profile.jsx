import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return <div className={classes.contant}>
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz6P0VSCzO5Vw5uc6MKgcwS0nRUgzOQMbyfzJk34KU2VQ9aDw'/>
    </div>
    <div>
      Ava + Discription
    </div> 
    <div>
      My posts
    </div>
    <div>
      New post
    </div>
    <div className={classes.item}>
      Post 1
    </div>
  </div>
  
}

export default Profile;