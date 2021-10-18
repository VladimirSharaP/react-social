import React from 'react';
import Header from './Components/Header/Header'
import Navbar from'./Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route  } from 'react-router-dom';

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path='/profile' render= { () => <Profile post={props.state.profile} addPost={props.addPost} updateNewPostText={props.updateNewPostText} /> }/>
          <Route exact path='/dialogs' render= { () => <Dialogs dialogsData={props.state.dialogs} /> } />
       </div>
      </div>
  );
}

export default App;
