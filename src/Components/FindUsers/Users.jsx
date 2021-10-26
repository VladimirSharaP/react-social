import React from 'react';
import f from './FindUsers.module.css';
import userPhoto from '../../assets/images/avatar.png';

const Users = (props) => {
  console.log(props)
  return (
    <div>
      {props.users.map(u => { 
      <div key={u.id}>
        <span>
          <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto } className={f.userPhoto}></img>
          </div>
          <div>
            {u.followed 
              ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
              : <button onClick={() => {this.props.follow(u.id)}}>Foloow</button>}
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
      })}
      <span onClick={() => {this.moreUsers()}}>Show more</span>
    </div>
  )
}
  
export default Users;