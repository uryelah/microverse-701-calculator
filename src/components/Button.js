import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;

  const idMaker = (name) => {
    let id;
    switch (name) {
      case '+/-':
        id = 'pm';
        break;
      case '%':
        id = 'module';
        break;
      case '÷':
        id = 'divide';
        break;
      case 'x':
      case 'X':
        id = 'times';
        break;
      case '-':
        id = 'minus';
        break;
      case '+':
        id = 'plus';
        break;
      case '.':
        id = 'decimal';
        break;
      case '=':
        id = 'equal';
        break;
      default:
        id = name;
    }
    return id;
  };

  return (
    <button type="button" name={name} id={`btn_${idMaker(name)}`} className="calc-btn">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
