import React from 'react'

const titleStyle = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  letterSpacing: '0.1em'
}

const Welcome = (props) =>
  <div style={titleStyle}>
    <h1>{props.title}</h1>
  </div>

export default Welcome
