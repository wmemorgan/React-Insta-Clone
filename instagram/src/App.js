import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
// import moment from 'moment'

import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      search: ''
    }
    console.log(`constructor`)
  }

  componentDidMount() {
    console.log(`componentDidMount`)
    setTimeout(() => {
      this.setState({ posts: dummyData })
    }, 0)
  }

  // Search posts by username
  searchTask = e => {
    let searchString = e.target.value.toLowerCase()
    console.log(`e.target.value: `, searchString)
    this.setState(prevState => {
      let filteredPosts = prevState.posts.map(post => {
        const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = post
        if (!post.username.toLowerCase().includes(searchString)) {
          return {
            username, thumbnailUrl, imageUrl, likes, timestamp, comments,
            filtered: true
          }
        } else {
            return {
              username, thumbnailUrl, imageUrl, likes, timestamp, comments,
              filtered: false
            }
        }
      })

      return {
        posts: filteredPosts,
        search: searchString
      }
    })
  }

render() {
  console.log('render')
  return (
    <div className="App">
      <SearchBar search={this.state.search} searchTask={this.searchTask}/>
      {/* Pass post data to container component */}
      {this.state.posts.length > 0 ? (
        this.state.posts.map((post, index) => (
          <PostContainer
            key={index}
            post={post}
            inputValue={this.state.inputValue}
            commentInput={this.commentInput}
            commentSubmit={this.commentSubmit}
          />
        ))
      ) : (<h2>Loading...</h2>)
      }
    </div>
  );
}
}

export default App;
