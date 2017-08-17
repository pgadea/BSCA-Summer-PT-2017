import React from 'react'


const postStyle = {
  width: '100%',
  paddingTop: '4em',
  paddingBottom: '4em',
  marginBottom: '2em',
  fontFamily: 'sans-serif',
  textTransform: 'lowercase',
  letterSpacing: '0.1em'
  textAlign: 'center',
  border: 'thin dashed rgba(0,0,0,0.5)'
}

const Post = (props) =>
  <div style={postStyle}>
    {"I'm a post!"}
  </div>

export default Post
