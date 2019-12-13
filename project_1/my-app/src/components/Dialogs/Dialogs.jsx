import React from 'react';
import classes from './Dialogs.module.css';
import ItemDialog from './ItemDialog/ItemDialog';
import Message from './Message/Message';


const Dialogs = (props) => {

  let onaddmessage = () => {
    props.addmessage();
  }


  let onmessageChange = (e) => {
    let text = e.target.value;
    props.updatenewmessageText(text);
  }


  let dialogsElements =
  props.dialogsReducer.dialogs.map( d => <ItemDialog name={d.name} id={d.id} avatar={d.avatar} /> );


  let messagesElements =
  props.dialogsReducer.messages.map( m => <Message message={m.message} id={m.id} /> );

  return (
  	<div className={classes.dialogs}>
      <div className={classes.dialogItem}>

        { dialogsElements }

      </div>
      <div className={classes.messages}>

        { messagesElements }

        <div className={classes.messages}>
        <textarea onChange={onmessageChange} value={props.dialogsReducer.newmessageText}/><br/>
        <button onClick={ onaddmessage }>Add message</button>
        </div>
        
      </div>
    </div> 
	)
}

export default Dialogs;