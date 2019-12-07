import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div>
     
      <div className={classes.item}>
        <img src="avatar.jpg"></img><br/>
        {props.message}
        <p>
          <span>Like: {props.like}</span>
        </p>
      </div>
    </div>
  )
}

export default Post;