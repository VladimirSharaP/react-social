import React from 'react';
import prof from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.post} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
    </div>
  );
}

export default Profile;