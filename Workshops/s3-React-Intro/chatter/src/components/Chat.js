import React from 'react'
import Post from './Post'

const chatSytle {
  width: '40%',
  marginLeft: '25%',
  marginRight: '25%'
}

const Chat = (props) =>
    <div style={chatSytle}>
      {
        props.chats.map((post, index) =>
          <Post post={post} key={index} />
        )
      }
    </div>

export default Chat
