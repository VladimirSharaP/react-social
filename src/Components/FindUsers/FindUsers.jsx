import React from 'react';
import f from './FindUsers.module.css'

const FindUsers = (props) => {
    return <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoURL} className={f.userPhoto}></img>
            </div>
            <div>
              {u.followed 
              ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
              : <button onClick={() => {props.follow(u.id)}}>Foloow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  }
  
  export default FindUsers;