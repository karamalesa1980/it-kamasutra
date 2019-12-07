import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {addpost, addmessage, updatenewpostText, updatenewmessageText} from './redux/state'
import { BrowserRouter } from 'react-router-dom';
import {rerenderEntireTree} from './render'


// addpost('karamalesa.com');
// export let rerenderEntireTree = () => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App appstate={state} addpost={addpost}/>
//     </BrowserRouter>, document.getElementById('root'));
// };

rerenderEntireTree(state, addpost, addmessage, updatenewpostText, updatenewmessageText);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

