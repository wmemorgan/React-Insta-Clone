import React, { Component } from 'react'
// High Order Component to manage initial page display
import withAuthenticate from './components/Authentication/withAuthenticate'
import PostsPage from './components/PostComponents/PostsPage'

class App extends Component {

  render() {
    //Instantiate HOC
    const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)
    console.log('App render')
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
