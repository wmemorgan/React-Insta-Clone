import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'

import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData,
      inputValue: ''
    }
  }

  // Capture comment form input
  commentInput = e => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* Pass post data to container component */}
        {this.state.posts.map(post =>  (
          <PostContainer 
            key={post.timestamp} 
            post={post}
            inputValue={this.state.inputValue}
            commentInput={this.commentInput} 
          />
        ))}
      </div>
    );
  }
}

export default App;
