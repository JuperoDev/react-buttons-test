import React from "react";

const ButtonGrid = ({ onStartButtonClick }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <button
          className="bg-green-500 rounded-full px-5 py-2 text-white mr-4 cursor-pointer"
          onClick={() => {
            onStartButtonClick(); // Notify the parent component
          }}
        >
          Empezar prueba
        </button>
        <button
          className="bg-green-900 rounded-full px-5 py-2 text-white mr-4 cursor-not-allowed"
          disabled
        >
          Ver resultados
        </button>
      </div>
    </div>
  );
};

export default ButtonGrid;
