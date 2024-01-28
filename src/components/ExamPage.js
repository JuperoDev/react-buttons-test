import React, { useState } from 'react';
import examData from '../mocks/examMock.json'

function ExamPage() {
  // State to keep track of selected answers
  const [selectedAnswers, setSelectedAnswers] = useState(Array(examData.questionSet.length).fill(null));

  // Function to handle radio button selection
  const handleRadioChange = (index, value) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = value;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <div>
      <h1>Exam Page</h1>
      <ul>
        {examData.questionSet.map((item, index) => (
          <li key={index}>
            {item.question}
            <br />
            <label>
              <input
                type="radio"
                name={`answer_${index}`}
                value="Verdadero"
                checked={selectedAnswers[index] === "Verdadero"}
                onChange={() => handleRadioChange(index, "Verdadero")}
                disabled={selectedAnswers[index] !== null}
              />
              Verdadero
            </label>
            <label>
              <input
                type="radio"
                name={`answer_${index}`}
                value="Falso"
                checked={selectedAnswers[index] === "Falso"}
                onChange={() => handleRadioChange(index, "Falso")}
                disabled={selectedAnswers[index] !== null}
              />
              Falso
            </label>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center h-screen">
        <div>
          <button
            className="bg-red-500 rounded-full px-5 py-2 text-white mr-4 cursor-pointer"
          >
            Finalizar prueba
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamPage;