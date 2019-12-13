import React from 'react';
import MyPosts from './MyPosts';
import { updatenewpostTextactionCreator, addpostactionCreator } from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let addpost = () => {
    props.store.dispatch(addpostactionCreator())
  }

  let onpostChange = (text) => {
    const action = updatenewpostTextactionCreator(text);
    props.store.dispatch(action)
  }

  return (
   <MyPosts updatenewpostText={onpostChange} addpost={addpost} profileReducer={state.profileReducer}/>
  )
}

export default MyPostsContainer;