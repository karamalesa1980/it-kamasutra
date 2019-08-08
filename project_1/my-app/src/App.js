import React, { Component } from 'react';
import './App.css';




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


const Header = () => {
  return (
    
    <div>
      <a>
        Contacts!
      </a>

    </div>  
      
    
     
  );
}

export default App;




