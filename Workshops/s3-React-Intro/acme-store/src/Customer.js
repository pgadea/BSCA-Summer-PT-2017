import React from 'react'

const customerSytle = {
  width: '50%',
  marginLeft: '25%',
  marginRight: '25%',
  textAlign: 'center'
}

const Customer = (props) =>
    <div style={customerSytle}>
      {
        props.customers.map((customer, index) =>
          <div key={index}>
            <h3>Name: {customer.name}</h3>
            <h3>Email: {customer.email}</h3>
            <img style={{borderStyle: 'solid'}} src={customer.img} />
          </div>
        )
      }
    </div>

export default Customer
