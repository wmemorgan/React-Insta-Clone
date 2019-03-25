import React, { Component } from 'react'

const withAuthenticate = ComponentOne => ComponentTwo => {
  return class extends Component {
    constructor() {
      super()
      this.state = {
        loggedIn: ''
      }
    }

    componentDidMount() {
      if(JSON.parse(localStorage.getItem('username'))) {
        this.setState({ loggedIn: JSON.parse(localStorage.getItem('username')).loggedIn })
      } else {
        this.setState({loggedIn: false})
      }
    }

    render() {
      return this.state.loggedIn ? <ComponentOne /> : <ComponentTwo />
    }
  }
}

export default withAuthenticate