import React from 'react';
import Dialogs from './Dialogs';
import { addmessageactionCreator, updatenewmessageTextactionCreator } from '../../redux/dialogs-reducer';


 

const DialogsContainer = (props) => {

  let state = props.store.getState();

  let addmessage = () => {
    props.store.dispatch(addmessageactionCreator());
  }

  

  let onmessageChange = (text) => {
    const action = updatenewmessageTextactionCreator(text)
    props.store.dispatch(action);
  }





  return (
    <Dialogs
    addmessage={addmessage}
    updatenewmessageText={onmessageChange}
    dialogsReducer={state.dialogsReducer}/>
	)
}

export default DialogsContainer;