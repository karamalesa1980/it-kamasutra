import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { posts } from './../Profile';

const MyPosts = (props) => {

  let newpostElement = React.createRef();

  let postsElements =
  props.posts.map( p => <Post message={p.message} like={p.like} /> )

  let addpost = () => {
    let text = newpostElement.current.value
    alert(text)
  }

  return (
    <div>
    
      <div>
        My posts
      </div>
      New post
      <div>        
        <textarea ref={newpostElement}></textarea><br/>
        <button onClick={ addpost }>Add post</button>
      </div>

        { postsElements }

      {/* <Post message={postData[0].message} like={postData[0].like}/>
      <Post message={postData[1].message} like={postData[1].like}/> */}

    </div>
  )
}

export default MyPosts;