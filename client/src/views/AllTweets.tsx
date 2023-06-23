import React from 'react'
import TweetNow from '../components/TweetNow'
import OtherTweets from '../components/OtherTweets'

const AllTweets = () => {
  return (
    <div style={{backgroundColor:'black'}}>
      <TweetNow/>
      <br />
      <OtherTweets/>
    </div>
  )
}

export default AllTweets