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
        <input type="text" name="username" value={this.state.username} placeholder="Username"/>
        <input type="password" name="password" placeholder="Password"/>
        <button>Login</button>
      </div>
    )
  }
}

export default Login
