'use client'

import { useState } from "react";

const Dice = () => {
  const [randomNum, setRandomNum] = useState<number[]>([]);
  const [output, setOutput] = useState('');

  function rollTheDice(action: string) {
    const firstRandomNum = Math.ceil(Math.random() * 6);
    const secondRandomNum = Math.ceil(Math.random() * 6);
    const sum = firstRandomNum + secondRandomNum;

    if (action === 'less' && sum < 7) {
      setOutput('You win!');
    } else if (action === 'more' && sum > 7) {
      setOutput('You win!');
    } else {
      setOutput('You lose!');
    }

    setRandomNum([firstRandomNum, secondRandomNum]);
  }

  return (
    <div className="p-6 text-center">
      <button
        onClick={() => rollTheDice('less')}
        className="text-green-600 font-semibold p-4 m-4 rounded shadow-md"
      >
        Less than 7
      </button>

      <button
        onClick={() => rollTheDice('more')}
        className="text-green-600 font-semibold p-4 m-4 rounded shadow-md"
      >
        More than 7
      </button>

      <div className="text-xl font-bold mt-4">{output}</div>

      <div className="flex justify-center gap-6 mt-6">
        {randomNum[0] ? (
          <img
            src={`/dice${randomNum[0]}.png`}
            height={200}
            width={200}
            alt="dice one"
          />
        ) : (
          <div className="text-gray-400 italic">
            Roll the dice 🎲
          </div>
        )}

        {randomNum[1] ? (
          <img
            src={`/dice${randomNum[1]}.png`}
            height={200}
            width={200}
            alt="dice two"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Dice;
