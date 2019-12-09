import React from 'react';
import Post from './Post/Post';
import { updatenewpostTextactionCreator, addpostactionCreator } from '../../../redux/state';

const MyPosts = (props) => {
  
  let newpostElement = React.createRef();


  let postsElements =
  props.appstate.posts.map( p => <Post message={p.message} like={p.like} /> )


  let addpost = () => {
    //const newLocal_1 = { type: 'ADD-POST' };
    //props.addpost();
    props.dispatch(addpostactionCreator())
  }

  let onpostChange = () => {
    let text = newpostElement.current.value
    const newLocal = updatenewpostTextactionCreator(text);
    //props.updatenewpostText(text);
    props.dispatch(newLocal)
  }


  return (
    <div>
    
      <div>
        My posts
      </div>
      New post
      <div>        
        <textarea onChange={onpostChange} value={props.appstate.newpostText} ref={newpostElement} /><br/>
        <button onClick={ addpost }>Add post</button>
      </div>

        { postsElements }

      {/* <Post message={postData[0].message} like={postData[0].like}/>
      <Post message={postData[1].message} like={postData[1].like}/> */}

    </div>
  )
}

export default MyPosts;