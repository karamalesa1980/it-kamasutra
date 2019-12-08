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

  callSuscriber() {
  },

  suscribe(observer) {
    this.callSuscriber = observer;
  },

  addmessage() {  
    let newmessage = {
      id: 4,
      message: this._state.newmessageText
    };
    this._state.messages.push(newmessage);
    this._state.newmessageText = '';
    this.callSuscriber();
  },

  updatenewmessageText(newtext) {  
    this._state.newmessageText = newtext;
    this.callSuscriber();
  },

  addpost() { 
    let newpost = {
      id: 4,
      message: this._state.newpostText,
      like: 3
    };
    this._state.posts.push(newpost);
    this._state.newpostText = '';
    this.callSuscriber();
  },

  updatenewpostText(newtext) {  
    this._state.newpostText = newtext;
    this.callSuscriber();
  }

};



export default store;
window.store = store;