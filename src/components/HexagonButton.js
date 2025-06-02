import React from 'react';

const HexagonButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-48 h-52 bg-honey-7549 flex items-center justify-center text-white font-bold text-xl hover:bg-honey-600 transition-colors"
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        borderRadius: '15px'
      }}
    >
      <div className="text-center px-4">
        {text}
      </div>
    </button>
  );
};

export default HexagonButton;

// DONE