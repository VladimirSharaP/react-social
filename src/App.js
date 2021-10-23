import React from 'react';
import Header from './Components/Header/Header'
import Navbar from'./Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Route  } from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/profile' render= { () => <Profile store = {props.store} /> }/>
          <Route exact path='/dialogs' render= { () => <DialogsContainer store = {props.store} /> }/>
       </div>
      </div>
  );
}

export default App;
