import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result, styles } = props;

  const displayStyles = {
    backgroundColor: '#858694',
    height: 100,
    color: '#ffffff',
    fontWeight: 700,
    padding: '10px 20px',
    justifyContent: 'right',
    fontSize: '3rem',
    ...styles,
  };

  return (
    <div style={displayStyles} className="calc-dilplay">
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.any).isRequired,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
