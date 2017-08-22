import React from 'react'


const addressSytle = {
  width: '50%',
  marginLeft: '25%',
  marginRight: '25%',
  textAlign: 'center',
  marginBottom: '5%'
}

const Address = (props) =>
    <div style={addressSytle}>
      <p>{props.street}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <p>{props.phoneNumber}</p>
    </div>


export default Address
