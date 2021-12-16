import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  
  componentDidMount() {
    if(!this.props.match.params.userId) this.props.match.params.userId = 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
    .then(response => {
      this.props.setUserProfile(response.data);
    });
  }
  
  render() {
    return <Profile {...this.props} userProfile={this.props.userProfile} />
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profileReducer.userProfile
  }
};

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));