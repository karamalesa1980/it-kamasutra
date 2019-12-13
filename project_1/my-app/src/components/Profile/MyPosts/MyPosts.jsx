import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  
  let postsElements =
  props.profileReducer.posts.map( p => <Post message={p.message} like={p.like} /> )


  let onaddpost = () => {
    props.addpost();
  }

  let onpostChange = (e) => {
    let text = e.target.value;
    props.updatenewpostText(text);   
  }

  return (
    <div>
    
      <div>
        My posts
      </div>
      New post
      <div>        
        <textarea onChange={onpostChange} value={props.profileReducer.newpostText}  /><br/>
        <button onClick={ onaddpost }>Add post</button>
      </div>

        { postsElements }

      

    </div>
  )
}

export default MyPosts;