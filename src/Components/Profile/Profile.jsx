import React from 'react';
import prof from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <ProfileInfo profile = {props.userProfile} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;