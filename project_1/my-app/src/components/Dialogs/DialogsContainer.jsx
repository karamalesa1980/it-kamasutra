import Dialogs from './Dialogs';
import { addmessageactionCreator, updatenewmessageTextactionCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux'
import React from 'react';
 

// const DialogsContainer = (props) => {

//   let state = props.store.getState();

//   let addmessage = () => {
//     props.store.dispatch(addmessageactionCreator());
//   }

  

//   let onmessageChange = (text) => {
//     const action = updatenewmessageTextactionCreator(text)
//     props.store.dispatch(action);
//   }





//   return (
//     <Dialogs
//     addmessage={addmessage}
//     updatenewmessageText={onmessageChange}
//     dialogsReducer={state.dialogsReducer}/>
// 	)
// }
debugger
let mapStateToProps = (state) => {
  return {
    dialogsReducer: state.dialogsReducer
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;