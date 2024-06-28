import React from 'react'

function Logo({width = '5px'}) {
  return (
    <div>
      <img src={'../logo.png'} alt="Logo" style={{width}} />
    </div>
  )
}

export default Logo