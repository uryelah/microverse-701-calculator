import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const styles = {
  display: 'flex',
  boxSizing: 'border-box',
  width: 700,
  margin: '0 auto',
};

function App() {
  return (
    <div className="App" style={styles}>
      <header className="App-header">
        <div className="calculator" style={{ boxShadow: '0 0 10px #0f0f18' }}>
          <Display styles={styles} />
          <ButtonPanel styles={styles} />
        </div>
      </header>
    </div>
  );
}

export default App;
