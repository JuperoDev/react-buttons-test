import React, { useState } from 'react';
import ButtonGrid from './components/ButtonGrid';
import ExamPage from './components/ExamPage'

function App() {
  const [showHello, setShowHello] = useState(false);

  const handleStartButtonClick = () => {
    setShowHello(true);
  };

  return (
    <div className="App">
      {!showHello ? (
        <ButtonGrid onStartButtonClick={handleStartButtonClick} />
      ) : (
        <div>
          <ExamPage/>
        </div>
      )}
    </div>
  );
}

export default App;
