import React from 'react'

const Comment = props => {
  console.log(props)
  return (
    <comment className="card">
      {props.comment}
    </comment>
  )
}

export default Comment