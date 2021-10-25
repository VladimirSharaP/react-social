import React from 'react';
import Header from './Components/Header/Header'
import Navbar from'./Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile';
import FindUsersContainer from './Components/FindUsers/FindUsersContainer';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Route  } from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/profile' render= { () => <Profile /> }/>
          <Route exact path='/dialogs' render= { () => <DialogsContainer /> }/>
          <Route exact path='/find_users' render= { () => <FindUsersContainer /> }/>
       </div>
      </div>
  );
}

export default App;
