import React, { Component } from 'react'

const withAuthenticate = ComponentOne => {
  return class extends Component {
    render() {
      return <ComponentOne />
    }
  }
}

export default withAuthenticate