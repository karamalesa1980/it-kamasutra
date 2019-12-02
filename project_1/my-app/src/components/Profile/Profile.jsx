import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;

const posts = [
  {id: 1, message: 'Hi Yuriy', like: '16'},
  {id: 2, message: 'Hi Anton', like: '25'},
];

export { posts };