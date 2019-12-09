const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
  _state: {
    posts: [
      {id: 1, message: 'Hi Yuriy', like: '15'},
      {id: 2, message: 'Hi Anton', like: '25'},
      {id: 3, message: 'Hi Tema', like: '5'}
    ],
    
    newpostText: 'karamalesa!!!',
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
  },
  getState() {
    return this._state;
  },

  _callSuscriber() {
  },

  suscribe(observer) {
    this._callSuscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_MESSAGE) {
      let newmessage = {
        id: 6,
        message: this._state.newmessageText
      };
      this._state.messages.push(newmessage);
      this._state.newmessageText = '';
      this._callSuscriber();
    }
    else if (action.type === ADD_POST) {
      let newpost = {
        id: 4,
        message: this._state.newpostText,
        like: 3
      };
      this._state.posts.push(newpost);
      this._state.newpostText = '';
      this._callSuscriber();
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.newmessageText = action.newtext;
      this._callSuscriber();
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.newpostText = action.newtext;
      this._callSuscriber();
    }
  }

  // addmessage() {  
  //   let newmessage = {
  //     id: 4,
  //     message: this._state.newmessageText
  //   };
  //   this._state.messages.push(newmessage);
  //   this._state.newmessageText = '';
  //   this._callSuscriber();
  // },

  // updatenewmessageText(newtext) {  
  //   this._state.newmessageText = newtext;
  //   this._callSuscriber();
  // },

  // addpost() { 
  //   let newpost = {
  //     id: 4,
  //     message: this._state.newpostText,
  //     like: 3
  //   };
  //   this._state.posts.push(newpost);
  //   this._state.newpostText = '';
  //   this._callSuscriber();
  // },

  // updatenewpostText(newtext) {  
  //   this._state.newpostText = newtext;
  //   this._callSuscriber();
  // }

};

export const addpostactionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const addmessageactionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updatenewpostTextactionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newtext: text
  }
}

export const updatenewmessageTextactionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT, newtext: text
  }
}


export default store;
window.store = store;