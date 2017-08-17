import React from 'react'

const paragraphsStyle = {
  color: 'blue'
}

const BookParagraph = (props) =>
  <p style={paragraphsStyle} >{ props.children }</p>

export default BookParagraph
