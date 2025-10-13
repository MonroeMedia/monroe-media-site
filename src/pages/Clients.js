import React from 'react'

function Clients({className}) {
  return (
    <div className={`clients-main-div ${className}`} id="clients">
        <h2 className='clients-eg-button'>ENVIOUS GARDENS</h2>
        <h2 className='clients-h2os-button'>H2OS</h2>
        <h2 className='clients-cbd-button'>CAROLINA BUD DISPENSARY</h2>
        <h2 className='clients-tt-button'>TY'S TOUCH</h2>
        <h2 className='clients-wn-button'>WILSONS NURSERY</h2>
        <h2 className='clients-vfm-button'>VELVET FM</h2>
    </div>
  )
}

export default Clients