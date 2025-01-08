import React from "react";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        <span className="text-xl text-gray-700 font-medium">{message}</span>
      </div>
    </div>
  );
}
