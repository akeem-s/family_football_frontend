import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';
import dotenv from 'dotenv';
// actions
import * as LoginContainerActions from './login.actions.js';

export class LoginComponent extends React.Component{
  constructor(props){
    super(props)
  }

  handleResponse = (data) => {
    console.log(data);
    const {dispatch} = this.props
    dispatch(LoginContainerActions.loginSuccess(data))
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render(){
    return(
      <div>
      <div className="login_container" >

      <FacebookProvider appId="754517211389671">
        <Login
          scope="email"
          onResponse={this.handleResponse}
          onError={this.handleError}
        >
        <span className="loginBtn--facebook">Login via Facebook</span>
        </Login>
      </FacebookProvider>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { loginReducer } = state

  return {
    loginReducer
  }
}

export default connect(mapStateToProps)(LoginComponent);
