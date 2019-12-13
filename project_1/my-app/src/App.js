import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Muzic from './components/Muzic/Muzic';
import DialogsContainer from './components/Dialogs/DialogsContainer';




const App = (props) => {
  debugger
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-contant'>
          <Route exact path='/dialogs' render={ () => <DialogsContainer store={props.store} />}/>
            
          <Route exact path='/profile' render={ () => <Profile store={props.store} />}/>
          <Route exact path='/news' component={News} />
          <Route exact path='/muzic' component={Muzic} />
        </div>

        <Footer />
      </div>
    

  );
}

export default App;




