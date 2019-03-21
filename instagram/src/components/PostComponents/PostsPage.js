import React, { Component } from 'react'
import PostsPageContainer from './PostsPageContainer'
import SearchBar from '../SearchBarComponents/SearchBar'
import PostList from './PostList'

import dummyData from '../../dummy-data'

class PostsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      search: ''
    }
    console.log(`PostsPage constructor`)
  }

  componentDidMount() {
    console.log(`componentDidMount`)
    //Initialize localStorage
    let data
    if (localStorage.posts) {
      console.log(`localStorage.posts exists`)
      data = JSON.parse(localStorage.posts)
    } else {
      console.log(`creating localStorage.posts`)
      localStorage.setItem('posts', JSON.stringify(dummyData))
      data = JSON.parse(localStorage.posts)
    }

    console.log(`Initial localStorage.posts from parent:`, data)

    setTimeout(() => {
      this.setState({ posts: data })
    }, 0)
  }

  componentDidUpdate(prevProps, prevState) {
    // Synchronize state changes with localStorage
    if (prevState.posts !== this.state.posts) {
      localStorage.setItem('posts', JSON.stringify(this.state.posts))
      console.log(`componentDidUpdate localStorage.posts from parent:`, JSON.parse(localStorage.posts))
    }
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
    console.log('App render')
    return (
      <PostsPageContainer>
        <SearchBar search={this.state.search} searchTask={this.searchTask} />
        {/* Pass post data to container component */}
        {this.state.posts.length > 0 ? (
          this.state.posts.map((post, index) => (
            <PostList
              key={index}
              id={index}
              post={post}
            />
          ))
        ) : (<h2>Loading...</h2>)
        }
      </PostsPageContainer>
    );
  }  

}

export default PostsPage