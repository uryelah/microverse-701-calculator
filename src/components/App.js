import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const styles = {
  display: 'flex',
  boxSizing: 'border-box',
  width: 700,
  margin: '0 auto',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      calcPath: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const newState = calculate(this.state, btnName);

    this.setState(newState);
  }

  render() {
    const { total, next, calcPath } = this.state;

    return (
      <div className="App" style={styles}>
        <header className="App-header">
          <div className="calculator" style={{ boxShadow: '0 0 10px #0f0f18' }}>
            <Display styles={styles} result={!total ? next : total} top={calcPath} />
            <ButtonPanel styles={styles} clickHandler={this.handleClick} />
          </div>
        </header>
      </div>
    );
  }
};

export default App;
