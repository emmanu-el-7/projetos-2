import React, { useState } from 'react'

import CalcInput from './CalcInput'
import CalcOperations from './CalcOperations'
import './Calculator.css'

function Calculator () {
  const [result, setResult] = useState(0)
  const [input1, setInput1] = useState(0) // Inicialize com 0
  const [input2, setInput2] = useState(0) // Inicialize com 0

  const handleAdd = () => {
    const sum = input1 + input2
    setResult(sum)
  }

  const handleSubtract = () => {
    const minus = input1 - input2
    setResult(minus)
  }

  const handleMultiply = () => {
    const product = input1 * input2
    setResult(product)
  }

  const handleDivide = () => {
    if (input2 !== 0) {
      const quotient = input1 / input2
      setResult(quotient)
    } else {
      setResult('Erro: Impossível realizar divisão por zero')
    }
  }

  return (
    <div>
      <h2 className='calculator'>Calculadora React</h2>
      <CalcInput
        value1={input1}
        value2={input2}
        onChange1={e => setInput1(parseFloat(e.target.value))}
        onChange2={e => setInput2(parseFloat(e.target.value))}
      />
      <CalcOperations
        onAdd={handleAdd}
        onSubtract={handleSubtract}
        onMultiply={handleMultiply}
        onDivide={handleDivide}
      />
      <p className='calculator'>Resultado: {result}</p>
    </div>
  )
}

export default Calculator
