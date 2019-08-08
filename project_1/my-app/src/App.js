import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Technologies from './Technologies';



const App = () => {
  return (
    <div>
      <div>
        <Header />
        <Technologies />
      </div>
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




