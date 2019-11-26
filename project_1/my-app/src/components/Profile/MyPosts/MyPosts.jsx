import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: 'Hi Yuriy', like: '15'},
    {id: 2, message: 'Hi Anton', like: '25'},
  ]

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
      <Post message={postData[0].message} like={postData[0].like}/>
      <Post message={postData[1].message} like={postData[1].like}/>

    </div>
  )
}

export default MyPosts;