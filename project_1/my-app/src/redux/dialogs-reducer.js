const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  newmessageText: 'message!!!',
  
  dialogs: [
  {id: 1, name: 'Yuriy', avatar: 'avatar.jpg'},
  {id: 2, name: 'Anton', avatar: 'avatar.jpg'},
  {id: 3, name: 'Marina', avatar: 'avatar.jpg'},
  {id: 4, name: 'Irina', avatar: 'avatar.jpg'},
  {id: 5, name: 'Igor', avatar: 'avatar.jpg'},
],

messages: [
  {id: 1, message: 'Hi Yuriy'},
  {id: 2, message: 'Hi Anton'},
  {id: 3, message: 'Hi Marina'},
  {id: 4, message: 'Hi Irina'},
  {id: 5, message: 'Hi Igor!'},
]
};

const dialogsReducer = (state= initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
        let newmessage = {
          id: 6,
          message: state.newmessageText
        };
        state.messages.push(newmessage);
        state.newmessageText = '';
        return state;
    case UPDATE_NEW_MESSAGE_TEXT:
        state.newmessageText = action.newtext;
        return state;
    default:           // default: не забывай а то ошибка.
      return state;        
  }  
}

export default dialogsReducer;


export const addmessageactionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}


export const updatenewmessageTextactionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, newtext: text
  }
}