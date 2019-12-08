import { rerenderEntireTree } from "../render";

let state = {
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
}

let renderTree = () => {
  rerenderEntireTree(
    state,
    addpost,
    addmessage,
    updatenewpostText,
    updatenewmessageText);
};

export let addmessage = () => {
  
  let newmessage = {
    id: 4,
    message: state.newmessageText
  };
  state.messages.push(newmessage);
  state.newmessageText = '';
  renderTree();
};

export let updatenewmessageText = (newtext) => {
  
  state.newmessageText = newtext;
  renderTree();
};



export let addpost = () => {
  
  let newpost = {
    id: 4,
    message: state.newpostText,
    like: 3
  };
  state.posts.push(newpost);
  state.newpostText = '';
  renderTree();
};

export let updatenewpostText = (newtext) => {
  
  state.newpostText = newtext;
  renderTree();
};

export default state;