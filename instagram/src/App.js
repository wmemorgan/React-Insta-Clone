import React, { Component } from 'react'
// import SearchBar from './components/SearchBar'
import PostContainer from './components/PostComponents/PostContainer'

import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
