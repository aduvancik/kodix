import React from 'react';

export default function Message({ text, isPositive }) {
  return (
    <div
      className={`fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg text-white flex items-center space-x-3 transition-transform duration-300 ${
        isPositive ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {isPositive ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
