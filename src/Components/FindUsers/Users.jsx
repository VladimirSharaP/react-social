import React from 'react';
import f from './FindUsers.module.css';
import userPhoto from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  return (
    <div>
      {props.users.map(u => 
      <div key={u.id}>
        <span>
          <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto } className={f.userPhoto}></img>
              </NavLink>
          </div>
          <div>
            {u.followed 
              ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
              : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
        </span>
        </div>
      )}
      <span onClick={() => {props.moreUsers()}}>Show more</span>
    </div>
  )
}
  
export default Users;