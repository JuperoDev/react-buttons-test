import React from "react";

const buttonStyle = {
  backgroundColor: "green",
  borderRadius: "50px",
  padding: "10px 20px",
  color: "white",
  marginRight: "10px",
  cursor: "pointer",
};

const disabledButtonStyle = {
  backgroundColor: "gray",
  borderRadius: "50px",
  padding: "10px 20px",
  color: "white",
  marginRight: "10px",
  cursor: "not-allowed",
};

const ButtonGrid = ({ onStartButtonClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <button
          style={buttonStyle}
          onClick={() => {
            onStartButtonClick(); // Notify the parent component
          }}
        >
          Empezar prueba
        </button>
        <button style={disabledButtonStyle} disabled>
          Ver resultados
        </button>
      </div>
    </div>
  );
};

export default ButtonGrid;
