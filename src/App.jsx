import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import './App.css';

function App() {
  const { time, start, pause, reset, status } = useTimer({ interval: 100 }); // 100ms interval
  const [message, setMessage] = useState(''); // State to store the message

  const handleStart = () => {
    start();
    setMessage(''); // Clear the message when starting
  };

  const handlePause = () => {
    pause();
    setMessage('The timer is paused.'); // Set message when paused
  };

  const handleReset = () => {
    reset();
    setMessage('All reset successfully!'); // Set message when reset
  };

  // Handle button click based on status
  const handlePauseResumeToggle = () => {
    if (status === 'RUNNING') {
      handlePause();
    } else {
     start() // Resume the timer
      setMessage(''); // Clear the message when resuming
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-400 via-yellow-300 via-pink-400 to-green-400 p-8">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8">
        Fast Stopwatch
      </h2>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={handleStart}
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 active:animate-bounce active:bg-blue-700 transition-all duration-300 ease-in-out transform"
        >
          Start
        </button>
        <button
          onClick={handlePauseResumeToggle}
          className={`bg-${status === 'RUNNING' ? 'yellow-500' : 'green-500'} text-white px-6 py-3 rounded-full shadow-lg hover:bg-${status === 'RUNNING' ? 'yellow-600' : 'green-600'} active:animate-bounce active:bg-${status === 'RUNNING' ? 'yellow-700' : 'green-700'} transition-all duration-300 ease-in-out transform`}
        >
          {status === 'RUNNING' ? 'Pause' : 'Resume'}
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 active:animate-bounce active:bg-red-700 transition-all duration-300 ease-in-out transform"
        >
          Reset
        </button>
      </div>

      {/* Timer display with smooth transition */}
      <p
        className="text-3xl font-bold text-gray-900 mt-6 transition-all duration-500 ease-in-out transform"
        style={{ transform: `scale(${status === 'RUNNING' ? 1.1 : 1})`, opacity: status === 'RUNNING' ? 1 : 0.8 }}
      >
        Start Timer: {time}
      </p>

      {/* Show status message */}
      <p className="text-2xl text-green-500 font-semibold mt-4">{message}</p>

      {/* Conditionally display when running */}
      {status === 'RUNNING' && (
        <p className="text-xl text-green-500 text-center font-semibold mt-4">
          This is running successfully!
        </p>
      )}
    </div>
  );
}

export default App;
