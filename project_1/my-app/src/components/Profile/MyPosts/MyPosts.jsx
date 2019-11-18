import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
    
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
  )
}

export default MyPosts;