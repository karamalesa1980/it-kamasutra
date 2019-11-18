import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
    
      <div>
        My posts
      </div>
      New post
      <div>        
        <textarea></textarea><br/>
        <button>Add post</button>
      </div>
      <Post message="Hi yuriy!" like="15"/>
      <Post message="Hi marina!" like="25"/>

    </div>
  )
}

export default MyPosts;