import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calculator">
          <Display />
          <ButtonPanel />
        </div>
      </header>
    </div>
  );
}

export default App;
