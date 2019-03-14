/* Display elapsed time of most recent comment */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const ElapsedTime = (props) => {
  const { timestamp } = props
  // Modify timestamp into parsable date string format
  let startDateTime = Date.parse(timestamp.replace('th' || 'rd', ","))

  return (
    <div className="elapsed-time">
      {/* Return elapsed time */}
      {moment(startDateTime).fromNow()}
    </div>
  )
}

ElapsedTime.propTypes = {
  timestamp : PropTypes.string
}

export default ElapsedTime