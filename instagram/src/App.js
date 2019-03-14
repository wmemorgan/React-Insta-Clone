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

  // Add new comment
  commentSubmit = (username) => {
    this.setState(prevState => {
      let updatedData = prevState.posts.map(post => {
        if (post.username === username) {
          console.log('It matches here are the comments: ', post.comments)
          post.comments.push({ username: post.username, text: prevState.inputValue})  
          return post
          
        } else {
          return post
        }
      })

      return {
        posts: updatedData,
        inputValue: ''
      }
     
    },
      () => {
        console.log(`updated state to:`, this.state)
      }
    )
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
            commentSubmit={this.commentSubmit} 
          />
        ))}
      </div>
    );
  }
}

export default App;
