import React from 'react';
import classes from './Users.module.css';



let Users = (props) => {
  
  return <div className={classes.users}>
      {
        props.UsersReducer.users.map( u => <div key={u.id} >
          <span>
            <div>
              <img src={u.avatarUrl}/>
            </div>
            <div>
              {u.followed
              ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>
              :<button onClick={() => {props.follow(u.id)} }>Follow</button>}
              
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country} </div>
              <div>{u.location.sity}</div>
            </span>
          </span>
        </div>)
      }
    </div>          
}
   


export default Users;