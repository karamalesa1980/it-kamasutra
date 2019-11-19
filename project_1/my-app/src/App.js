import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Muzic from './components/Muzic/Muzic';





const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-contant'>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={News} />
          <Route path='/muzic' component={Muzic} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;




