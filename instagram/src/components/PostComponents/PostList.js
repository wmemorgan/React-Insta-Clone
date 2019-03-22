/* Display post data */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: props.post.likes
    }
    // Bind addLikes method to class
    this.addLikes = this.addLikes.bind(this)
    console.log(`constructor called state is: `, this.state)
  }

  // Add likes
  addLikes() {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    // Update localStorage when like count is updated
    if (prevProps.likes !== this.state.likes) {
      console.log(`componentDidUpdate: like count changed`)
      let updateLocalStorage = JSON.parse(localStorage.posts).map(post => {
        const { username, thumbnailUrl, imageUrl, timestamp, comments } = post
        if (username === this.props.post.username) {
          return {
            username, thumbnailUrl, imageUrl, timestamp, comments,
            likes: this.state.likes
          }
        } else {
          return post
        }
      })

      localStorage.setItem('posts', JSON.stringify(updateLocalStorage))
    }
  }

  render() {
    console.log(`PostList render`)
    return (
      <Post
        id={this.props.id}
        post={this.props.post}
        likes={this.state.likes}
        addLikes={this.addLikes}
      />
    )
  }
}

PostList.propTypes = {
  post: PropTypes.object
}

PostList.defaultProps = {
  post: {}
}

export default PostList