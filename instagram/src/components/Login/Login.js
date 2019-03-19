import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      loggedIn: false
    }
  }

  render() {
    return (
      <div className="login-container">
        <h2 className="logo-text">Instragram</h2>
        <input type="text" name="username" value={this.state.username} placeholder="Username"/>
        <input type="password" name="password" placeholder="Password"/>
        <button className="btn btn-login">Login</button>
      </div>
    )
  }
}

export default Login
