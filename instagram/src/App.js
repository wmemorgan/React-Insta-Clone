import React, { Component } from 'react'
import PostsPage from './components/PostComponents/PostsPage'

class App extends Component {

  render() {
    console.log('App render')
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
