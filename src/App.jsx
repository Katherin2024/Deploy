import React, { useState } from 'react';
import './App.css';

const choices = ['piedra', 'papel', 'tijera'];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const getResult = (user, computer) => {
    if (user === computer) return '¡Empate!';
    if (
      (user === 'piedra' && computer === 'tijera') ||
      (user === 'papel' && computer === 'piedra') ||
      (user === 'tijera' && computer === 'papel')
    ) {
      return '¡Ganaste!';
    } else {
      return '¡Perdiste!';
    }
  };

  const handleClick = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computer);
    setResult(getResult(choice, computer));
  };

  return (
    <div className="app">
      <h1>Piedra, Papel o Tijera</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleClick(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      <div className="results">
        {userChoice && (
          <>
            <p>Tu elección: <strong>{userChoice}</strong></p>
            <p>Elección de la computadora: <strong>{computerChoice}</strong></p>
            <h2>{result}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
