import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { authAPI } from "../../api/api"

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.authUser) {
      authAPI.authMe()
        .then((data) => {
          if (data.resultCode === 0) {
            this.props.setAuthUserData(
              data.data.id,
              data.data.email,
              data.data.login
            );
          }
        });
    }
  }

  render() {
    return <Header {...this.props} userLogin={this.props.userLogin} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userLogin: state.authReducer.authUser.login,
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
