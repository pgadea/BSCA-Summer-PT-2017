import React from 'react'

export const BlueButton = () =>
  <input type='button'
    onClick={() => console.log('Blue Button clicked!')}
    style={{ backgroundColor: 'blue', color: 'white'  }}
    value='Blue Button'
  />

  const OrangeButton = () =>
    <input type='button'
      onClick={() => console.log('Orange Button clicked!')}
      style={{ backgroundColor: 'orange', color: 'white'  }}
      value='Orange Button'
    />

    const GreenButton = () =>
      <input type='button'
        onClick={() => console.log('Green Button clicked!')}
        style={{ backgroundColor: 'green', color: 'white'  }}
        value='Green Button'
      />

      const WhiteButton = () =>
        <input type='button'
          onClick={() => console.log('White Button clicked!')}
          style={{ backgroundColor: 'white', color: 'black'  }}
          value='White Button'
        />


export {OrangeButton, GreenButton, WhiteButton as default}
