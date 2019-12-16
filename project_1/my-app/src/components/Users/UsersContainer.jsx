import Users from './Users';
import { addmessageactionCreator, updatenewmessageTextactionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux'
import React from 'react';
 

let mapStateToProps = (state) => {
  return {
    UsersReducer: state.usersReducer
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addmessage: () => {
      dispatch(addmessageactionCreator())},
    updatenewmessageText: (text) => {
      dispatch(updatenewmessageTextactionCreator(text))}
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;