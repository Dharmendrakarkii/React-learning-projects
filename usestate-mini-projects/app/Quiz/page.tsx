'use client'
import React, { useState } from 'react'

const quizQuestionsAnswers = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    question: "Who developed React?",
    answers: ["Google", "Facebook", "Microsoft", "Amazon"],
    correctAnswer: "Facebook"
  },
  {
    question: "Which language runs in a web browser?",
    answers: ["Python", "Java", "C++", "JavaScript"],
    correctAnswer: "JavaScript"
  }
]

const Quiz = () => {
  const [score, setScore] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})

  const quizSelection = (questionId, answer) => {
    // prevent re-answering same question
    if (selectedAnswers[questionId]) return

    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    })

    if (quizQuestionsAnswers[questionId].correctAnswer === answer) {
      setScore(prev => prev + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
        
        <h1 className="text-2xl text-gray-900 font-bold text-center mb-4">
          🧠 Quiz App
        </h1>

        <p className="text-center text-gray-900 mb-6 text-lg">
          Score: <span className="font-semibold">{score}</span> / {quizQuestionsAnswers.length}
        </p>

        {quizQuestionsAnswers.map((item, id) => (
          <div key={id} className="mb-6">
            <h2 className="font-semibold mb-2 text-gray-900">
              {id + 1}. {item.question}
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {item.answers.map((ans, ansId) => {
                const selected = selectedAnswers[id]
                const isCorrect = ans === item.correctAnswer
                const isSelected = ans === selected

                let bgColor = "bg-gray-200"
                if (selected) {
                  if (isCorrect) bgColor = "bg-green-400"
                  else if (isSelected) bgColor = "bg-red-400"
                }

                return (
                  <button
                    key={ansId}
                    onClick={() => quizSelection(id, ans)}
                    className={`${bgColor} text-gray-900 p-3 rounded-lg hover:opacity-80 transition`}
                  >
                    {ans}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {Object.keys(selectedAnswers).length === quizQuestionsAnswers.length && (
          <div className="text-center text-gray-900 mt-6 font-bold text-xl">
            🎉 Final Score: {score} / {quizQuestionsAnswers.length}
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz
