import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
  {id: 1, message: 'Hi Yuriy', like: '15'},
  {id: 2, message: 'Hi Anton', like: '25'},
]

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
  {id: 5, message: 'Hi Igor!'},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

