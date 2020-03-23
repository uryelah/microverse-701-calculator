import React from 'react';
import PropTypes from 'prop-types';

function Display({ result, styles, top }) {
  const displayStyles = {
    backgroundColor: '#858694',
    height: 100,
    color: '#ffffff',
    fontWeight: 700,
    padding: '20px 20px 10px 20px',
    justifyContent: 'right',
    fontSize: '3rem',
    position: 'relative',
    ...styles,
  };

  const supStyles = {
    position: 'absolute',
    top: '-25px',
    right: '30px',
    fontWeight: '600',
    fontSize: '1.5rem',
  };

  return (
    <div style={displayStyles} className="calc-dilplay">
      <p
        style={supStyles}
      >
        <small>{top}</small>
      </p>
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  top: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
  styles: PropTypes.objectOf(PropTypes.any).isRequired,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
