import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className={classes.contant}>
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkz6P0VSCzO5Vw5uc6MKgcwS0nRUgzOQMbyfzJk34KU2VQ9aDw'/>
    </div>
    <div>
      Ava + Discription
    </div> 
   <MyPosts />
  </div>
  
}

export default Profile;