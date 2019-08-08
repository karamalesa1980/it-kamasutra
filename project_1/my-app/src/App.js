import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';



const App = () => {
  return (
    <div>
      <div><Header /></div>
      <div className="App">
        <a>
          Home
      </a>
        <ul>
          <li>
            Hello
      </li>
          <li>
            World
      </li>
        </ul>
      </div>
    </div>

  );
}

export default App;




