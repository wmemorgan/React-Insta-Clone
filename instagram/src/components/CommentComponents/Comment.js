/* Display individual comment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Import styled componnents
import { CommentCard, CommentContent, 
  CommentText, CommentDeleteContainer} from './CommentStyles'
import Username from '../StyleComponents/Username'
import Button from '../StyleComponents/Button'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  // Show or hide delete button
  toggleDeleteBtn = () => {
    this.setState(prevState => { 
      return { isHidden: !prevState.isHidden }
    })
  }

  render () {
    console.log(`Comment component render`)
    const { id, comment, deleteComment } = this.props
    const { username, text } = comment
 
    return (
      <CommentCard>
        <CommentContent>
          <Username>{username}</Username>
          <CommentText>{text}</CommentText>
        </CommentContent>
        
        <CommentDeleteContainer>
          {/* Toggle delete button when pressed */}
          <i onClick={this.toggleDeleteBtn} className="fas fa-ellipsis-v"></i>
          {
            this.state.isHidden ? '' :
              <Button onClick={() => deleteComment(id)} alert>Delete Comment</Button>
          }
        </CommentDeleteContainer>
      </CommentCard>
    )
  }
}

Comment.propType = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment