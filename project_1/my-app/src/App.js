import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Muzic from './components/Muzic/Muzic';




const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-contant'>
          <Route exact path='/dialogs' render={ () => <Dialogs
            appstate={props.appstate}
            addmessage={props.addmessage}
            updatenewmessageText={props.updatenewmessageText}/>}
            />
          <Route exact path='/profile' render={ () => <Profile
          appstate={props.appstate}
          addpost={props.addpost}
          updatenewpostText={props.updatenewpostText}/>}
          />
          <Route exact path='/news' component={News} />
          <Route exact path='/muzic' component={Muzic} />
        </div>

        <Footer />
      </div>
    

  );
}

export default App;




