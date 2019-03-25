import React, { Component } from 'react'
import LoginContainer from './LoginContainer'
import Logo from '../StyleComponents/Logo'
import Form from '../StyleComponents/Form'
import Button from '../StyleComponents/Button'

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
      <LoginContainer>
        <Logo>Instaclone</Logo>
        <Form onSubmit={this.login} login>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
            onChange={this.usernameInput}
          />
          <input type="password" name="password" placeholder="Password" />
          <Button type="submit" primary>Login</Button>
        </Form>
      </LoginContainer>
    )
  }
}

export default Login
