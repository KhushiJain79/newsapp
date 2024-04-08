import React from 'react'
import Loading from './spinner.gif'
function Spinner() {
  return (
    <div className='text-center'>
      <img  src={Loading} alt="loading"/>
    </div>
  )
}

export default Spinner
