import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
     
      <div className={classes.item}>
        <img src="avatar.jpg" alt=""/><br/>
        {props.post}
        <p>
          <span>Like: {props.like}</span>
        </p>
      </div>
    </div>
  )
}

export default Post;