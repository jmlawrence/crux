'use client';

import { useState } from 'react';

export default function Home() {
  // state with index
  const [index, setIndex] = useState(0);

  const questions = [
    'How comfortable are you with JavaScript?',
    'How comfortable are you with Java?',
    'What about TypeScript',
  ];

  return (
    <div className='flex flex-col justify-center h-screen bg-background'>
      <div className='w-[500px] text-2xl text-gray-700 h-[350px] bg-foreground flex flex-col justify-between rounded m-auto shadow-lg text-center py-6'>
        {questions[index]}

        <div className='flex justify-end px-4'>
          {index < questions.length - 1 && (
            <button
              className='bg-gray-600 text-white px-4 py-1 rounded'
              onClick={() => {
                setIndex((current) => current + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
