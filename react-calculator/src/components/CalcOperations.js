import React from 'react'
import { FaDivide, FaMinus, FaPlus, FaTimes } from 'react-icons/fa'
import './CalcOperations.css'

function CalcOperations ({ onAdd, onSubtract, onMultiply, onDivide }) {
  return (
    <div className='calc-operations'>
      <button onClick={onAdd}>
        <FaPlus />
      </button>
      <button onClick={onSubtract}>
        <FaMinus />
      </button>
      <button onClick={onMultiply}>
        <FaTimes />
      </button>
      <button onClick={onDivide}>
        <FaDivide />
      </button>
    </div>
  )
}

export default CalcOperations
