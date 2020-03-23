import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ styles, clickHandler }) {
  const panelStyles = {
    flexDirection: 'column',
    ...styles,
  };

  const btnNames = ['AC', '+/-', '%', '÷', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const rowStyles = {
    height: 100,
    display: 'flex',
  };

  const makeRow = (btnNames, row) => {
    const result = [];

    btnNames.some((name, i) => {
      if (i < (row * 4) && (i + 1) > (row - 1) * 4) {
        result.push(<Button wide={name === '0' && true} color={(((i + 1) % 4 !== 0) && i !== btnNames.length - 1 ? 'grey' : 'orange')} name={name} onClick={clickHandler} />);
      }

      return null;
    });

    return (
      <div style={rowStyles}>
        { result.map(el => el)}
      </div>
    );
  };

  return (
    <div style={panelStyles} className="calc-panel">
      { makeRow(btnNames, 1) }
      { makeRow(btnNames, 2) }
      { makeRow(btnNames, 3) }
      { makeRow(btnNames, 4) }
      { makeRow(btnNames, 5) }
    </div>
  );
}

ButtonPanel.propTypes = {
  styles: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
