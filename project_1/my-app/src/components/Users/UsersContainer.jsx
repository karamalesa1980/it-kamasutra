import Users from './Users';
import { connect } from 'react-redux'
import React from 'react';
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';
 

let mapStateToProps = (state) => {
  return {
    UsersReducer: state.usersReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;