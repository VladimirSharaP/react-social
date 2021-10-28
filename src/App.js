import React from 'react';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from'./Components/Navbar/Navbar';
import ProfileContainer from './Components/Profile/ProfileContainer';
import FindUsersContainer from './Components/FindUsers/FindUsersContainer';
import './App.css';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import { Route  } from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render= { () => <ProfileContainer /> }/>
          <Route path='/dialogs' render= { () => <DialogsContainer /> }/>
          <Route path='/find_users' render= { () => <FindUsersContainer /> }/>
       </div>
      </div>
  );
}

export default App;
