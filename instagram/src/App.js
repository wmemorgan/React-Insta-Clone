import React, { Component } from 'react'
// import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'

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
        {this.state.posts.map(post =>  (
          <PostContainer key={post.timestamp} post={post} />
        ))}
      </div>
    );
  }
}

export default App;
