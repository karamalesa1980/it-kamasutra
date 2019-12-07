import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
      posts={props.appstate.posts}
      addpost={props.addpost}
      newpostText={props.appstate.newpostText}
      updatenewpostText={props.updatenewpostText}
      />
    </div>
  )
}

export default Profile;


