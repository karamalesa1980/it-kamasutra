import React from 'react';
import classes from './Post.module.css';

const Post = () => {
  return (
    <div>
      New post
      <div>        
        <textarea></textarea><br/>
        <button>Add post</button>
      </div>
      <div className={classes.item}>
        Post 1
      </div>
    </div>
  )
}

export default Post;