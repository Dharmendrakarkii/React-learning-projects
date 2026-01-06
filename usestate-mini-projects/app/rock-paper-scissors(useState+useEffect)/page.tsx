'use client'
import React, { useEffect, useState } from 'react'

const RockPaper = () => {
  const options = ['🪨', '📄', '✂️']

  const [selectedIdUser, setSelectedIdUser] = useState(null)
  const [selectedIdComp, setSelectedIdComp] = useState(null)
  const [result, setResult] = useState('')

  // Computer choice
  useEffect(() => {
    if (selectedIdUser !== null) {
      const randomNum = Math.floor(Math.random() * 3)
      setSelectedIdComp(randomNum)
    }
  }, [selectedIdUser])

  // Result logic
  useEffect(() => {
    if (selectedIdUser === null || selectedIdComp === null) return

    if (selectedIdUser === selectedIdComp) {
      setResult("It's a Tie 🤝")
    } else if (
      (selectedIdUser === 0 && selectedIdComp === 2) ||
      (selectedIdUser === 1 && selectedIdComp === 0) ||
      (selectedIdUser === 2 && selectedIdComp === 1)
    ) {
      setResult("You Win 🎉")
    } else {
      setResult("Computer Wins 😈")
    }
  }, [selectedIdUser, selectedIdComp])

  const resetGame = () => {
    setSelectedIdUser(null)
    setSelectedIdComp(null)
    setResult('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-[420px] text-center">

        <h1 className="text-3xl font-bold mb-6">Rock Paper Scissors</h1>

        {/* USER */}
        <div className="mb-6">
          <h2 className="text-black font-semibold mb-3">You</h2>
          <div className="flex justify-center gap-4">
            {options.map((item, id) => (
              <button
                key={id}
                onClick={() => setSelectedIdUser(id)}
                className="w-20 h-20 text-4xl rounded-full bg-pink-200 hover:scale-110 transition shadow"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* COMPUTER */}
        {selectedIdComp !== null && (
          <div className="mb-6">
            <h2 className="text-black font-semibold mb-3">Computer</h2>
            <div className="text-7xl">
              {options[selectedIdComp]}
            </div>
          </div>
        )}

        {/* RESULT */}
        {result && (
          <div className="mb-6">
            <span className="px-4 py-2 bg-yellow-200  text-black rounded-full font-semibold">
              {result}
            </span>
          </div>
        )}

        {/* RESET */}
        {(selectedIdUser !== null) && (
          <button
            onClick={resetGame}
            className="bg-black text-white px-6 py-2 rounded hover:opacity-80"
          >
            Play Again
          </button>
        )}

      </div>
    </div>
  )
}

export default RockPaper
