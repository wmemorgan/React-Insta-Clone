import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      loggedIn: false
    }
  }

  // Capture username from input field
  usernameInput = e => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  login = () => {
    if (!JSON.parse(localStorage.getItem('username'))) {
      this.setState(prevState => {
        return {
          username: prevState.username,
          loggedIn: true
        }
      },
        () => localStorage.setItem('username', JSON.stringify(this.state))
      )
    } else {
      console.log(localStorage.getItem('username'))
      this.setState({
        username: JSON.parse(localStorage.getItem('username')).username,
        loggedIn: true
      })
    }
    window.location.reload();
  }

  render() {
    console.log(`Login render this.state`, this.state)
    console.log(`Login render localStorage: `, JSON.parse(localStorage.getItem('username')))
    return (
      <div className="login-container">
        <h2 className="logo-text">Instragram</h2>
        <input 
          type="text" 
          name="username" 
          value={this.state.username} 
          placeholder="Username"
          onChange={this.usernameInput}
        />
        <input type="password" name="password" placeholder="Password"/>
        <button onClick={this.login} className="btn btn-login">Login</button>
      </div>
    )
  }
}

export default Login
