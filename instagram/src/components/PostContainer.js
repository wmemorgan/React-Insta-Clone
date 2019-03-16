/* Display post data */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class PostContainer extends Component {
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

  render() {
    return (
      <Post
        post={this.props.post}
        likes={this.state.likes}
        addLikes={this.addLikes}
      />
    )
  }
}

PostContainer.propTypes = {
  post: PropTypes.object
}

PostContainer.defaultProps = {
  post: {}
}

export default PostContainer