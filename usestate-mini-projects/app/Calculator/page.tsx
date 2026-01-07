'use client'
import React, { useState } from 'react'

const Calculator = () => {
  const [answer, setAnswer] = useState('')
  const calcKeys = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['AC', '%', '⌫']
  ]

  const nonNumbers = ['/', '*', '-', '+', '=', 'AC', '%', '⌫']

  const calculate = (key) => {
    if (key === '=') {
      try {
        const finalAns = eval(answer)
        setAnswer(finalAns.toString())
      } catch {
        setAnswer('Error')
      }
    } else if (key === 'AC') {
      setAnswer('')
    } else if (key === '⌫') {
      setAnswer(answer.slice(0, -1))
    } else {
      setAnswer(answer + key)
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-72">
        
        {/* Display */}
        <div className="bg-gray-200 text-right p-4 rounded-lg mb-4 text-2xl font-mono text-gray-900 overflow-x-auto">
          {answer || 0}
        </div>

        {/* Keys */}
        <div className="space-y-2">
          {calcKeys.map((row, rowId) => (
            <div className="flex justify-between" key={rowId}>
              {row.map((key, keyId) => {
                const isOperator = nonNumbers.includes(key)
                const bgColor = isOperator ? 'bg-pink-300' : 'bg-orange-400'
                return (
                  <button
                    key={keyId}
                    onClick={() => calculate(key)}
                    className={`${bgColor} text-gray-900 font-bold w-16 h-16 rounded-full shadow-md hover:opacity-80 transition`}
                  >
                    {key}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calculator
