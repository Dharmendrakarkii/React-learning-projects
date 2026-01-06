'use client'
import React, { useEffect, useRef, useState } from 'react'

const TimeTester = () => {
  const colors = ['red', 'blue', 'green', 'yellow'];

  const colorClasses = [
    'bg-red-700',
    'bg-blue-700',
    'bg-green-700',
    'bg-yellow-700',
  ];

  const [winnerId, setWinnerId] = useState<number | null>(null);
  const [randomId, setRandomId] = useState(0);
  const [winTime, setWinTime] = useState<number | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  function generateRandomColors() {
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      setRandomId(randomIndex);
    }, 500);
  }

  function assignWinningColor() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const randomIndex = Math.floor(Math.random() * colors.length);
    setWinnerId(randomIndex);
    generateRandomColors();
  }

  function checkWinStatus() {
    if (winnerId === null) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const timeTaken = ((Date.now() - startTimeRef.current) / 1000).toFixed(2);
    setWinTime(Number(timeTaken));

    if (randomId === winnerId) {
      alert(`🎉 You win in ${timeTaken}s!`);
    } else {
      alert('❌ You lose! Try again');
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {winTime && (
        <div className="text-lg font-semibold">
          Time taken: {winTime}s
        </div>
      )}

      <div
        onClick={checkWinStatus}
        className={`w-72 h-72 cursor-pointer rounded-lg shadow-lg transition-all ${colorClasses[randomId]}`}
      />

      <button
        onClick={assignWinningColor}
        className="px-6 py-2 bg-black text-white rounded-md"
      >
        Start the game
      </button>

      {winnerId !== null && (
        <div className="text-lg font-medium">
          Pick color <span className="font-bold">{colors[winnerId]}</span> to win!!
        </div>
      )}
    </div>
  );
};

export default TimeTester;
