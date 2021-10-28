import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  
  componentDidMount() {
      if(!this.props.authUser){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
        })
             .then(response => {
               if(response.data.resultCode === 0) {
                this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login);
               }
              });
      }
  }
  
  render() {
    return <Header {...this.props} userLogin = {this.props.userLogin} />
  }  
}

let mapStateToProps = (state) => {
  return {
    userLogin: state.authReducer.authUser.login,
    isAuth: state.authReducer.isAuth
  }
};
  
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);