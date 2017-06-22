import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import FacebookProvider, { Login } from 'react-facebook';
import dotenv from 'dotenv';

export class LoginComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <div className="profile_container" >
      <p> test </p>
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
