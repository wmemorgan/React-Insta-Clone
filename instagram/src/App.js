import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
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
        <SearchBar />
        {/* Pass post data to container component */}
        {this.state.posts.map(post =>  (
          <PostContainer key={post.timestamp} post={post} />
        ))}
      </div>
    );
  }
}

export default App;
