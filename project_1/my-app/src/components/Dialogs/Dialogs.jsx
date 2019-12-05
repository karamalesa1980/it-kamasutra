import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import ItemDialog from './ItemDialog/ItemDialog';
import Message from './Message/Message';


 

const Dialogs = (props) => {

  let addmessage = () => {
    let text = newmessageElement.current.value
    alert(text)
  }

  let newmessageElement = React.createRef();


  let dialogsElements =
  props.appstate.dialogs.map( d => <ItemDialog name={d.name} id={d.id} avatar={d.avatar} /> );


  let messagesElements =
  props.appstate.messages.map( m => <Message message={m.message} id={m.id} /> );

  return (
  	<div className={classes.dialogs}>
      <div className={classes.dialogItem}>

        { dialogsElements }

        {/* <ItemDialog name={DialogsData[0].name} id={DialogsData[0].id}/>
        <ItemDialog name={DialogsData[1].name} id={DialogsData[1].id}/>
        <ItemDialog name={DialogsData[2].name} id={DialogsData[2].id}/>
        <ItemDialog name={DialogsData[3].name} id={DialogsData[3].id}/>
        <ItemDialog name={DialogsData[4].name} id={DialogsData[4].id}/> */}
      </div>
      <div className={classes.messages}>

        { messagesElements }

        {/* <Message message={messagesData[0].message} id={messagesData[0].id}/>
        <Message message={messagesData[1].message} id={messagesData[1].id}/>
        <Message message={messagesData[2].message} id={messagesData[2].id}/>
        <Message message={messagesData[3].message} id={messagesData[3].id}/>
        <Message message={messagesData[4].message} id={messagesData[4].id}/> */}
        <textarea ref={newmessageElement}></textarea><br/>
        <button onClick={ addmessage }>Add message</button>
      </div>
    </div> 
	)
}

export default Dialogs;