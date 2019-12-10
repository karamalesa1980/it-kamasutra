const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
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