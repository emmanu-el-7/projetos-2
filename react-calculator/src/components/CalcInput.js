import React, { useState } from 'react'
import './CalcInput.css'

function CalcInput () {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  const handleValue1Change = e => {
    setValue1(e.target.value)
  }

  const handleValue2Change = e => {
    setValue2(e.target.value)
  }

  return (
    <div>
      <label className='calc-input-container'>
        Valor 1:
        <input
          className='calc-input'
          type='number'
          value={value1}
          onChange={handleValue1Change}
        />
      </label>
      <label className='calc-input-container'>
        Valor 2:
        <input
          className='calc-input'
          type='number'
          value={value2}
          onChange={handleValue2Change}
        />
      </label>
    </div>
  )
}

export default CalcInput
