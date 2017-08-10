import React from 'react'
import BookParagraph from './BookParagraph'

const divStyle = {
  backgroundColor: 'yellow'

}

const h3Style = {
  color: 'purple'
}




const Book = (props) =>
  <div style={ divStyle }>
    <h3 style={ h3Style }>Title: { props.book.title }</h3>
    <BookParagraph>Author: {props.book.author}</BookParagraph>
    <BookParagraph>Rank: { props.rank }</BookParagraph>
    <BookParagraph>Last Read By: { props.readBy }</BookParagraph>
    {
      (props.rank === 1) ? <BookParagraph>Best Seller</BookParagraph> : null
    }
  </div>

export default Book
