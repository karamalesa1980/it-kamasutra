import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className={classes.contant}>
    <div>
      <img src='http://www.ykasova.com/uploads/users/comments/31912_71_b_gusi.jpg'/>
    </div>
    <div>
      Ava + Discription
    </div> 
   <MyPosts />
  </div>
  
}

export default Profile;