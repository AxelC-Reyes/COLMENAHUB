import React from 'react';

const HexagonButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-48 h-52 flex items-center justify-center text-white font-bold text-xl transition-colors"
      style={{
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        borderRadius: '15px',
        backgroundColor: '#E6B800', // Color miel
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="text-center px-4">
        {text}
      </div>
      
      {/* Efecto hover */}
      <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-30"
           style={{
             backgroundColor: 'white',
             clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
             borderRadius: '15px'
           }}>
      </div>
    </button>
  );
};

export default HexagonButton;
