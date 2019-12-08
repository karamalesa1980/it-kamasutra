import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
      appstate={store.getState()}
      addpost={store.addpost.bind(store)}
      addmessage={store.addmessage.bind(store)}
      updatenewpostText={store.updatenewpostText.bind(store)}
      updatenewmessageText={store.updatenewmessageText.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store);

store.suscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

