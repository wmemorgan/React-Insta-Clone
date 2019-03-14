import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
import moment from 'moment'

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
      // Create new data array with and add the new comment to the comments array
      let updatedData = prevState.posts.map(post => {
        if (post.username === username) {
          return {
            username: post.username,
            thumbnailUrl: post.thumbnailUrl,
            imageUrl: post.imageUrl,
            likes: post.likes,
            timestamp: moment(Date.now()).format('LLL'),
            comments: [...post.comments,
              { username: post.username, text: prevState.inputValue }
            ]
          }
        } else {
          return post
        }
      })

      // Replace the previous data with the new data
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
        {this.state.posts.map((post, index) =>  (
          <PostContainer 
            key={index} 
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
