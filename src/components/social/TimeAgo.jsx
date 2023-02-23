import { parseISO,formatDistanceToNow } from 'date-fns'

import React from 'react'

const TimeAgo = ({timestamp}) => {
    let timeAgo=''
    if(timestamp){
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo =`${timePeriod} age`
    }
  return (
    <small title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </small>
  )
}

export default TimeAgo
