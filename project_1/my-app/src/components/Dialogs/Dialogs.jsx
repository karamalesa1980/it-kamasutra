import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import ItemDialog from './ItemDialog/ItemDialog';
import Message from './Message/Message';


 

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Yuriy'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Marina'},
    {id: 4, name: 'Irina'},
    {id: 5, name: 'Igor'},
  ]

  let messages = [
    {id: 1, message: 'Hi Yuriy'},
    {id: 2, message: 'Hi Anton'},
    {id: 3, message: 'Hi Marina'},
    {id: 4, message: 'Hi Irina'},
    {id: 5, message: 'Hi Igor'},
  ]

  let dialogsElements = dialogs
  .map( d => <ItemDialog name={d.name} id={d.id} /> );


  let messagesElements = messages
  .map( m => <Message message={m.message} id={m.id} /> );

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
      </div>
    </div> 
	)
}

export default Dialogs;