'use client'
import { Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const ToDo = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addInputToTodos = () => {
    if (!inputValue.trim()) return // prevent empty todos
    setTodos([...todos, inputValue])
    setInputValue('') // clear input
  }

  const deleteTodo = (id) => {
    const todosCopy = [...todos]
    todosCopy.splice(id, 1)
    setTodos(todosCopy)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">📝 My To-Do List</h1>

        {/* Input and Button */}
        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            placeholder="Enter task to do"
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            onClick={addInputToTodos}
            disabled={!inputValue.trim()}
            className="bg-pink-400 text-white px-4 rounded-r-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-2">
          {todos.map((item, id) => (
            <div
              key={id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow hover:bg-pink-50 transition"
            >
              <span className="text-gray-900">{item}</span>
              <Trash2
                onClick={() => deleteTodo(id)}
                className="text-pink-400 hover:text-pink-600 cursor-pointer"
              />
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-4">No tasks yet. Add your first todo!</p>
        )}
      </div>
    </div>
  )
}

export default ToDo
