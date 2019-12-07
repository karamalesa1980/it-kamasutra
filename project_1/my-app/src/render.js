import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = (state, addpost, addmessage, updatenewpostText, updatenewmessageText) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
      appstate={state}
      addpost={addpost}
      addmessage={addmessage}
      updatenewpostText={updatenewpostText}
      updatenewmessageText={updatenewmessageText}
      />
    </BrowserRouter>, document.getElementById('root'));
};




