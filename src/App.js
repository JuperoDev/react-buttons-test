import React, { useState } from 'react';
import ButtonGrid from './components/ButtonGrid';
import ExamPage from './components/ExamPage';

function App() {
  const [showExam, setShowExam] = useState(false);

  const handleStartButtonClick = () => {
    setShowExam(true);
  };

  return (
    <div className="App">
      <div>
        Hola
      </div>
      {!showExam ? (
       <ButtonGrid onStartButtonClick={handleStartButtonClick} data-testid="buttonGrid" />
      ) : (
        <div>
          <ExamPage />
        </div>
      )}
    </div>
  );
}

export default App;
