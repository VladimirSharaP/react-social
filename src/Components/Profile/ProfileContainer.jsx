import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (!this.props.match.params.userId) this.props.match.params.userId = 2;
    profileAPI.getProfile(this.props.match.params.userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} userProfile={this.props.userProfile} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profileReducer.userProfile,
  };
};

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
