import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name, color, wide } = props;

  const colors = {
    grey: '#e0e0e0',
    orange: '#f5913e',
  }

  const buttonStyles = {
    flexBasis: wide ? '50%' : '25%',
    height: '100%',
    boxSizing: 'border-box',
    border: '1px solid #bababa',
    color: '#000000',
    fontWeight: 400,
    fontSize: '1.25rem',
    backgroundColor: colors[color],
  }

  const idMaker = name => {
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
    <button type="button" name={name} id={`btn_${idMaker(name)}`} className="calc-btn" style={buttonStyles}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
}

export default Button;
