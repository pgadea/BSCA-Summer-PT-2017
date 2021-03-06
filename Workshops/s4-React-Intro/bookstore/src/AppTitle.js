import React from 'react'

const divStyle = {
  backgroundColor: 'purple'
}

const headingStyle = {
  color: 'white'
}

const AppTitle = (props) =>
  <div style={divStyle}>
    <h1 style={headingStyle}>{props.title}</h1>
  </div>

export default AppTitle
