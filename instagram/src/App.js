import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import PostContainer from './components/PostContainer'
// import moment from 'moment'

import dummyData from './dummy-data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
    console.log(`constructor`)
  }

  componentDidMount() {
    console.log(`componentDidMount`)
    setTimeout(() => {
      this.setState({ posts: dummyData })
    },0)
  }

  // // Add new comment
  // commentSubmit = (username, input) => {
  //   this.setState(prevState => {
  //     // Create new data array and add the new comment to the comments array
  //     let updatedData = prevState.posts.map(post => {
  //       if (post.username === username) {
  //         return {
  //           username: post.username,
  //           thumbnailUrl: post.thumbnailUrl,
  //           imageUrl: post.imageUrl,
  //           likes: post.likes,
  //           timestamp: moment(Date.now()).format('LLL'),
  //           comments: [...post.comments,
  //             { username: post.username, text: input }
  //           ]
  //         }
  //       } else {
  //         return post
  //       }
  //     })

  //     // Replace the previous data with the new data
  //     return {
  //       posts: updatedData,
  //       inputValue: ''
  //     }
     
  //   },
  //     () => {
  //       console.log(`updated state to:`, this.state)
  //     }
  //   )
  // }
  
  render() {
    console.log('render')
    return (
      <div className="App">
        <SearchBar />
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
